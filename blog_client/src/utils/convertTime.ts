export const convertTime = (date: Date) => {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
};
