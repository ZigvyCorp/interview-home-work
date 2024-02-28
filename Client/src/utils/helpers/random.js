export const getRandomDate = () => {
    const startDate = new Date('2015-01-01').getTime();
    const endDate = new Date().getTime();
    const randomTime = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTime);
}

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
