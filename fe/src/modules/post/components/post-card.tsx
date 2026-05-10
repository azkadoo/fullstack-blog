interface PostCardProps {
	title: string;
	content: string;
	published: boolean;
}

export default function PostCard({ title, content, published }: PostCardProps) {
	<div className={published ? "line-through" : ""}>
		<div>{title}</div>
		<div>{content}</div>
	</div>;
}
