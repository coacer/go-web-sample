import { User } from '../../../interfaces';

export enum ActionType {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  UN_SET_CURRENT_USER = 'UN_SET_CURRENT_USER',
}

interface SetCurrentUserAction {
  type: ActionType.SET_CURRENT_USER;
  payload: User;
}

interface UnSetCurrentUserAction {
  type: ActionType.UN_SET_CURRENT_USER;
}

export type CurrentUserAction = SetCurrentUserAction | UnSetCurrentUserAction;

export const setCurrentUser = (user: User): SetCurrentUserAction => {
  return {
    type: ActionType.SET_CURRENT_USER,
    payload: user,
  };
};

export const unSetCurrentUser = (): UnSetCurrentUserAction => {
  return {
    type: ActionType.UN_SET_CURRENT_USER,
  };
};
