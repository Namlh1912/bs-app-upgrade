import * as ACTIONS from '../types';
import loginServices from '../services/auth';

export function login(username,password) {
  function request() {
    return { type: ACTIONS.LOGIN };
  }
  function success(payload) {
    return { type: ACTIONS.LOGIN_SUCCESS, payload };
  }
  return dispatch => {
    dispatch(request());
    loginServices(username,password).then(
      (res) => {
        dispatch(success({
          token: res.headers.authorization,
          data: JSON.stringify(res.data.data)
        }));
      }
    ).catch(
      (error) => {
        console.log(error);
      },
    );
  };
}

function logout() {
  return{
    type:ACTIONS.LOGOUT_SUCCESS,

  }
}


const authActions = {
  login,
  logout
};

export default authActions;