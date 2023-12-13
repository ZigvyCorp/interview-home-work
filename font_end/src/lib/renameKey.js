export default function renameKey(arr) {
    arr.forEach((obj) => {
        Object.defineProperty(
            obj,
            'value',
            Object.getOwnPropertyDescriptor(obj, 'title')
        );
        delete obj['title'];
    });
    return arr;
}

