import { SerializedError } from "@reduxjs/toolkit";

export type PostInitType = {
  postList: any[];
  loading: boolean;
  currentRequestId: string | undefined;
  error: SerializedError | null;
};
