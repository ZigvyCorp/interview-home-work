import { IComment } from "src/interfaces/comment";
import { AxiosResponse } from "axios";
import api from "src/api";

export async function commentPost(comment: IComment) {
  try {
    const response: AxiosResponse = await api.post("/comments", comment);
    return response.data;
  } catch (error) {
    throw error;
  }
}
