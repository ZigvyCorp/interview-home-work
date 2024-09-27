import axios from 'axios';
import {PostState, Post} from '../types/postType'

export const fetchPosts = async (limit: number = 5, skip: number = 0, query: string = ''): Promise<PostState> => {
  try {
      const response = await axios.get<PostState>(`http://localhost:3000/api/posts?limit=${limit}&skip=${skip}&query=${query}`);
      return response.data; 
  } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
  }
};


export const fetchPostsById = async (_id: string): Promise<Post> => {
    try {
      const response = await axios.get<Post>(`http://localhost:3000/api/posts/${_id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching post with id ${_id}:`, error);
      throw error;
    }
  };