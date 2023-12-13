import moment from 'moment';

export default function randomDay(from) {
    const day = new Date(
        from.getTime() + Math.random() * (new Date().getTime() - from.getTime())
    );
    return moment(day).fromNow();
}
