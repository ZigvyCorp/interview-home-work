import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { IBlog } from "@/models";

export type QueryData = {
  pages: (
    | {
        currentPage: number;
        postCount: number;
        nextPage: number | null;
        data: IBlog[];
      }
    | undefined
  )[];
  pageParams: number[];
};

export type BlogData = (IBlog | undefined)[];

type BlogsState = {
  searchTerms: string;
} & QueryData;

type BlogsActions = {
  setSearchTerm: (search: string) => void;
  setQueryData: (data: QueryData) => void;
};

type BlogsStore = BlogsState & BlogsActions;

const defaultInitState: BlogsState = {
  searchTerms: "",
  pages: [
    {
      currentPage: 1,
      nextPage: 2,
      data: [],
      postCount: 100,
    },
  ],
  pageParams: [1],
};
const useBlogsStore = create<BlogsStore>()(
  persist(
    (set) => ({
      ...defaultInitState,
      setQueryData: (data: QueryData) =>
        set((state) => ({ ...state, ...data })),
      setSearchTerm: (search: string) =>
        set((state) => ({ ...state, searchTerms: search })),
    }),

    {
      name: "zigvy-homework/posts-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useGetQueryData = () =>
  useBlogsStore((state) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setSearchTerm, searchTerms, setQueryData, ...data } = state;
    return data;
  });
export const useSetQueryData = () =>
  useBlogsStore((state) => state.setQueryData);
export const useGetSearchTerms = () =>
  useBlogsStore((state) => state.searchTerms);

export const useSetSearchTerms = () =>
  useBlogsStore((state) => state.setSearchTerm);
