const randomTimeInWorkday = date => {
    var begin = date
    var end = new Date(begin.getTime())

    begin.setHours(8, 0, 0, 0)
    end.setHours(17, 0, 0, 0)

    return Math.random() * (end.getTime() - begin.getTime()) + begin.getTime()
}

const randomDayStarting = date => {
    var begin = new Date(date.getTime() - 24 * 60 * 60 * 1000)
    var end = new Date(begin.getTime())

    end.setDate(end.getDate() - 7)

    return new Date(
        Math.random() * (end.getTime() - begin.getTime()) + begin.getTime()
    )
}

export { randomTimeInWorkday, randomDayStarting }
