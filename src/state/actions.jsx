export const getData = (origin, destination, date, params, index) => (dispatch) => {

  const getData = (origin, destination, date, params, index) => {
    return fetch(`/itineraries/${origin}/${destination}/${date}/${params}/${index}`)
    .then(res => {
      if (!res.ok) { throw new Error(res.statusText) }
      return res.json();
    }).then(res => {
      console.log(res);
      const { complete, departures } = res;
      // dispatch(getDataSuccess(res, currentEnd))
      if (complete === false) {
        getData('dr5reg', 'f25dvk', '2017-05-30', 'adult=1&currency=CAD', departures.indexOf(departures)[-1]);
      }
    }).catch(err => {
      console.error(err);
      // dispatch(getDataError(err))
    });
  }

  getData('dr5reg', 'f25dvk', '2017-05-30', 'adult=1&currency=CAD');
}
