export interface PostReponseDTO {
  id: string;
  name: string;
  email: string;
  body: string;
  created_at: Date;
  created_by: string;
  update_at: Date;
  update_by: string;
  is_deleted: boolean;
}
export abstract class MapPostReponse {
  public static toDTO(post: PostReponseDTO): PostReponseDTO {
    return {
      id: post.id,
      name: post.name,
      email: post.email,
      body: post.body,
      created_at: post.created_at,
      created_by: post.created_by,
      update_at: post.update_at,
      update_by: post.update_by,
      is_deleted: post.is_deleted,
    };
  }
}
