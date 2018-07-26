import { AsyncStorage } from 'react-native';
import * as Actions from '../types';

const INITIAL_STATE = {
  loading: false,
  token: null,
  username: null,
  error: null
}

export default function authReducer(state = INITIAL_STATE, action) {
  // console.log(action.type)

  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        loading: true
      }

    case Actions.LOGIN_SUCCESS:
      const expires = new Date()
      expires.setDate(expires.getDate() + 1)
      AsyncStorage.setItem('token', action.payload.token);
      AsyncStorage.setItem('me', action.payload.data);
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        username: action.payload.data,
        error: null
      }

    case Actions.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        token: null,
        error: action.error,
        username: null
      }

    case Actions.LOGOUT_SUCCESS:
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('me');
      return {
        ...state,
        loading: false,
        token: null,
        username: null,
        error: null
      }

    default:
      return state
  }
}