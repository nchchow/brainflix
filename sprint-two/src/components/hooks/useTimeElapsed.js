import { useState, useEffect } from "react";
import { getTimeElapsed } from "../../scripts/dateUtil";

const useTimeElapsed = (timestamp) => {
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setTimeElapsed(getTimeElapsed(timestamp));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeElapsed, timestamp]);

  return timeElapsed;
};

export default useTimeElapsed;
