import {API_BASE_URL} from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => {
  return {
    type: 'FETCH_DOG_REQUEST', 
  } 
}


export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (data) => {
  return {
    type: 'FETCH_DOG_SUCCESS', 
    data
  } 
}

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (err) => {
  return {
    type: 'FETCH_DOG_ERROR', 
    err
  } 
}

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => {
  return {
    type: 'ADOPT_DOG_REQUEST'
  } 
}


export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => {
  return {
    type: 'ADOPT_DOG_SUCCESS', 
  } 
}

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = (err) => {
  return {
    type: 'ADOPT_DOG_ERROR', 
    err
  } 
}


export const fetchDog = () => {
  return(dispatch) => {
    dispatch(fetchDogRequest());
    // fetch(`${API_BASE_URL}/dog`)
    fetch(`${API_BASE_URL}/dog`)
      .then(res => res.json())
      .then(data => dispatch(fetchDogSuccess(data)))
      .catch(err => dispatch(fetchDogError(err)))
  }
}

export const adoptDog = () => {
  return(dispatch) => {
    dispatch(adoptDogRequest());
    fetch(`${API_BASE_URL}/api/dog`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .then(() => dispatch(adoptDogSuccess()))
      .then(dispatch(fetchDog()))
      .catch(err => dispatch(adoptDogError(err)))
  }
}