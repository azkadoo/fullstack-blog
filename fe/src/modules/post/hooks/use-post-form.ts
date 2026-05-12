import { useRouter } from "@tanstack/react-router";
import type React from "react";
import { useState } from "react";
import { createPost } from "../lib/create-post";

export default function usePostForm() {
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
	return {
		postTitle,
		handleChangePostTitle,
		postContent,
		handleChangePostContent,
		handleCreatePost,
	};
}
