export const asyncHandle = async (promise) => {
    return await promise
        .then((data) => [data, null])
        .catch((error) => [null, error]);
};
