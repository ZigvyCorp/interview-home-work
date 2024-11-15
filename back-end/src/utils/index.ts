import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND } from "@/constants/time";
import { NextFunction, Response, Request } from "express";

export const removeAccents = (str: string | undefined = "") =>
  str
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");

export function slugify(string: string) {
  string = removeAccents(string)
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
  return string;
}

export const convertToMilliseconds = (timeString?: string) => {
  if (!timeString || timeString.length < 2) {
    throw new Error("Time string is not valid.");
  }
  const timeValue = parseInt(timeString.slice(0, -1)); // get the number
  const timeUnit = timeString.slice(-1); // get unit

  switch (timeUnit) {
    case "s":
      return timeValue * ONE_SECOND;
    case "m":
      return timeValue * ONE_MINUTE;
    case "h":
      return timeValue * ONE_HOUR;
    case "d":
      return timeValue * ONE_DAY;
    case "w":
      return timeValue * 7 * ONE_DAY;
    case "y":
      return timeValue * 365 * ONE_DAY;
    default:
      throw new Error("This unit is not supported.");
  }
};

export const asyncHandler = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}