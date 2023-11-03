function getRandomDate(startDate: Date, endDate: Date) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();

  const randomTimestamp =
    startTimestamp + Math.random() * (endTimestamp - startTimestamp);
  const randomDate = new Date(randomTimestamp);

  return randomDate;
}
export default getRandomDate;
