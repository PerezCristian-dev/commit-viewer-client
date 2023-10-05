import moment from "moment";

export function getTimeStatus(targetDate: Date): string {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

  if (minutesAgo < 1) {
    return "Just now";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else {
    return "Commits on " + moment(targetDate).format("MMMM DD, YY");
  }
}
