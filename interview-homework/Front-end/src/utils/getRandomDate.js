export const getRandomDate = () => {
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 31) + 1;
  const randomYear = Math.floor(Math.random() * 4) + 2020;

  const date = new Date(randomYear, randomMonth, randomDay);

  const formattedDate = date.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  return formattedDate;
};
