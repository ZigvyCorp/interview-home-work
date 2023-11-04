import { randomInt } from "./CommonUtil";

export {};

declare global {
    interface Array<T> {
        isEmpty(): boolean;
    }
}

// eslint-disable-next-line no-extend-native
Array.prototype.isEmpty = function () {
    return this.length === 0;
};

export const randomArrayValue = <T>(array: T[]): T => {
    return array[randomInt(0, array.length - 1)]
}