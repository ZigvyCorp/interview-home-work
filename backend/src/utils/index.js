const moment = require('moment')

const getSelectData = (select = []) => {
  return Object.fromEntries(select.map((item) => [item, 1]))
}
const removeUndefined = (obj) => {
  for (var i in obj) {
    if (obj[i] === undefined) {
      delete obj[i]
    } else if (typeof obj[i] === 'object') {
      removeUndefined(obj[i])
    }
  }
  return obj
}
const convertId = (arr) => {
  if (arr.length > 1) {
    let newArr = arr.map((obj) => {
      if (obj.id) {
        return { ...obj, _id: obj.id, id: undefined }
      }
      return obj
    })
    return newArr
  }
  if (typeof arr === 'object') {
    if (arr.id) {
      arr._id = arr.id
      delete arr.id
    }
    return arr
  }
}
const randomDate = () => {
  const start = new Date(2024, 0, 1)
  const end = new Date()
  return moment(
    new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    ),
  ).format('MMMM Do YYYY')
}

module.exports = {
  getSelectData,
  removeUndefined,
  convertId,
  randomDate,
}
