import React from "react";
import useTimeElapsed from "../hooks/useTimeElapsed";

const CommentTimestamp = ({ timestamp }) => {
	const timeElapsed = useTimeElapsed(timestamp);

	return <span className="comment__date">{timeElapsed}</span>;
};

export default CommentTimestamp;
