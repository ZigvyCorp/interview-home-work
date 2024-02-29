
import { HTTP } from '../../../lib/axiosClient';

export const fetchAllPostByKeyWordAPI = async (keyword) => {
    const res = await HTTP.get(`posts?search=${keyword}`);
    return res.data;
};

