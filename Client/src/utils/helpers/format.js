const verifyDataPost = (obj) => {
    const newObj = {}

    for (let key in obj) {
        if (obj[key] !== '' && obj[key] !== null && obj[key] !== undefined && !Number.isNaN(obj[key])) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

export {
    verifyDataPost
}
