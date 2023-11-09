import { ObjectId } from 'mongodb';
import { BlogAudience } from '~/constants/enum';

interface BlogConstructor {
  _id?: ObjectId;
  user_id: ObjectId;
  title: string;
  content: string;
  view_count?: number;
  like_count?: number;
  audience?: BlogAudience;
  created_at?: Date;
  updated_at?: Date;
}

export default class Blog {
  _id?: ObjectId;
  user_id: ObjectId;
  title: string;
  content: string;
  view_count: number;
  like_count: number;
  audience: BlogAudience;
  created_at: Date;
  updated_at: Date;

  constructor({
    _id,
    user_id,
    title,
    content,
    view_count,
    like_count,
    audience,
    created_at,
    updated_at
  }: BlogConstructor) {
    const date = new Date();
    this._id = _id;
    this.user_id = user_id;
    this.title = title;
    this.content = content;
    this.view_count = view_count || 0;
    this.like_count = like_count || 0;
    this.audience = audience || BlogAudience.Everyone;
    this.created_at = created_at || date;
    this.updated_at = updated_at || date;
  }
}
