import React from "react";
import UploadThumbnail from "./UploadThumbnail";
import UploadTitle from "./UploadTitle";
import UploadDescription from "./UploadDescription";

const UploadInputs = () => {
  return (
    <>
      <UploadThumbnail />
      <div className="input-wrapper">
        <UploadTitle />
        <UploadDescription />
      </div>
    </>
  );
};

export default UploadInputs;
