export const generateRandomDate = (startDate = new Date(2024, 1, 1), endDate = new Date()) => {
    const timeDiff = endDate.getTime() - startDate.getTime();
    const randomTime = Math.random() * timeDiff;
    const randomDate = new Date(startDate.getTime() + randomTime);
    return randomDate;
}