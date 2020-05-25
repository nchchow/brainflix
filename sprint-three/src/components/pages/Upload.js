import React from "react";
import UploadForm from "../upload/UploadForm";

const Upload = () => {
  return (
    <div className="upload container">
      <h1 className="upload__header">Upload Video</h1>
      <hr className="upload--divider" />
      <UploadForm />
    </div>
  );
};

export default Upload;
