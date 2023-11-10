export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export function formatRelativeTime(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();

  const diffInMilliseconds = now.getTime() - date.getTime();
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (days < 0) {
    return rtf.format(days, "day");
  } else if (hours < 0) {
    return rtf.format(hours, "hour");
  } else if (minutes < 0) {
    return rtf.format(minutes, "minute");
  } else if (seconds < 0) {
    return rtf.format(seconds, "second");
  } else {
    return "just now";
  }
}
