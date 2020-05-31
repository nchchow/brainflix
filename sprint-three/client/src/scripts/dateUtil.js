const dateUtil = {
  // returns time elapsed in the largest appropriate unit as string
  getTimeElapsed(timestamp) {
    // take date difference and unit, then format to string
    const formatDateDiff = (diff, unit) => {
      if (diff !== 1) unit += "s"; // plural
      return `${diff} ${unit} ago`;
    };

    const ms = new Date().getTime() - timestamp; // in milliseconds
    const sec = ms / 1000;
    if (sec < 4) return "a moment ago";
    if (sec < 60) return formatDateDiff(Math.floor(sec), "second");

    const min = sec / 60;
    if (min < 60) return formatDateDiff(Math.floor(min), "minute");

    const h = min / 60;
    if (h < 24) return formatDateDiff(Math.floor(h), "hour");

    const d = h / 24;
    if (d < 30) return formatDateDiff(Math.floor(d), "day");

    const month = d / 30;
    if (month < 12) return formatDateDiff(Math.floor(month), "month");

    const y = month / 12;
    return formatDateDiff(Math.floor(y), "year");
  },
};

const getTimeElapsed = dateUtil.getTimeElapsed;

export { getTimeElapsed };
export default dateUtil;
