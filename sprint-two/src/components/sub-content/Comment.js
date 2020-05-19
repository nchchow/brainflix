import React from "react";
import Timestamp from "../metadata/Timestamp";

const Comment = ({ username, timestamp, comment }) => {
  return (
    <>
      <article className="comment">
        <div className="comment--left">
          <div className="comment__user-icon"></div>
        </div>
        <div className="comment--right">
          <div className="comment--right--top">
            <span className="comment__username">{username}</span>
            <Timestamp className="comment__timestamp" timestamp={timestamp} />
          </div>
          <p className="comment__content">{comment}</p>
        </div>
      </article>
      <hr className="comment__divider" />
    </>
  );
};

export default Comment;
