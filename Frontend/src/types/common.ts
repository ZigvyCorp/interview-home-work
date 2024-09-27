export interface ITimeStamp {
  createdAt: Date;
  createdById: string;
  updatedAt: Date;
  updatedById: string;
  deletedAt: Date;
  deletedById: string;
}

export interface IMeta {
  total: number;
  page: number;
  take: number;
}
