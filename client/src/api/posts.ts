import axios from '../plugins/axios';
import { Post } from '../interfaces';

export const fetchPostAPI = async (): Promise<Post[]> => {
  try {
    const { data } = await axios.get('/posts');
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const addPostAPI = async ({ title, body }): Promise<Post> => {
  try {
    const { data } = await axios.post('/posts', { title, body });
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const deletePostAPI = async (id: number): Promise<void> => {
  try {
    await axios.delete(`/posts/${id}`);
  } catch (e) {
    console.log(e.message);
  }
};
