import React from "react";

const IconButton = ({ className, icon, iconClassName, value }) => (
  <button className={className}>
    <img src={icon} alt="" className={iconClassName} />
    {value}
  </button>
);

export default IconButton;
