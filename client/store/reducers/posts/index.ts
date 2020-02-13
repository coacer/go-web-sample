import { PostAction, ActionType } from '../../actions/posts';
import { Post } from '../../../interfaces';

const initialState: Post[] = [];

const reducer = (state = initialState, action: PostAction): Post[] => {
  switch (action.type) {
    case ActionType.RELOAD_POST_ALL:
      return action.payload;
    case ActionType.ADD_POST:
      return [...state, action.payload];
    case ActionType.UPDATE_POST:
      return [...state, action.payload];
    case ActionType.DELETE_POST:
      state = state.filter(todo => todo.id !== action.payload.id);
      return state;
  }
};

export default reducer;
