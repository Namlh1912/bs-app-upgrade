import * as Actions from '../types';

const INITIAL_STATE = {
  isLoading: false,
  isDetailLoading: true,
  list: [],
  current: null,
}

export default function bookReducer(state = INITIAL_STATE, action) {
  // console.log(action.type)
  switch (action.type) {
    case Actions.BOOK_DETAIL:
    case Actions.LIST_BOOK:
      return {
        ...state,
        current: null,
        isLoading: true
      }

    case Actions.LIST_BOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: action.payload.books,
      }

    case Actions.BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        current: action.payload.book,
        isDetailLoading:false,
      }

    case Actions.BOOK_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}