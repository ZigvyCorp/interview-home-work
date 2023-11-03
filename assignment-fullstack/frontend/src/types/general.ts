export type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
    ...args: any
) => Promise<infer R>
    ? R
    : any;

export type Option<T extends number | string = any> = {
    label: string;
    value: T;
};

export type BooleanStatus = 0 | 1;

export type VoidFunc = () => void;

export type StateResponse<T> = {
    loading: boolean;
    error: any;
    data: T | null;
};

export type ExtractType<T, P extends string = any> = Extract<T, P>;

export type TypographyType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'label'
    | 'caption'
    | 'em'
    | 'strong';

export enum BreakPoints {
    Mobile = 0,
    Tablet = 768,
    Laptop = 992,
    SmallDesktop = 1280,
    LargeDesktop = 1920,
}
