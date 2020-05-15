import React from "react";
import CommentTimestamp from "./CommentTimestamp";

const Comment = (props) => {
	let { name, timestamp, comment } = props;
	return (
		<>
			<article className="comment">
				<div className="comment--left">
					<div className="comment__user-icon"></div>
				</div>
				<div className="comment--right">
					<div className="comment--right--top">
						<span className="comment__name">{name}</span>
						<CommentTimestamp timestamp={timestamp} />
					</div>
					<p className="comment__content">{comment}</p>
				</div>
			</article>
			<hr className="comment__divider" />
		</>
	);
};

export default Comment;
