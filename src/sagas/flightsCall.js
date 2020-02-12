import { delay, takeEvery } from 'redux-saga'
import { fork, call, put, spawn, take } from 'redux-saga/effects'
import * as actionTypes from '../actionTypes/blockingCalls'

const API_ENDPOINT_CHEAP = 'https://tokigames-challenge.herokuapp.com/api/flights/cheap'
const API_ENDPOINT_BUSINESS = 'https://tokigames-challenge.herokuapp.com/api/flights/business'

function* getCheapFligtsData() {
  yield take(actionTypes.GET_FLIGHTS)
  yield fork(fetchResource, API_ENDPOINT_CHEAP, {type: actionTypes.GET_FLIGHT_SUCCESS})
}

function* getBusinessFlightsData() {
  yield take(actionTypes.GET_BUSINESS_FLIGHTS)
  yield fork(fetchResource, API_ENDPOINT_BUSINESS, {type: actionTypes.GET_FLIGHT_SUCCESS})
}

function* fetchResource(resource, successAction) {
  const data = yield call(() => fetch(resource).then(r => r.json()))
  successAction.data = data
  yield put(successAction)
}

export function* runFlightsLoading() {
  yield [
    getCheapFligtsData(),
    getBusinessFlightsData()
  ]
}