import { Post } from '../../../interfaces';

export enum ActionType {
  RELOAD_POST_ALL = 'RELOAD_POST_ALL',
  ADD_POST = 'ADD_POST',
  UPDATE_POST = 'UPDATE_POST',
  DELETE_POST = 'DELETE_POST',
}

interface ReloadPostAllAction {
  type: ActionType.RELOAD_POST_ALL;
  payload: Post[];
}

interface AddPostAction {
  type: ActionType.ADD_POST;
  payload: Post;
}

interface UpdatePostAction {
  type: ActionType.UPDATE_POST;
  payload: Post;
}

interface DeletePostAction {
  type: ActionType.DELETE_POST;
  payload: { id: number };
}

export type PostAction =
  | ReloadPostAllAction
  | AddPostAction
  | UpdatePostAction
  | DeletePostAction;

export const reloadPost = (posts: Post[]): ReloadPostAllAction => {
  return {
    type: ActionType.RELOAD_POST_ALL,
    payload: posts,
  };
};

export const addPost = (post: Post): AddPostAction => {
  return {
    type: ActionType.ADD_POST,
    payload: post,
  };
};

export const updatePost = (post: Post): UpdatePostAction => {
  return {
    type: ActionType.UPDATE_POST,
    payload: post,
  };
};

export const deletePost = (id: number): DeletePostAction => {
  return {
    type: ActionType.DELETE_POST,
    payload: { id },
  };
};
