import React from "react";

const UploadDescription = () => (
  <>
    <label for="upload__description" className="upload__description--label">
      ADD A VIDEO DESCRIPTION
    </label>
    <textarea
      name=""
      id="upload__description"
      cols="30"
      rows="10"
      className="upload__description--textarea"
      placeholder="Add a description to your video"
    ></textarea>
  </>
);

export default UploadDescription;
