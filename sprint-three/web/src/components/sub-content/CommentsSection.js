import React from "react";
import CommentsHeader from "./CommentsHeader";
import CommentsList from "./CommentsList";

const CommentsSection = ({ mainVideo, populateHandler }) => {
  return (
    <section className="comments container">
      <CommentsHeader mainVideo={mainVideo} populateHandler={populateHandler} />
      <CommentsList
        comments={mainVideo.comments}
        videoId={mainVideo.id}
        populateHandler={populateHandler}
      />
    </section>
  );
};

export default CommentsSection;
