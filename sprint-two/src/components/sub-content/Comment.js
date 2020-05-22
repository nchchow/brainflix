import React from "react";
import axios from "axios";
import Timestamp from "../metadata/Timestamp";
import { API_KEY, URL } from "../../env/env-variables";

const Comment = ({ commentProp, videoId, populateHandler }) => {
  const { id, name, timestamp, comment } = commentProp;

  const deleteComment = () => {
    return axios
      .delete(`${URL}/videos/${videoId}/comments/${id}?api_key=${API_KEY}`)
      .then(() => populateHandler());
  };

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
        <button
          className="comment__delete-button"
          title="Delete"
          onClick={deleteComment}
        >
          x
        </button>
      </article>
      <hr className="comment__divider" />
    </>
  );
};

export default Comment;
