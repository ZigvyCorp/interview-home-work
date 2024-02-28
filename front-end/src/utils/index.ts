import { formatDistanceToNow } from 'date-fns';

export const get100FirstCharacters = (s: string): string => {
    return s.substring(0, 100);
};

export const formatDate = (d: string): string => {
    const date: Date = new Date(d);
    const formattedDate: string = formatDistanceToNow(date, { addSuffix: true });
    return formattedDate;
};
