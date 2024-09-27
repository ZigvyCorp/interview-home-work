import axios from 'axios';
import {Comment} from '../types/commentType'

export const fetchComments = async (): Promise<Comment[]> => {
  try {
    const response = await axios.get<Comment[]>('http://localhost:3000/api/comments'); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};
