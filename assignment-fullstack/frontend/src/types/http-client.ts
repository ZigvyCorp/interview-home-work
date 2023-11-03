import { AxiosResponse } from 'axios';

export type GeneralResponse = {
    message: string;
    status: boolean;
};

export type ErrorCodeResponse = {
    code?: number;
    message?: string;
};

export type ErrorResponse = {
    message?: string;
    description?: string;
};

export type PaginationResponse = {
    numberOfElements: number;
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
};

export type DataResponse<T extends object | null | undefined> = GeneralResponse &
    ErrorResponse &
    (T extends null ? {} : { data: T; pagination?: any });

export type ListAxiosResponse<T> = AxiosResponse<{
    numberOfElements: number;
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    data: T[];
    message: string;
}>;
export type ObjectAxiosResponse<T extends object> = AxiosResponse<{
    data: T;
    message: string;
}>;
export type ArrayAxiosResponse<T> = AxiosResponse<{
    data: Array<T>;
    message: string;
}>;
export type AnyAxiosResponse<T> = AxiosResponse<{
    data: T;
    message: string;
}>;
export type MessageAxiosResponse = AxiosResponse<{
    message: string;
}>;
