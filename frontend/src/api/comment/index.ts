import { AxiosResponse } from "axios";
import { IComment } from "src/interfaces/comment";
import api from "src/api";
import { COMMENT_BASE_URL } from "./constants";

export async function createComment(
  comment: Omit<IComment, "id">
): Promise<IComment> {
  try {
    const response: AxiosResponse<IComment> = await api.post(
      COMMENT_BASE_URL,
      comment
    );
    return response.data;
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
}
