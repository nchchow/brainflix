import React from "react";
import UploadThumbnail from "./UploadThumbnail";
import UploadTitle from "./UploadTitle";
import UploadDescription from "./UploadDescription";

const UploadInputs = ({ handler }) => {
  return (
    <>
      <UploadThumbnail />
      <div className="input-wrapper">
        <UploadTitle handler={handler} />
        <UploadDescription handler={handler} />
      </div>
    </>
  );
};

export default UploadInputs;
