export interface BlogItem {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  tagList: TagItem[];
  content: string;
  replyList: ReplyItem[];
}

export interface ReplyItem {
  id: number;
  imageUrl: string;
  name: string;
  createdAt: string;
  content: string;
}

export interface TagItem {
  id: number;
  name: string;
  color: string;
}

export interface UserPayload {
  name: string;
  avatar: string;
}

export interface AuthorPayload {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoPayload;
  };
  phone: string;
  website: string;
  company: CompanyPayload;
}

export interface GeoPayload {
  lat: number;
  lng: number;
}

export interface CompanyPayload {
  name: string;
  catchPhrase: string;
  bs: string;
}
