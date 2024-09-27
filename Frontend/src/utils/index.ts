import moment from 'moment';

export const formatDate = (date: Date): string => {
  const now = moment();

  const duration = moment.duration(now.diff(date));
  const hours = duration.asHours();
  const days = duration.asDays();
  const months = duration.asMonths();
  const years = duration.asYears();
  if (hours < 1) return 'Vừa xong';
  if (hours < 24) return `${Math.floor(hours)} giờ trước`;
  if (days < 30) return `${Math.floor(days)} ngày trước`;
  if (months < 12) return `${Math.floor(months)} tháng trước`;
  return `${Math.floor(years)} năm trước`;
};
