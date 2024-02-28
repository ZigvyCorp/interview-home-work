export type UserFromMockApi = {
    id: number;
    name: string;
    username: string;
    email: string;
};

export type CreateUserRequest = {
    id: number;
    name: string;
    username: string;
    email: string;
};

export type UpdateUserRequest = {
    name: string;
    username: string;
    email: string;
};
