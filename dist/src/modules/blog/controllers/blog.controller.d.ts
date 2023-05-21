/// <reference types="multer" />
import { BlogService } from '../services/blog.service';
import { CreateBlogDto } from '../dtos/create-blog.dto';
import { UpdateBlogDto } from '../dtos/update-blog.dto';
import { BlogEntity } from '../entities/blog.entity';
export declare const storage: {
    storage: import("multer").StorageEngine;
};
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    getBlogList(): Promise<BlogEntity[]>;
    getBlog(blogId: string): Promise<BlogEntity>;
    createBlog(blog: CreateBlogDto): Promise<BlogEntity>;
    uploadPostImages(blogId: string, files: Array<Express.Multer.File>): Promise<any>;
    updateBlog(blogId: string, blog: UpdateBlogDto): Promise<BlogEntity>;
    deleteBlog(blogId: string): Promise<boolean>;
}
