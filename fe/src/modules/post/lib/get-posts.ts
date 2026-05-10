import type { Post } from "../types";

export async function getPost(): Promise<Post[]> {
	try {
		const response = await fetch("http://localhost:8000/posts");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
	return [];
}
