import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
import axios from "axios";
import { uuid } from "uuidv4";
import Button from "../buttons/Button";

export default class NewCommentForm extends Component {
  state = {
    name: "Mohan Muruge",
    comment: "",
  };

  handleChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    const comment = this.state;
    const API_KEY = "14b626c6-5929-4318-9084-33bee95a76bc";
    const URL = "https://project-2-api.herokuapp.com";
    axios
      .post(
        `${URL}/videos/${this.props.id}/comments?api_key=${API_KEY}`,
        comment
      )
      .then(() => this.props.handler());
  };

  render() {
    return (
      <form className="new-comment--form" onSubmit={this.handleSubmit}>
        <div className="new-comment--content--wrapper">
          <h5 className="new-comment__content--header">
            JOIN THE CONVERSATION
          </h5>
          <TextareaAutosize
            name=""
            id=""
            maxRows={5}
            className="new-comment__content"
            placeholder="Add a comment"
            onChange={this.handleChange}
          ></TextareaAutosize>
        </div>
        <Button className="new-comment__button" value="COMMENT" />
      </form>
    );
  }
}
