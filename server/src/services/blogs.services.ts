import { ObjectId } from 'mongodb';

import { CreateBlogReqBody, UpdateBlogReqBody } from '~/models/requests/Blog.requests';
import databaseService from './database.services';
import Blog from '~/models/schemas/Blog.schema';

class BlogsServices {
  // Tạo blog
  async createBlog({ body, user_id }: { body: CreateBlogReqBody; user_id: string }) {
    const { insertedId } = await databaseService.blogs.insertOne(
      new Blog({
        ...body,
        user_id: new ObjectId(user_id)
      })
    );
    const blog = await databaseService.blogs.findOne({ _id: insertedId });
    return {
      blog
    };
  }

  // Cập nhật blog
  async updateBlog({ blog_id, body }: { blog_id: string; body: UpdateBlogReqBody }) {
    const blog = await databaseService.blogs.findOneAndUpdate(
      { _id: new ObjectId(blog_id) },
      {
        $set: body,
        $currentDate: {
          updated_at: true
        }
      },
      {
        returnDocument: 'after'
      }
    );
    return {
      blog
    };
  }

  // Xoá blog (một hoặc nhiều)
  async deleteBlogs(blog_ids: string[]) {
    const { deletedCount } = await databaseService.blogs.deleteMany({
      _id: {
        $in: blog_ids.map((blog_id) => new ObjectId(blog_id))
      }
    });
    return {
      deletedCount
    };
  }
}

const blogsServices = new BlogsServices();
export default blogsServices;
