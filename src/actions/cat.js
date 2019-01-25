import {API_BASE_URL} from '../config';

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => {
  return {
    type: 'FETCH_CAT_REQUEST', 
  } 
}


export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (data) => {
  return {
    type: 'FETCH_CAT_SUCCESS', 
    data
  } 
}

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (err) => {
  return {
    type: 'FETCH_CAT_ERROR', 
    err
  } 
}

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => {
  return {
    type: 'ADOPT_CAT_REQUEST', 
  } 
}


export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => {
  return {
    type: 'ADOPT_CAT_SUCCESS', 
  } 
}

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = (err) => {
  return {
    type: 'ADOPT_CAT_ERROR', 
    err
  } 
}


export const fetchCat = () => {
  return(dispatch) => {
    dispatch(fetchCatRequest());
    // console.log(`${API_BASE_URL}/cats`);
    // fetch(`${API_BASE_URL}/cat`)
    fetch(`${API_BASE_URL}/cat`)
      .then(res => res.json())
      .then(data => dispatch(fetchCatSuccess(data)))
      .catch(err => dispatch(fetchCatError(err)))
  }
}

export const adoptCat = () => {
  return(dispatch) => {
    dispatch(adoptCatRequest());
    fetch(`${API_BASE_URL}/cat`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then(() => dispatch(adoptCatSuccess()))
      .then(dispatch(fetchCat()))
      .catch(err => dispatch(adoptCatError(err)))
  }
}
