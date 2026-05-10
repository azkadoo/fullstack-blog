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
		<div className="p-8 flex justify-start text-center gap-8">
			{posts.map((post) => {
				return (
					<div key={post.id} className="p-2 grid grid-cols-1 max-w-80 gap-2">
						<div className="text-lg font-semibold">{post.title}</div>
						<div className="text-sm">{post.content}</div>
						<div>{post.published}</div>
					</div>
				);
			})}
		</div>
	);
}
