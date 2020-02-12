import * as actionTypes from '../actionTypes/blockingCalls'

export default (prevState = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_FLIGHTS:
      return {
        ...prevState,
        isFetching: true
      }
    case actionTypes.GET_FLIGHT_SUCCESS:
      return {
        ...prevState,
        isFetching: false,
        flights: action.data
      }
    case actionTypes.GET_BUSINESS_FLIGHTS:
      return {
        ...prevState,
        isFetching: false,
        flights: action.data
      }
    case actionTypes.ERROR:
      return {
        ...prevState,
        isFetching: false,
        error: action.error
      }
    default:
      return prevState
  }
}