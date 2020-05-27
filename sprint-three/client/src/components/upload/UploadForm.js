import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../env/env-variables";
import UploadInputs from "./UploadInputs";
import Button from "../buttons/Button";

export default class UploadForm extends Component {
  state = {
    title: "",
    channel: "Mohan Muruge",
    image: "https://i.imgur.com/QSD9pgd.jpg",
    description: "",
    duration: "8:27",
    video: "https://project-2-api.herokuapp.com/stream",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    await axios.post(`${URL}/videos`, this.state);
    window.location.href = "/";
  };

  render() {
    return (
      <form action="" className="upload--form" onSubmit={this.handleSubmit}>
        <div className="upload-wrapper">
          <UploadInputs handler={this.handleChange} />
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
  }
}
