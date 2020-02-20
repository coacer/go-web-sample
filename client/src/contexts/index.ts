import { createContext, Context, Dispatch } from 'react';
import { Post, User } from '../interfaces';
import { PostAction } from '../store/actions/posts';

interface PostsContextType {
  posts: Post[];
  dispatch: Dispatch<PostAction>;
}

interface CurrentUserContextType {
  currentUser: User;
  dispatch: Dispatch<UserAction>;
}

export const PostsContext: Context<PostsContextType> = createContext(
  {} as PostsContextType
);

export const CurrentUserContext: Context<CurrentUserContextType> = createContext(
  {} as CurrentUserContextType
);

