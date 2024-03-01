import { apiGet } from "../utils/apiRequest.js";

export class CommentModel {
  static async getComments() {
    return apiGet("/comments");
  }
}
