export const tags: string[] = [
  "magenta",
  "red",
  "volcalno",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

export const formatDate = (dateString: string | number | Date) => {
  const options: any = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
