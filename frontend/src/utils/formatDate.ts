const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formatDate(date: any) {
    let [day, month, year] = date.split('-')
    return `${months[month-1]} ${day}, ${year}`
}

export function calculateDateDiff(date: any) {
    const currentDate: Date = new Date();
    let [day, month, year] = date.split('-')

    const targetDate: Date = new Date(year, month - 1, day)
    const timeRemaining: number = currentDate.getTime() - targetDate.getTime();
    const daysRemaining: number = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

    if(daysRemaining > 30 && daysRemaining < 365) {
        const month = Math.floor(daysRemaining / 30)
        return month === 1 ? `a month ago` : `${month} months ago`
    }
    if(daysRemaining > 365) {
        const year = Math.floor(daysRemaining / 365)
        return year === 1 ? `a year ago` : `${year} years ago`
    }

    return daysRemaining === 1 ? 'a day ago' : `${daysRemaining} days ago`
}