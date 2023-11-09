import { isDate } from "lodash";

export function timeSince(date) {
    if (!isDate(date)) {
        return ""
    }
    const s = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(s / 31536000);

    if (interval > 1) {
        return `${interval} years ago`;
    }
    interval = Math.floor(s / 2592000);
    if (interval > 1) {
        return `${interval} months ago`;
    }
    interval = Math.floor(s / 86400);
    if (interval > 1) {
        return `${interval} days ago`;
    }
    interval = Math.floor(s / 3600);
    if (interval > 1) {
        return `${interval} hours ago`;
    }
    interval = Math.floor(s / 60);
    if (interval > 1) {
        return `${interval} minutes ago`;
    }
    interval = Math.floor(s);
    if (interval > 1) {
        return `${interval} seconds ago`;
    }
}