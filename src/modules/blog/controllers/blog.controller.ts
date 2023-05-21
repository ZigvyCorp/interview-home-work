import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { BlogService } from '../services/blog.service';
import { CreateBlogDto } from '../dtos/create-blog.dto';
import { UpdateBlogDto } from '../dtos/update-blog.dto';
import {
    ApiConsumes,
    ApiCreatedResponse,
    ApiForbiddenResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
    ApiUnauthorizedResponse,
    getSchemaPath,
} from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiMultiFiles } from 'src/decorators/api-files.decorator';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from "multer";
import path from 'path';
import { BlogEntity } from '../entities/blog.entity';

export const storage = {
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}

@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) { }

    @ApiOperation({ summary: 'Get blog list' })
    @ApiOkResponse({
        description: '200. Success. Returns blog list',
    })
    @Get()
    getBlogList() {
        return this.blogService.getBlogs()
    }

    @ApiOperation({ summary: 'Get blog detail' })
    @ApiParam({ name: 'blogId', type: String })
    @ApiOkResponse({
        description: '200. Success. Returns a blog',
    })
    @ApiNotFoundResponse({
        description: '404. NotFoundException. User was not found',
    })
    @Get('/:blogId')
    getBlog(@Param('blogId') blogId: string) {
        return this.blogService.getBlog(blogId)
    }

    @ApiOperation({ summary: 'Write a blog' })
    @Post()
    createBlog(@Body() blog: CreateBlogDto) {
        return this.blogService.createBlog(blog)
    }

    @ApiOperation({ summary: 'upload blog images' })
    @ApiParam({ name: 'blogId', type: String })
    @ApiConsumes('multipart/form-data')
    @ApiMultiFiles()
    @Post('/upload/:blogId')
    @UseInterceptors(FilesInterceptor('files', null, storage))
    async uploadPostImages(
        @Param('blogId') blogId: string,
        @UploadedFiles() files: Array<Express.Multer.File>
    ): Promise<any> {
        return this.blogService.uploadPostImages(blogId, files)
    }

    @ApiOperation({ summary: 'update a blog' })
    @Put('/:blogId')
    updateBlog(@Param('blogId') blogId: string, @Body() blog: UpdateBlogDto) {
        return this.blogService.updateBlog(blogId, blog)
    }

    @ApiOperation({ summary: 'Delete a blog' })
    @ApiParam({ name: 'blogId', type: String })
    @Delete('/:blogId')
    deleteBlog(@Param('blogId') blogId: string) {
        return this.blogService.remove(blogId)
    }

}
