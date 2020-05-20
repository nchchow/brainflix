import React from "react";
import Header from "../header/Header";
import UploadForm from "../upload/UploadForm";

const Upload = () => {
  return (
    <div className="upload">
      <Header />
      <div className="container">
        <h1 className="upload__header">Upload Video</h1>
        <hr className="upload--divider" />
        <UploadForm />
      </div>
    </div>
  );
};

export default Upload;
