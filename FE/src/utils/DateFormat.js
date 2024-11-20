import { formatDistanceToNow } from 'date-fns';

const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
export const formattedCreatedAt = (date) =>
  new Date(date).toLocaleString('en-Us', dateOptions);

export const formDateToNow = (date) =>
  formatDistanceToNow(new Date(date), { addSuffix: true });
