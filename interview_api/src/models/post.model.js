import { apiGet, apiPost } from "../utils/apiRequest.js";

export class PostModel {
  static async getPosts() {
    const posts = await apiGet("/posts");
    const comments = await apiGet("/comments");

    const postsWithComment = posts.map((item) => {
      const listComments = comments.filter((subItem) => {
        return subItem.postId == item.id;
      });
      return {
        body: item.body.split(/\s+/).slice(0, 100).join(" "),
        ...item,
        listComments: listComments,
      };
    });
    return postsWithComment;
  }
}
