import { ObjectId } from 'mongodb';

import { CreateBlogReqBody, GetBlogsQuery, UpdateBlogReqBody } from '~/models/requests/Blog.requests';
import Blog from '~/models/schemas/Blog.schema';
import databaseService from './database.services';
import { BlogAudience, UserRole } from '~/constants/enum';

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

  // Lấy danh sách blog
  async getBlogs(query: GetBlogsQuery) {
    const { page, limit } = query;
    const _page = Number(page) || 1;
    const _limit = Number(limit) || 20;
    const [blogs, total] = await Promise.all([
      databaseService.blogs
        .find({
          audience: BlogAudience.Everyone
        })
        .skip((_page - 1) * _limit)
        .limit(_limit)
        .toArray(),
      databaseService.blogs.countDocuments({
        audience: BlogAudience.Everyone
      })
    ]);
    return {
      blogs,
      page: _page,
      limit: _limit,
      total_rows: total,
      total_pages: Math.ceil(total / _limit)
    };
  }

  // Lấy blog theo ID
  async getBlogById(blog_id: string) {
    const blog = await databaseService.blogs.findOneAndUpdate(
      {
        _id: new ObjectId(blog_id)
      },
      {
        $inc: {
          view_count: 1
        }
      },
      {
        returnDocument: 'after',
        projection: {
          user_id: 0
        }
      }
    );
    return {
      blog
    };
  }

  // Lấy danh sách blog theo user ID
  async getBlogsByUserId({ user_id, query }: { user_id: string; query: GetBlogsQuery }) {
    const { page, limit } = query;
    const _page = Number(page) || 1;
    const _limit = Number(limit) || 20;
    const [blogs, total] = await Promise.all([
      databaseService.blogs
        .find({ user_id: new ObjectId(user_id) })
        .skip((_page - 1) * _limit)
        .limit(_limit)
        .toArray(),
      databaseService.blogs.countDocuments({ user_id: new ObjectId(user_id) })
    ]);
    return {
      blogs,
      page: _page,
      limit: _limit,
      total_rows: total,
      total_pages: Math.ceil(total / _limit)
    };
  }
}

const blogsServices = new BlogsServices();
export default blogsServices;
