import { ObjectId } from 'mongodb';

import Comment from '~/models/schemas/Comment.schema';
import databaseService from './database.services';
import { CreateCommentReqBody } from '~/models/requests/Comment.request';
import { PaginationReqQuery } from '~/models/requests/Common.requests';

class CommentsService {
  // Thêm bình luận
  async createComment({ user_id, blog_id, content }: { user_id: string; blog_id: string; content: string }) {
    const { insertedId } = await databaseService.comments.insertOne(
      new Comment({
        user_id: new ObjectId(user_id),
        blog_id: new ObjectId(blog_id),
        content
      })
    );
    const comment = await databaseService.comments
      .aggregate([
        {
          $match: {
            _id: insertedId
          }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'user_id',
            foreignField: '_id',
            as: 'author'
          }
        },
        {
          $unwind: {
            path: '$author'
          }
        },
        {
          $group: {
            _id: '$_id',
            content: {
              $first: '$content'
            },
            author: {
              $first: '$author'
            },
            created_at: {
              $first: '$created_at'
            },
            updated_at: {
              $first: '$updated_at'
            }
          }
        },
        {
          $project: {
            'author.password': 0
          }
        }
      ])
      .toArray();
    return {
      comment: comment[0]
    };
  }

  // Cập nhật bình luận
  async updateComment({ comment_id, content }: { comment_id: string; content: string }) {
    const comment = await databaseService.comments.findOneAndUpdate(
      { _id: new ObjectId(comment_id) },
      {
        $set: {
          content
        }
      },
      {
        returnDocument: 'after'
      }
    );
    return {
      comment
    };
  }

  // Xóa bình luận
  async deleteComment(comment_id: string) {
    await databaseService.comments.deleteOne({ _id: new ObjectId(comment_id) });
    return true;
  }

  // Lấy danh sách bình luận theo blog
  async getCommentsByBlogId({ blog_id, query }: { blog_id: string; query: PaginationReqQuery }) {
    const { page, limit } = query;
    const _page = Number(page) || 1;
    const _limit = Number(limit) || 10;
    const [comments, total] = await Promise.all([
      databaseService.comments
        .aggregate([
          {
            $match: {
              blog_id: new ObjectId(blog_id)
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'user_id',
              foreignField: '_id',
              as: 'author'
            }
          },
          {
            $unwind: {
              path: '$author'
            }
          },
          {
            $group: {
              _id: '$_id',
              content: {
                $first: '$content'
              },
              author: {
                $first: '$author'
              },
              created_at: {
                $first: '$created_at'
              },
              updated_at: {
                $first: '$updated_at'
              }
            }
          },
          {
            $project: {
              'author.password': 0
            }
          },
          {
            $sort: {
              created_at: -1
            }
          },
          {
            $skip: (_page - 1) * _limit
          },
          {
            $limit: _limit
          }
        ])
        .toArray(),
      databaseService.comments.countDocuments({
        blog_id: new ObjectId(blog_id)
      })
    ]);
    return {
      comments,
      page: _page,
      limit: _limit,
      total_rows: total,
      total_pages: Math.ceil(total / _limit)
    };
  }
}

const commentsService = new CommentsService();
export default commentsService;
