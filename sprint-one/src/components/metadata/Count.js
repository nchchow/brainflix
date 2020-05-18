import React from "react";

const Count = ({ icon, value }) => (
  <>
    <img src={icon} className="video-info__icon" />
    <h4 className="video-info__count">{value}</h4>
  </>
);

export default Count;
