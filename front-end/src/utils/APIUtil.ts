import { API } from '../config/axios';
import { PaginationRequest } from '../interfaces/request/PaginationRequestDto';

export const executeGetWithParams = async <T extends object>(path: string, requestParams: T) => {
    return await API.get(path, { params: requestParams });
};

export const executeGetWithPagination = async <T extends object>(
    path: string,
    pagination: PaginationRequest,
    requestParams?: T,
) => {
    return await API.get(path, { params: { ...pagination, ...requestParams } });
};

export const executePostWithBody = async <T extends object>(path: string, data: T) => {
    return await API.post(path, { ...data });
};

export const executePutWithBody = async <T extends object>(path: string, data: T) => {
    return await API.put(path, { ...data });
};
