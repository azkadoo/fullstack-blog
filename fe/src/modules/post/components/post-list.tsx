import type { Post } from "../types";
import PostCard from "./post-card";

interface postListProps {
	posts: Post[];
}

export function PostList({ posts }: postListProps) {
	return (
		<div className="p-8 grid grid-cols-1 justify-start text-start gap-8">
			{posts.map((post) => {
				return <PostCard key={post.id} {...post} />;
			})}
		</div>
	);
}
