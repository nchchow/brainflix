import React from "react";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

const CommentsSection = ({ mainVideo, handler }) => {
  return (
    <section className="comments container">
      <CommentsHeader mainVideo={mainVideo} handler={handler} />
      <CommentsList comments={mainVideo.comments} />
    </section>
  );
};

export default CommentsSection;
