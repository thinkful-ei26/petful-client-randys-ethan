import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_ERROR,
  ADOPT_DOG_SUCCESS,
  fetchDog,
  adoptDog,
} from '../actions/dog';


const initialState = {
  data: {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  error: null,
  loading: false,
};

const dogsReducer = (state=initialState, action) => {
  if (action.type === FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    })
  } else if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    })
  } else if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      data: action.data,
    })
  }
  return state
}

export default dogsReducer;