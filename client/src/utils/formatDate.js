import { formatDistanceToNow, parseISO } from "date-fns";

const formatDate = (dateString) => {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
};
export default formatDate;
