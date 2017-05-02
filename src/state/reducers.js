import * as actions from './actions';
import moment from 'moment';

const state = (state = {}, action) => {
  switch (action.type) {
  case actions.GET_DATA_SUCCESS:
    let locationsArray = [];
    const { departures, locations, operators } = action.data;
    departures.forEach(departure => {
      const { total } = departure.prices;
      const arrivalLocation = locations.filter(location => location.id === departure.destination_location_id);
      const departureLocation = locations.filter(location => location.id === departure.origin_location_id);
      const operator = operators.filter(operator => operator.id === departure.operator_id);
      const priceEnd = total.toString().length;
      const cents = total.toString().slice(priceEnd - 2, priceEnd);
      const dollars = total.toString().slice(0, priceEnd - 2);
      locationsArray.push({
        departureName: departureLocation[0].name,
        departureAddress: departureLocation[0].address,
        departureDate: moment(departures.departure_time).format('MMMM D YYYY'),
        departureTime: moment(departures.departure_time).format('H:m a'),
        arrivalName: arrivalLocation[0].name,
        arrivalAddress: arrivalLocation[0].address,
        arrivalDate: moment(departures.arrival_time).format('MMMM D YYYY'),
        arrivalTime: moment(departures.arrival_time).format('H:m a'),
        carrier: operator[0].name,
        price: `${dollars}.${cents}`
      })
    });
    return state = Object.assign({}, state, {
      data: locationsArray,
      getDataError: false
    });
  default:
    return state;
  }
}

export default state;
