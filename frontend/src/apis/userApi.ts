import axios from 'axios';
import {User} from '../types/userType'

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('http://localhost:3000/api/users'); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
