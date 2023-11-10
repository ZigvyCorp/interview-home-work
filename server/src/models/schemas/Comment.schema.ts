import { ObjectId } from 'mongodb';

interface CommentConstructor {
  _id?: ObjectId;
  user_id: ObjectId;
  blog_id: ObjectId;
  content: string;
  created_at?: Date;
  updated_at?: Date;
}

export default class Comment {
  _id?: ObjectId;
  user_id: ObjectId;
  blog_id: ObjectId;
  content: string;
  created_at: Date;
  updated_at: Date;

  constructor({ _id, user_id, blog_id, content, created_at, updated_at }: CommentConstructor) {
    const date = new Date();
    this._id = _id;
    this.user_id = user_id;
    this.blog_id = blog_id;
    this.content = content;
    this.created_at = created_at || date;
    this.updated_at = updated_at || date;
  }
}
