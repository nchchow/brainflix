import React from "react";

const UploadTitle = ({ handler }) => (
  <label className="upload__title--label">
    TITLE YOUR VIDEO
    <input
      type="text"
      name="title"
      className="upload__title--input"
      placeholder="Add a title to your video"
      onChange={handler}
    />
  </label>
);

export default UploadTitle;
