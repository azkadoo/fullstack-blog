interface PostCardProps {
	id: number;
	title: string;
	content: string;
	published: boolean;
}

export default function PostCard({ title, content, published }: PostCardProps) {
	return (
		<div className={published ? "opacity-50" : ""}>
			<div className="text-blue-950 border border-2 border-blue-200 p-4 min-w-64 grid grid-cols-1 gap-4 rounded-2xl">
				<div className="text-2xl font-semibold">{title}</div>
				<div className="p-2 bg-blue-100 rounded-lg text-blue-950 text-sm">
					{content}
				</div>
				<div className="bg-blue-600 text-amber-50 rounded-2xl max-w-40 font-sm px-4 py-1 text-center">
					{published ? "Published" : "Not Published"}
				</div>
			</div>
		</div>
	);
}
