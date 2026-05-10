import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { postRouter } from "./modules/posts/router";
import { cors } from "hono/cors";

const app = new Hono().use(cors()).route("/posts", postRouter);

serve(
	{
		fetch: app.fetch,
		port: 8000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);
