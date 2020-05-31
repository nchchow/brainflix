import React from "react";

const IconButton = ({ className, icon, iconClassName, value, onClick }) => (
  <button className={className} onClick={onClick}>
    <img src={icon} alt="" className={iconClassName} />
    {value}
  </button>
);

export default IconButton;
