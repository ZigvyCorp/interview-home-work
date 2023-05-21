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
exports.BlogController = exports.storage = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("../services/blog.service");
const create_blog_dto_1 = require("../dtos/create-blog.dto");
const update_blog_dto_1 = require("../dtos/update-blog.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const api_files_decorator_1 = require("../../../decorators/api-files.decorator");
const uuid_1 = require("uuid");
const multer_1 = require("multer");
const path_1 = require("path");
exports.storage = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: (req, file, cb) => {
            const filename = path_1.default.parse(file.originalname).name.replace(/\s/g, '') + (0, uuid_1.v4)();
            const extension = path_1.default.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`);
        }
    })
};
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    getBlogList() {
        return this.blogService.getBlogs();
    }
    getBlog(blogId) {
        return this.blogService.getBlog(blogId);
    }
    createBlog(blog) {
        return this.blogService.createBlog(blog);
    }
    async uploadPostImages(blogId, files) {
        return this.blogService.uploadPostImages(blogId, files);
    }
    updateBlog(blogId, blog) {
        return this.blogService.updateBlog(blogId, blog);
    }
    deleteBlog(blogId) {
        return this.blogService.remove(blogId);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get blog list' }),
    (0, swagger_1.ApiOkResponse)({
        description: '200. Success. Returns blog list',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlogList", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get blog detail' }),
    (0, swagger_1.ApiParam)({ name: 'blogId', type: String }),
    (0, swagger_1.ApiOkResponse)({
        description: '200. Success. Returns a blog',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: '404. NotFoundException. User was not found',
    }),
    (0, common_1.Get)('/:blogId'),
    __param(0, (0, common_1.Param)('blogId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlog", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Write a blog' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.CreateBlogDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "createBlog", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'upload blog images' }),
    (0, swagger_1.ApiParam)({ name: 'blogId', type: String }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, api_files_decorator_1.ApiMultiFiles)(),
    (0, common_1.Post)('/upload/:blogId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', null, exports.storage)),
    __param(0, (0, common_1.Param)('blogId')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], BlogController.prototype, "uploadPostImages", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update a blog' }),
    (0, common_1.Put)('/:blogId'),
    __param(0, (0, common_1.Param)('blogId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blog_dto_1.UpdateBlogDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateBlog", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a blog' }),
    (0, swagger_1.ApiParam)({ name: 'blogId', type: String }),
    (0, common_1.Delete)('/:blogId'),
    __param(0, (0, common_1.Param)('blogId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "deleteBlog", null);
BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map