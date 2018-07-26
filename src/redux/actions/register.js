import qs from 'query-string';
import axios from 'axios';
import * as Actions from '../types';

function register (data) {
  return async dispatch => {
    dispatch({type: Actions.LOGIN});

    try {
      const response = await axios({
        method: 'post',
        url: `${baseURL}/client/user/sign-up`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(data),
      });
        const result = {
          user: response.data.data,
        }
        dispatch({type: Actions.LOGOUT_SUCCESS, result});
    } catch (e) {
      dispatch({type: Actions.LOGIN_FAIL});
    }
  }
}

const authActions = {
  login,
  logout,
}

export default authActions;