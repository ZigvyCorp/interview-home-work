export interface Geo {
    _id: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
    _id: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface UserType {
    _id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    __v: number;
}
export interface UserInitState {
    loading: boolean,
    currentUser: UserType | null
}
