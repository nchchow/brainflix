import React from "react";
import UserIcon from "./UserIcon";
import NewCommentForm from "./NewCommentForm";

const NewComment = () => {
	return (
		<article className="new-comment">
			<UserIcon />
			<NewCommentForm />
		</article>
	);
};

export default NewComment;
