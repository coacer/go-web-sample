import { User } from '../../../interfaces';
import { CurrentUserAction, ActionType } from '../../actions/current_user';

const reducer = (_state: User = null, action: CurrentUserAction): User => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return action.payload;
    case ActionType.UN_SET_CURRENT_USER:
      return null;
    default:
      return null;
  }
};

export default reducer;
