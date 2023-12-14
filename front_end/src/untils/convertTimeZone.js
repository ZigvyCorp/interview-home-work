import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const convertToVietnamTime = (createdAt) => {
  const vietnamTimeZone = "Asia/Ho_Chi_Minh";

  const createdAtInVietnamTime = utcToZonedTime(new Date(createdAt), vietnamTimeZone);
  const formattedTime = format(createdAtInVietnamTime, "MMM dd, yyyy", { timeZone: vietnamTimeZone });

  return formattedTime;
};