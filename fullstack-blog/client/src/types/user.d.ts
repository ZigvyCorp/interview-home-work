interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IAddress {
    geo: {
        lat: string;
        lng: string;
    };
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

declare interface IUser {
  _id: string;
  jsonId: number,
  name: string;
  username:string;
  email: string;
  phone:number;
  website: string;
  image:string;
  company: ICompany;
  address: IAddress;
}