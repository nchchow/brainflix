const dateUtil = {
  /*
		DATE FUNCTIONS
	*/
  // takes a timeStamp and returns date string in mm/dd/yyyy
  getShortDate(timeStamp) {
    // pad 0 for single digits
    const padZero = (val) => {
      return val < 9 ? "0" + val : val;
    };
    const date = new Date(timeStamp);
    const m = padZero(date.getMonth() + 1);
    const d = padZero(date.getDate());
    const y = date.getFullYear();
    return `${m}/${d}/${y}`;
  },

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

const getShortDate = dateUtil.getShortDate;
const getTimeElapsed = dateUtil.getTimeElapsed;

export { getShortDate, getTimeElapsed };
export default dateUtil;
