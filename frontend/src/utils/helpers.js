import moment from 'moment'

export const timeDiff = m => {
  //   const milliseconds = moment().diff(moment(m))
  //   if (milliseconds < 60 * 1000) {
  //     return 'Just now'
  //   }
  const diffList = [
    { unit: 'Just now', diff: moment().diff(moment(m)) },
    { unit: 'min', diff: moment().diff(moment(m), 'minutes') },
    { unit: 'hr', diff: moment().diff(moment(m), 'hours') },
    { unit: 'day', diff: moment().diff(moment(m), 'days') },
    { unit: 'month', diff: moment().diff(moment(m), 'months') },
    { unit: 'year', diff: moment().diff(moment(m), 'years') },
  ].filter(o => o.diff !== 0)

  const res = diffList.length > 0 ? diffList[diffList.length - 1] : 'Just now'

  if (['day', 'month', 'year'].includes(res.unit)) {
    if (res.unit === 'day' && res.diff < 7) {
      res.unit = `${res.diff} ${res.unit}${res.diff > 1 ? 's' : ''}`
    } else {
      res.unit = moment(m).format('LL')
    }
  } else if (['hr', 'min'].includes(res.unit)) {
    res.unit = `${res.diff} ${res.unit}${res.diff > 1 ? 's' : ''}`
  }

  return typeof res === 'object' ? res.unit : res
}
