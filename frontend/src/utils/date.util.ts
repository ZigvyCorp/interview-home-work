export function getRandomDate(start: Date, end: Date): Date {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // Short month like "Sep"
    day: "numeric",
  });
}
