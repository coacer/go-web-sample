import { createContext, Context, Dispatch } from 'react';
import { Post } from '../interfaces';
import { PostAction } from '../store/actions/posts';

interface PostsContext {
  posts: Post[];
  dispatch: Dispatch<PostAction>;
}

export const PostsContext: Context<PostsContext> = createContext(
  {} as PostsContext
);
