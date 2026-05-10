import type { Post } from "../types";

export async function createPost(
	title: string,
	content: string,
): Promise<Post> {
	const response = await fetch("http://localhost:8000/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title,
			content,
		}),
	});
	const data = await response.json();
	return data;
}
