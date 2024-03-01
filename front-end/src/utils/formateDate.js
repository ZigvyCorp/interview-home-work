function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", day: "2-digit", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

function timeAgo(timestamp) {
  const currentDate = new Date();
  const targetDate = new Date(timestamp);
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const secondsInMs = 1000;
  const minutesInMs = secondsInMs * 60;
  const hoursInMs = minutesInMs * 60;
  const daysInMs = hoursInMs * 24;

  if (timeDifference < minutesInMs) {
    const seconds = Math.round(timeDifference / secondsInMs);
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < hoursInMs) {
    const minutes = Math.round(timeDifference / minutesInMs);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < daysInMs) {
    const hours = Math.round(timeDifference / hoursInMs);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else {
    const days = Math.round(timeDifference / daysInMs);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
}

module.exports = {
  formatDate,
  timeAgo,
};
