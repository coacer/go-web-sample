import axios from '../plugins/axios';
import { Post } from '../interfaces';

export const fetchPostAPI = async (): Promise<Post[]> => {
  const { data } = await axios.get('/posts');
  return data;
};

export const addPostAPI = async ({ title, body }): Promise<Post> => {
  const { data } = await axios.post('/posts', { title, body });
  return data;
};

export const deletePostAPI = async (id: number): Promise<void> => {
  await axios.delete(`/posts/${id}`);
};
