export function getRandomDate(start, end) {
  return new Date(
    start.getTime() +
      Math.random() * (end.getTime() - start.getTime())
  );
}

export function getTimeDifference(date1, date2) {
  const diffInMs = Math.abs(date2.getTime() - date1.getTime());

  function getStringDiff(value, key) {
    if (value === 1) return `A ${key} ago`;
    return `${value} ${key}s ago`;
  }
  const timeMap = new Map();
  timeMap.set('minute', diffInMs / (1000 * 60));
  timeMap.set('hour', timeMap.get('minute') / 60);
  timeMap.set('day', timeMap.get('hour') / 24);
  timeMap.set('week', timeMap.get('day') / 7);
  timeMap.set(
    'month',
    Math.abs(date2.getMonth() - date1.getMonth()) +
      Math.abs(12 * (date2.getFullYear() - date1.getFullYear()))
  );
  timeMap.set('year', timeMap.get('month') / 12);

  const reversedMap = new Map(Array.from(timeMap).reverse());

  for (const [key, value] of reversedMap) {
    const finalValue = Math.floor(value);
    if (finalValue !== 0) {
      return getStringDiff(finalValue, key);
    }
  }
}

export function formatDate(date) {
  return date.toLocaleDateString('en-US');
}
