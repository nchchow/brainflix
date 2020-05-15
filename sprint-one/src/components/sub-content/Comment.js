import React from "react";

const Comment = (props) => (
	<>
		<article className="comment">
			<div className="comment--left">
				<div className="comment__user-icon"></div>
			</div>
			<div className="comment--right">
				<div className="comment--right--top">
					<span className="comment__name">{props.name}</span>
					<span className="comment__date">{props.timestamp}</span>
				</div>
				<p className="comment__content">{props.comment}</p>
			</div>
		</article>
		<hr className="comment__divider" />
	</>
);
