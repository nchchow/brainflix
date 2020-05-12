import React from "react";

export default class NewComment extends React.Component {
	render() {
		return (
			<article className="new-comment">
				<img src="" alt="" className="new-comment__user-icon" />
				<label htmlFor="" className="new-comment__content--header">
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						className="new-comment__content"
					></textarea>
				</label>
				<button className="new-comment__button"></button>
			</article>
		);
	}
}
