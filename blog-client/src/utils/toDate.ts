export function toDate(timestampInSeconds: number): string {
  const date = new Date(timestampInSeconds * 1000);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
