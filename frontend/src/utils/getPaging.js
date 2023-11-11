import { DEFAULT_PER_PAGE } from "../config";

export const getDefaultPaging = () => {
    return {
        list: [],
        perPage: DEFAULT_PER_PAGE,
        currentPage: 0,
        totalItems: 0,
        totalPages: 0
    };
};