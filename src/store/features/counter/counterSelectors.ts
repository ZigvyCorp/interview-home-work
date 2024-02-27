import { RootState } from "@/store/store";

export const selectCounter = (state: RootState) => state.counter;