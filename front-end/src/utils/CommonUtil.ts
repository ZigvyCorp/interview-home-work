
export const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomArrayValue = <T>(array: T[]): T => {
    return array[randomInt(0, array.length - 1)]
}