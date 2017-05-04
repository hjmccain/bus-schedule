export const CHOOSE_LANGUAGE = 'CHOOSE_LANGUAGE';
export const chooseLanguage = (lang) => ({
  type: CHOOSE_LANGUAGE,
  lang
});

export const FETCH_RESULTS = 'FETCH_RESULTS';
export const fetchResults = () => ({
  type: FETCH_RESULTS
});

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  data
});

export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const getDataError = err => ({
  type: GET_DATA_ERROR
});

export const getData = (inputDate, currency) => (dispatch) => {

  const getData = (origin, destination, date, params, index) => {
    return fetch(`/itineraries/${origin}/${destination}/${date}/${params}/${index}`)
    .then(res => {
      if (!res.ok) { throw new Error(res.statusText) }
      return res.json();
    }).then(res => {
      console.log(res);
      const { complete, departures } = res;
      if (complete === false) {
        getData('dr5reg', 'f25dvk', inputDate, `adult=1&currency=${currency}`, departures.indexOf(departures)[-1]);
      } else {
        dispatch(getDataSuccess(res))
      }
    }).catch(err => {
      dispatch(getDataError(err))
    });
  }

  getData('f25dvk', 'dr5reg', inputDate, `adult=1&currency=${currency}`);
}
