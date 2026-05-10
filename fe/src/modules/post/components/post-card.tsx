interface PostCardProps {
	title: string;
	content: string;
	published: boolean;
}

export default function PostCard({ title, content, published }: PostCardProps) {
	<div className={published ? "opacity-50" : ""}>
		<div>{title}</div>
		<div>{content}</div>
	</div>;
}
