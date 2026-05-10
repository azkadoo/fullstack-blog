import { createFileRoute } from "@tanstack/react-router";
import { getPost } from "#/modules/post/lib/get-posts";

export const Route = createFileRoute("/")({
	component: Home,
	loader: getPost,
});

function Home() {
	const posts = Route.useLoaderData();
	console.log(posts);

	return (
		<div>
			{posts.map((post) => {
				return (
					<div key={post.id}>
						<div>{post.title}</div>
						<div>{post.content}</div>
						<div>{post.published}</div>
					</div>
				);
			})}
		</div>
	);
}
