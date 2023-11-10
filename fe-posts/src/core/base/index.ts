export interface BaseAction<T> {
  type: string;
  payload: T;
}

export type BaseActionResolver<T> = BaseAction<T> & {
  resolver: {
    reject: any;
    resolve: any;
  };
};

export const getBaseURLServer = () => {
  return 'http://localhost:3000';
};
