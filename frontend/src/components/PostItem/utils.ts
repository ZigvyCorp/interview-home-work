import dayjs from "dayjs";

export function formatCreatedDate(date: string): string {
  return dayjs(date).format("MMMM D, YYYY");
}
