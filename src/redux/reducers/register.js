import * as ACTIONS from '../types';

export default function users(state = {}, action) {

  switch (action.type) {

    case ACTIONS.REGISTER:
      return {
        ...state,
      };
    case ACTIONS.REGISTER_SUCCESS:
      console.log(action.payload.user);
      return {
        ...state,
        user:action.payload.user,
      };
    case ACTIONS.REGISTER_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
