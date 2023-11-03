export interface PayloadAction<T> {
    type: string;
    payload: T;
    error: any;
}