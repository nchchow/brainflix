import React from "react";

const Count = ({ icon, value, onClick = () => {} }) => (
  <>
    <img
      src={icon}
      alt=""
      className="video-info__icon"
      onClick={() => {
        onClick();
      }}
    />
    <h4 className="video-info__count">{value}</h4>
  </>
);

export default Count;
