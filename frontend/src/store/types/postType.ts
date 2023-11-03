import { SerializedError } from "@reduxjs/toolkit";

export type PostType = {
  id: number;
  content: string;
  created_at: string;
  title: string;
  tag: string[];
  owner: number;
};

export type PostInitType = {
  postList: PostType[];
  loading: boolean;
  currentRequestId: string | undefined;
  error: SerializedError | null;
};
