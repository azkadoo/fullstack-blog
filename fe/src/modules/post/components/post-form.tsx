import { useRouter } from "@tanstack/react-router";
import React, { useState } from "react";
import { createPost } from "../lib/create-post";

export default function PostForm() {
	const router = useRouter();
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
		setPostTitle("");
		setPostContent("");
		router.invalidate();
	}

	return (
		<div className="p-8 flex flex-col justify-center items-center gap-4 w-full mb-8">
			<h1 className="text-2xl text-blue-950 font-medium">
				Create Your Own Blog
			</h1>
			{/* input title */}
			<input
				placeholder="Make your blog title..."
				className="w-full border border-blue-400 bg-blue-100 text-blue-950 p-2 rounded"
				value={postTitle}
				onChange={handleChangePostTitle}
			/>
			{/* input content */}
			<textarea
				placeholder="Write your blog content here..."
				className="w-full h-32 border border-blue-400 bg-blue-100 text-blue-950 p-2 rounded"
				value={postContent}
				onChange={handleChangePostContent}
			/>
			<button
				className="max-w-sm p-4 rounded-2xl bg-blue-950 text-amber-50 hover:bg-green-200 hover:text-blue-950"
				type="button"
				onClick={handleCreatePost}
			>
				Save Blog Post
			</button>
		</div>
	);
}
