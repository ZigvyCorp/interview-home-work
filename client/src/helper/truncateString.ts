export const truncateString = (s: string, limit: number) => {
    if (typeof s === 'string' && typeof limit === 'number') {
        const newString = s.slice(0, 100)
        if (s.length > 100) {
            return newString + '...'
        }  return newString
    } else {
        return s
    }
}