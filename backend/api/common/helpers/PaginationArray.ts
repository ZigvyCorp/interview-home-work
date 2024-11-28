export function paginationArray (array: any, page: number, pagesize: number) {
    if (Array.isArray(array)) {
        const totalItems: number = array.length
        const totalPages: number = Math.ceil(totalItems / pagesize);
        const startIndex: number = (page - 1) * pagesize;
        return {
            paginationArray: array.slice(startIndex, startIndex + pagesize),
            totalItems, totalPages
        }
    }
    return null;
}