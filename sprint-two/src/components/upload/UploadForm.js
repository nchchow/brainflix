import React from "react";
import { Link } from "react-router-dom";
import UploadInputs from "./UploadInputs";
import Button from "../buttons/Button";

const UploadForm = () => {
  return (
    <form action="" className="upload--form">
      <div className="upload-wrapper">
        <UploadInputs />
      </div>
      <hr className="upload--divider" />
      <div className="buttons-wrapper">
        <Button className="upload__button" value="PUBLISH" />
        <Link to="/" className="upload--cancel">
          CANCEL
        </Link>
      </div>
    </form>
  );
};

export default UploadForm;
