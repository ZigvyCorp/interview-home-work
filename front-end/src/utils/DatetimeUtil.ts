import moment from "moment";

export const getRangeTime = (time: number): string => {
    const date = moment(time);
    const now = moment(new Date());

    const hours = now.diff(date, 'hours');
    const minutes = now.diff(date, 'minutes');
    const days = now.diff(date, 'days');

    if (minutes < 60) {
        return minutes + ' minutes ago';
    }
    if (hours < 24) {
        return hours + ' hours ago';
    }
    return days + ' days ago';
}


export const timeConverter = (timestamp: number): string => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);
}
