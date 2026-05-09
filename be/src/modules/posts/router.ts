import { Hono } from "hono";
import { prisma } from "../../utils/prisma";
import { zValidator } from "@hono/zod-validator";
import { postSchema } from "./schema";

export const postRouter = new Hono()
    .get("/", async (c)=>{
        const posts = await prisma.post.findMany()
        return c.json(posts)
    })
    .get("/:id", async (c)=>{
        const id = c.req.param("id")
        const post = await prisma.post.findUnique({
            where: {
                id: Number(id),
            },
        })
        return c.json(post ?? { messages: "Post Not Found"}, 404)
    })
    .post("/", zValidator("json", postSchema), async (c)=>{
        const body = c.req.valid("json")
        const newPost = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json(newPost)
    })
    .post("/:id/publish", async (c) => {
        const id = c.req.param("id")
        const post = await prisma.post.findUnique({
            where: {
                id: Number(id)
            }
        })
        if (!post) {
            return c.json({ message: "Failed to publish [post not found]" }, 404)
        }

        const publish = await prisma.post.update({
            where: {
                id: Number(id)
            },
            data: {
                publish: true
            }
        })
        return c.json(publish)
    })
    .delete("/:id", async (c) => {
        const id = Number(c.req.param("id"));

        const post = await prisma.post.findUnique({
            where: {
                id: Number(id)
            },
        });
        if (!post) {
            return c.json({ message: "Failed to delete post [post not found]" }, 404)
        }

        await prisma.post.delete({ where: { id } });

        return c.json({ message: "Blog post deleted successfully" })
    })