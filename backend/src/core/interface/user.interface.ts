export interface IUser {
  name: string;

  username: string;

  email: string;

  address: IAddress;

  phone: string;

  website: string;

  company: ICompany;
}

export interface IAddress {
  street: string;

  suite: string;

  city: string;

  zipcode: string;

  geo: IGeo;
}

export class IGeo {
  lat: string;

  lng: string;
}

export class ICompany {
  name: string;

  catchPhrase: string;

  bs: string;
}
