import { useState, useEffect } from "react";
import { getTimeElapsed } from "../../scripts/timeUtil";

const useTimeElapsed = (timestamp) => {
  const [timeElapsed, setTimeElapsed] = useState(getTimeElapsed(timestamp));

  useEffect(() => {
    let interval = setInterval(() => {
      setTimeElapsed(getTimeElapsed(timestamp));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeElapsed, timestamp]);

  return timeElapsed;
};

export default useTimeElapsed;
