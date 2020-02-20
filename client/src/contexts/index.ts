import { createContext, Context, Dispatch } from 'react';
import { Post, User } from '../interfaces';
import { PostAction } from '../store/actions/posts';
import { CurrentUserAction } from '../store/actions/current_user';

interface PostsContextType {
  posts: Post[];
  postsDispatch: Dispatch<PostAction>;
}

interface CurrentUserContextType {
  currentUser: User;
  currentUserDispatch: Dispatch<CurrentUserAction>;
}

export const PostsContext: Context<PostsContextType> = createContext(
  {} as PostsContextType
);

export const CurrentUserContext: Context<CurrentUserContextType> = createContext(
  {} as CurrentUserContextType
);

