import React from "react";
import useTimeElapsed from "../hooks/useTimeElapsed";

const Timestamp = ({ className, timestamp }) => {
  const timeElapsed = useTimeElapsed(timestamp);

  return <span className={className}>{timeElapsed}</span>;
};

export default Timestamp;
