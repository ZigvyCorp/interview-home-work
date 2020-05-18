import Post, { IPost, ISearchPost } from '@entities/Post';
import logger from '@shared/Logger';

export interface IPostDao {
  getOne: (email: string) => Promise<IPost | null>;
  getAllByUser: (userId: number) => Promise<IPost[]>;
  add: (user: IPost) => Promise<void | IPost>;
  update: (user: IPost) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

class PostDAO implements IPostDao {
  /**
     * @param email
     */
  public async getOne(email: string): Promise<IPost | null> {
    // TODO
    return [] as any;
  }


  /**
   *
   */
  public async getAllByUser(userId: number): Promise<IPost[]> {
    return Post.find({ owner: userId });
  }
  /**
   *
   */
  public async getAll(search: ISearchPost): Promise<IPost[]> {
    const searchArray = Object.entries(search).map(([ key, value ]) => ({
      [ key ]: value
    }));
    return Post.find({ $or: searchArray });
  }


  /**
   *
   * @param post
   */
  public async add(post: object): Promise<void | IPost> {
    return await Post.create(post)
      .then((newPost: IPost) => newPost)
      .catch((error: Error) => {
        logger.log('error', error.message);
      });
  }


  /**
   *
   * @param user
   */
  public async update(user: IPost): Promise<void> {
    return {} as any;
  }


  /**
   *
   * @param id
   */
  public async delete(id: number): Promise<void> {
    return {} as any;
  }

}

export default PostDAO;
