export const getData = () => (dispatch) => {

  const getData = (index) => {
    return fetch(`/itinerary/dr5reg/f25dvk/2017-05-30/adult=1&currency=CAD`)
    .then(res => {
      if (!res.ok) { throw new Error(res.statusText) }
      return res.json();
    }).then(res => {
      console.log(res);
      // dispatch(getDataSuccess(res, currentEnd))
      if (res.complete === false) {
        getData();
      }
    }).catch(err => {
      console.error(err);
      // dispatch(getDataError(err))
    });
  }

  getData();
}
