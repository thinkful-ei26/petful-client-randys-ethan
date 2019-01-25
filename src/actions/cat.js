

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





export const fetchCat = () => {
  return(dispatch) => {
    dispatch(fetchCatRequest());
    // console.log(`${API_BASE_URL}/cheeses`);
    // fetch(`${API_BASE_URL}/cat`)
    fetch(`localhost:8080/cat`)
      .then(res => res.json())
      .then(cat => dispatch(fetchCatSuccess(cat)))
      .catch(err => dispatch(fetchCatError(err)))
  }
}
