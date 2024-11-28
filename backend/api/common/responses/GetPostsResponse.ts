import { BaseResponse } from "./BaseResponse";

export class GetPostsResponse extends BaseResponse {
    private pagination: {
        currentPage: number,
        totalPage: number,
        totalItems: number,
        pagesize: number,
    }
    constructor(
        statusCode: number, 
        message: string,
        pagination: {
            currentPage: number,
            totalPage: number,
            totalItems: number,
            pagesize: number
        }, 
        data?: any,
        error?: string,
    ){
        super(statusCode, message, data, error);
        this.pagination = {
            currentPage: pagination.currentPage,
            totalPage: pagination.totalPage,
            totalItems: pagination.totalItems,
            pagesize: pagination.pagesize,
        };
    }
}