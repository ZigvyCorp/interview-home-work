import {
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { BlogEntity } from '../entities/blog.entity';
import { CreateBlogDto } from '../dtos/create-blog.dto';
import { UpdateBlogDto } from '../dtos/update-blog.dto';
import { CloudinaryService } from 'src/modules/cloudinary/cloudinary.service';
import { UpdateBlogImagesDto } from '../dtos/update-blog-images.dto';

@Injectable()
export class BlogService {

    constructor(@InjectRepository(BlogEntity) private blogRepository: Repository<BlogEntity>, private cloudinary: CloudinaryService) { }

    async createBlog(blog: CreateBlogDto): Promise<BlogEntity> {
        try {
            const newBlog = new BlogEntity();
            newBlog.title = blog.title;
            newBlog.content = blog.content;
            newBlog.author = blog.author;
            return await this.blogRepository.save(newBlog);
        } catch (error) {
            throw error
        }

    }
    async getBlogs() {
        try {
            return await this.blogRepository.find();

        } catch (error) {
            throw error
        }
    }
    async getBlog(id: string) {
        try {
            const blog = await this.blogRepository.findOne({ where: { id: id } });
            if (!blog) {
                throw new NotFoundException('Blog not found');
            }
            return blog
        } catch (error) {
            throw error
        }

    }
    async updateBlog(id: string, blog: UpdateBlogDto) {
        try {
            const oldBlog = await this.getBlog(id);
            const updateBlog = { ...oldBlog, blog };
            const preloadBlog = await this.blogRepository.preload(updateBlog);
            return await this.blogRepository.save(preloadBlog);
        } catch (error) {
            throw error
        }

    }
    async remove(id: string) {
        try {
            const deleteResult = await this.blogRepository.delete({ id: id });
            return deleteResult.affected === 1;
        } catch (error) {
            throw error;
        }

    }

    async uploadPostImages(blogId: string, images: Express.Multer.File[]): Promise<any> {
        try {
            const imgArr = [];
            for (const img of images) {
                const uploaded: any = await this.cloudinary.uploadImage(img);
                imgArr.push(uploaded.url);
            }
            const payload = new UpdateBlogDto();
            return this.updateBlog(blogId, { ...payload, images: imgArr });
        } catch (error) {
            throw error;
        }

    }

}
