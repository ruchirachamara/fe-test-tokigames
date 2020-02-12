import * as actionTypes from '../actionTypes/blockingCalls'

export function getFlights() {
  return {
    type: actionTypes.GET_FLIGHTS
  }
}

export function getBusinessFlights() {
  return {
    type: actionTypes.GET_BUSINESS_FLIGHTS
  }
}

export function getFlightsSuccess(flights) {
  return {
    type: actionTypes.GET_FLIGHT_SUCCESS, 
    flights
  }
}

export function getFlightsError(error) {
  return {
    type: actionTypes.ERROR, 
    error
  }
}