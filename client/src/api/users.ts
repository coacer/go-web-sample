import { User } from '../interfaces';
import axios from '../plugins/axios';

export const addUserAPI = async ({ uid, name, email }: User): Promise<User> => {
  const { data } = await axios.post('/users', {
    uid,
    name,
    email,
  });
  return data;
};
