import { useState, useEffect } from "react";
import { CommentInt } from "./interfaces.ts";
import Comment from "./Comment";

const Comments = () => {
	const [comments, setComments] = useState<CommentInt[]>([]);

	useEffect(() => {
		fetch("https://dummyjson.com/comments")
			.then((res: Response) => res.json())
			.then(
				(data: { comments: CommentInt[]; total: number; skip: number; limit: number }) => {
					setComments(data.comments);
				}
			);
	}, []);

	return (
		<div className="commentContainer">
			{comments.map((comment: CommentInt) => (
				<Comment
					id={comment.id}
					body={comment.body}
					postId={comment.postId}
					likes={comment.likes}
					user={comment.user}
				/>
			))}
		</div>
	);
};

export default Comments;
