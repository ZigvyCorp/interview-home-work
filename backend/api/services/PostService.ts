import IPostService from "../interfaces/IPostService"
import { StatusCodeEnums } from "../common/enums/StatusCodeEnums";
import { CoreException } from "../common/exceptions/CoreException";
import { BaseResponse } from "../common/responses/BaseResponse";
import { paginationArray } from "../common/helpers/PaginationArray";
import { GetPostsResponse } from "../common/responses/GetPostsResponse";
import { PostModel } from "../models/PostModel";
import axios from "axios";
require('dotenv').config()

class PostService implements IPostService {
    private MOCK_EXTERNAL_API: string;
    constructor() {
        const MOCK_API = process.env.MOCK_EXTERNAL_API 
        this.MOCK_EXTERNAL_API = MOCK_API ? `${MOCK_API}/posts` : ''
    }

    storagePostsIntoDB (posts: any): void {
        if (!posts) return
        PostModel.insertMany(posts)
    }

    async getPostsDatabaseOrMock (): Promise<any> {
        //Get posts from database if exists or mock. First check in db, if not then get in mock and add that data to db for second use
        let posts: any
        try {
            posts = await PostModel.find().sort({ id: 1 }).select({ _id: 0, isDeleted: 0, isActive: 0, __v: 0, createdAt: 0, updatedAt: 0 }).lean() // Reuse pagination function, That's why I don't paginate here
            if (!posts || posts.length === 0) {
                posts = (await axios.get(this.MOCK_EXTERNAL_API)).data //Get posts from mock api
                this.storagePostsIntoDB(posts) //Asynchorously here to improve performance
            }
            return posts
        }
        catch (error: any) {
            throw new Error(`Error occured at getPostsDatabaseOrMock: ${error.message}`)
        }
    }
    
    async getPosts(page: number, pagesize: number): Promise<BaseResponse|CoreException> {
        let posts = await this.getPostsDatabaseOrMock.apply(this)
        if (!posts) return new CoreException(StatusCodeEnums.NotFound_404, 'No post is exists')
        try {
            if (Array.isArray(posts)) { // Do pagination
                const paginationResult: any = paginationArray(posts, page, pagesize)
                posts = paginationResult.paginationArray
                const pagination: any = {
                    totalItems: paginationResult.totalItems,
                    totalPages: paginationResult.totalPages,
                    currentPage: page,
                    pagesize: pagesize
                }
                return new GetPostsResponse(StatusCodeEnums.OK_200, 'Get posts successfully', pagination, posts)
            }
            return new BaseResponse(StatusCodeEnums.OK_200, 'Get posts successfully', posts)
        }
        catch (error: any) {
            return new CoreException(StatusCodeEnums.InternalServerError_500, error.message)
        }
    }
}

export default PostService