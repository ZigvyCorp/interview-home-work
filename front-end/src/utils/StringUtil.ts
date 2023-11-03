export { };

declare global {
    interface String {
        short(length: number): String;
    }
}

// eslint-disable-next-line no-extend-native
String.prototype.short = function (length: number): String {
    if (this.length > length) {
        return `${this.substring(0, length)}...`;
    }
    return this;
};