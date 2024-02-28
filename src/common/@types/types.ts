export interface IAuthToken {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

export interface IUser {
  id: string;
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
}

export interface IPost {
  id: string;
  userId: string;
  title: string;
  body: string;
}

export interface IComment {
  id: string;
  postId: string;
  name: string;
  email: string;
  body: string;
}
