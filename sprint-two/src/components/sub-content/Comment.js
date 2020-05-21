import React from "react";
import Timestamp from "../metadata/Timestamp";

const Comment = ({ commentProp }) => {
  const { name, timestamp, comment } = commentProp;
  return (
    <>
      <article className="comment">
        <div className="comment__shift-wrapper">
          <div className="comment--left">
            <div className="comment__user-icon"></div>
          </div>
          <div className="comment--right">
            <div className="comment--right--top">
              <span className="comment__username">{name}</span>
              <Timestamp className="comment__timestamp" timestamp={timestamp} />
            </div>
            <p className="comment__content">{comment}</p>
          </div>
        </div>
        <button className="comment__delete-button" title="Delete">
          x
        </button>
      </article>
      <hr className="comment__divider" />
    </>
  );
};

export default Comment;
