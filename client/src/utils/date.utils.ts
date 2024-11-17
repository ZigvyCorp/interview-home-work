import { formatDistanceToNow } from "date-fns";
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

const calculateTimeAgo = (date: string): string => {
  const createdAt = new Date(date);

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

  return timeAgo;
};

export { formatDate, calculateTimeAgo };
