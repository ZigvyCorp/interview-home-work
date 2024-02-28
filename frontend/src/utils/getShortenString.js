const getShortenString = (str, length) => {
    return str.length < 100 ? str : str.substring(0, 100) + "...";
};

export default getShortenString;