interface CommentInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface BlogInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  comments: CommentInterface[];
}
