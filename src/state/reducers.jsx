import * as actions from './actions';

const state = (state = {}, action) => {
  switch (action.type) {
  case actions.GET_DATA_SUCCESS:
    return state = Object.assign({}, state, {
      data: [...state.data, ...action.data],
      currentEnd: action.currentEnd,
      sorting: false,
      getDataError: false
    });
  default:
    return state;
  }
}

export default state;
