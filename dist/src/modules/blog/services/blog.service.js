"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const blog_entity_1 = require("../entities/blog.entity");
const update_blog_dto_1 = require("../dtos/update-blog.dto");
const cloudinary_service_1 = require("../../cloudinary/cloudinary.service");
let BlogService = class BlogService {
    constructor(blogRepository, cloudinary) {
        this.blogRepository = blogRepository;
        this.cloudinary = cloudinary;
    }
    async createBlog(blog) {
        try {
            const newBlog = new blog_entity_1.BlogEntity();
            newBlog.title = blog.title;
            newBlog.content = blog.content;
            newBlog.author = blog.author;
            return await this.blogRepository.save(newBlog);
        }
        catch (error) {
            throw error;
        }
    }
    async getBlogs() {
        try {
            return await this.blogRepository.find();
        }
        catch (error) {
            throw error;
        }
    }
    async getBlog(id) {
        try {
            const blog = await this.blogRepository.findOne({ where: { id: id } });
            if (!blog) {
                throw new common_1.NotFoundException('Blog not found');
            }
            return blog;
        }
        catch (error) {
            throw error;
        }
    }
    async updateBlog(id, blog) {
        try {
            const oldBlog = await this.getBlog(id);
            const updateBlog = Object.assign(Object.assign({}, oldBlog), { blog });
            const preloadBlog = await this.blogRepository.preload(updateBlog);
            return await this.blogRepository.save(preloadBlog);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const deleteResult = await this.blogRepository.delete({ id: id });
            return deleteResult.affected === 1;
        }
        catch (error) {
            throw error;
        }
    }
    async uploadPostImages(blogId, images) {
        try {
            const imgArr = [];
            for (const img of images) {
                const uploaded = await this.cloudinary.uploadImage(img);
                imgArr.push(uploaded.url);
            }
            const payload = new update_blog_dto_1.UpdateBlogDto();
            return this.updateBlog(blogId, Object.assign(Object.assign({}, payload), { images: imgArr }));
        }
        catch (error) {
            throw error;
        }
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(blog_entity_1.BlogEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository, cloudinary_service_1.CloudinaryService])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map