import { createContext, Context, Dispatch } from 'react';
import { Post } from '../interfaces';
import { PostAction } from '../store/actions/posts';

interface PostsContext {
  posts: Post[];
  dispatch: Dispatch<PostAction>;
}

const AppContext: Context<PostsContext> = createContext({} as PostsContext);

export default AppContext;
