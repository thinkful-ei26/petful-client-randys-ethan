import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_ERROR,
  ADOPT_CAT_SUCCESS,
} from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false,
}

const catsReducer = (state=initialState, action) => {
  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    })
  } else if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })
  } else if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      data: action.data,
    })
  } else if (action.type === ADOPT_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null,
    })
  } else if (action.type === ADOPT_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })
  }
  else if (action.type === ADOPT_CAT_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
    })
  }
  // console.log(state);
  return state
}

export default catsReducer;