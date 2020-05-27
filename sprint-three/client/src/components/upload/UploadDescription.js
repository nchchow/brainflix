import React from "react";

const UploadDescription = ({ handler }) => (
  <>
    <label htmlFor="upload__description" className="upload__description--label">
      ADD A VIDEO DESCRIPTION
    </label>
    <textarea
      name="description"
      id="upload__description"
      cols="30"
      rows="10"
      className="upload__description--textarea"
      placeholder="Add a description to your video"
      onChange={handler}
    ></textarea>
  </>
);

export default UploadDescription;
