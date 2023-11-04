export const randColor = () => {
  const colorList = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
  ];
  return colorList[Math.round(Math.random() * colorList.length - 1)];
};
