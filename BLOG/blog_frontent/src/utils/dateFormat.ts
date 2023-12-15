const DateFormat = (dateString: string): string => {

    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');

};

export default DateFormat;
