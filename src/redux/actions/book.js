import * as Actions from '../types';
import bookServices from '../services/book';

function list () {
  function request() {
    return { type: Actions.LIST_BOOK };
  }
  function success(payload) {
    return { type: Actions.LIST_BOOK_SUCCESS, payload };
  }
  function failure() {
    return { type: Actions.LIST_BOOK_FAIL };
  }
  return dispatch => {
    dispatch(request());
    bookServices.list().then(
      (res) => {
        dispatch(success({books:res.data.data}))
      }
    ).catch(
      () => {
        dispatch(failure());
      },
    );
  };
}

function detail(id){
  function request() {
    return { type: Actions.BOOK_DETAIL };
  }
  function success(payload) {
    return { type: Actions.BOOK_DETAIL_SUCCESS, payload };
  }
  function failure() {
    return { type: Actions.BOOK_DETAIL_FAIL };
  }
  return dispatch => {
    dispatch(request());
    bookServices.detail(id).then(
      (res) => {
        dispatch(success({book:res.data.data}))
      }
    ).catch(
      () => {
        dispatch(failure());
      },
    );
  };
}

const bookActions = {
  list,
  detail
};

export default bookActions;