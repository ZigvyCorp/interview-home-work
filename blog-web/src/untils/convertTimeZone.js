import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const formatDate = (createdAt) => {
  const timeZone = import.meta.env.VITE_TIME_ZONE || "Asia/Ho_Chi_Minh";

  const createdAtTime = utcToZonedTime(new Date(createdAt), timeZone);
  const formattedTime = format(createdAtTime, "MMM dd, yyyy", { timeZone: timeZone });

  return formattedTime;
};