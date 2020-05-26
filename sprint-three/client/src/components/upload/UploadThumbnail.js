import React from "react";
import preview from "../../assets/images/Upload-video-preview.jpg";

const UploadThumbnail = () => (
  <div className="thumbnail-wrapper">
    <h4 className="upload__thumbnail--label">VIDEO THUMBNAIL</h4>
    <img src={preview} alt="" className="upload__thumbnail" />
  </div>
);

export default UploadThumbnail;
