import { BaseResponse } from "../common/responses/BaseResponse";
import { CoreException } from "../common/exceptions/CoreException";

export default interface IPostService {
    storagePostsIntoDB (posts: any): void,
    getPosts(page: number, pagesize: number): Promise<BaseResponse|CoreException>,
    getPostsDatabaseOrMock (): Promise<any>
}