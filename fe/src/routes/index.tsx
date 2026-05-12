import { createFileRoute } from "@tanstack/react-router";
import PostForm from "#/modules/post/components/post-form";
import { PostList } from "#/modules/post/components/post-list";
import { getPost } from "#/modules/post/lib/get-posts";

export const Route = createFileRoute("/")({
	component: Home,
	loader: getPost,
});

function Home() {
	const posts = Route.useLoaderData();

	return (
		<>
			<div className="p-8 justify-center text-center gap-8">
				<PostForm />
				{/* Mapping Post */}
				<PostList posts={posts} />
			</div>
		</>
	);
}
