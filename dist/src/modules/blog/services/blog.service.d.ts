/// <reference types="multer" />
import { Repository } from 'typeorm';
import { BlogEntity } from '../entities/blog.entity';
import { CreateBlogDto } from '../dtos/create-blog.dto';
import { UpdateBlogDto } from '../dtos/update-blog.dto';
import { CloudinaryService } from 'src/modules/cloudinary/cloudinary.service';
export declare class BlogService {
    private blogRepository;
    private cloudinary;
    constructor(blogRepository: Repository<BlogEntity>, cloudinary: CloudinaryService);
    createBlog(blog: CreateBlogDto): Promise<BlogEntity>;
    getBlogs(): Promise<BlogEntity[]>;
    getBlog(id: string): Promise<BlogEntity>;
    updateBlog(id: string, blog: UpdateBlogDto): Promise<BlogEntity>;
    remove(id: string): Promise<boolean>;
    uploadPostImages(blogId: string, images: Express.Multer.File[]): Promise<any>;
}
