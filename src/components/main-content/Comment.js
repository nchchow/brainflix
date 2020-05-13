import React, { Component } from "react";

export default class Comment extends Component {
	render() {
		return (
			<article className="comment">
				<div className="comment--left">
					<div className="comment__user-icon"></div>
				</div>
				<div className="comment--right">
					<div className="comment--right--top">
						<span className="comment__name">Micheal Lyons</span>
						<span className="comment__date">12/18/2018</span>
					</div>
					<p className="comment__content">
						They BLEW the ROOF off at their last show, once everyone started
						figuring out they were going. This is still simply the greatest
						opening of a concert I have EVER witnessed.
					</p>
				</div>
			</article>
		);
	}
}
