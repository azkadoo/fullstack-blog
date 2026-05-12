export async function deletePost(id: number): Promise<void> {
	try {
		const response = await fetch(`http://localhost:8000/posts/${id}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			throw new Error("Failed to delete post");
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
}
