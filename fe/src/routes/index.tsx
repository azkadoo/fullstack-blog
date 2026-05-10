import { createFileRoute, useRouter } from "@tanstack/react-router";
import React, { useState } from "react";
import PostCard from "#/modules/post/components/post-card";
import { createPost } from "#/modules/post/lib/create-post";
import { getPost } from "#/modules/post/lib/get-posts";

export const Route = createFileRoute("/")({
	component: Home,
	loader: getPost,
});

function Home() {
	const router = useRouter();
	const posts = Route.useLoaderData();
	console.log(posts);
	const [postTitle, setPostTitle] = useState("");
	const [postContent, setPostContent] = useState("");

	function handleChangePostTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setPostTitle(e.target.value);
	}

	function handleChangePostContent(e: React.ChangeEvent<HTMLTextAreaElement>) {
		const value = e.target.value;
		setPostContent(value);
	}

	async function handleCreatePost() {
		if (!postTitle || !postContent)
			return alert("Title and Content must be filled.");
		await createPost(postTitle, postContent);
		router.invalidate();
		setPostTitle("");
		setPostContent("");
	}

	return (
		<div className="p-8 justify-center text-center gap-8">
			<div className="flex flex-col gap-4 max-w-sm mb-8">
				{/* input title */}
				<input
					placeholder="Input Title"
					className="border p-2 rounded"
					value={postTitle}
					onChange={handleChangePostTitle}
				/>
				{/* input content */}
				<textarea
					placeholder="Input the content..."
					className="border p-2 rounded"
					value={postContent}
					onChange={handleChangePostContent}
				/>
				<button className="border" type="button" onClick={handleCreatePost}>
					Save Blog Post
				</button>
			</div>
			{/* Mapping Post */}
			<div className="p-8 flex justify-start text-center gap-8">
				{posts.map((post) => {
					return (
						<div key={post.id} className="p-2 grid grid-cols-1 max-w-80 gap-2">
							<div className="text-lg font-semibold">{post.title}</div>
							<div className="text-sm">{post.content}</div>
							<div>{post.published ? "Published" : "Draft"}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
