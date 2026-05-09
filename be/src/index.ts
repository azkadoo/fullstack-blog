import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { postRouter } from "./modules/posts/router";

const app = new Hono()
	.get("/", (c) => {
		return c.text("Hello Hono!");
	})
	.route("/posts", postRouter);

serve(
	{
		fetch: app.fetch,
		port: 8000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
