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
export declare class IGeo {
    lat: string;
    lng: string;
}
export declare class ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
