import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Button from "../buttons/Button";
import preview from "../../assets/images/Upload-video-preview.jpg";

const Upload = () => {
  return (
    <div className="upload">
      <Header />
      <div className="container">
        <h1 className="upload__header">Upload Video</h1>
        <h4 className="upload__thumbnail--label">VIDEO THUMBNAIL</h4>
        <img src={preview} alt="" className="upload__thumbnail" />
        <form action="" className="upload--form">
          <label className="upload__title--label">
            TITLE YOUR VIDEO
            <input
              type="text"
              className="upload__title--input"
              placeholder="Add a title to your video"
            />
          </label>
          <label className="upload__description--label">
            ADD A VIDEO DESCRIPTION
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="upload__description--textarea"
              placeholder="Add a description to your video"
            ></textarea>
          </label>
          <Button className="upload__button" value="PUBLISH" />
        </form>
        <Link to="/" className="upload--cancel">
          CANCEL
        </Link>
      </div>
    </div>
  );
};

export default Upload;
