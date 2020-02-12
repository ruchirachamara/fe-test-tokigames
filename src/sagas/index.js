import { runFlightsLoading } from './flightsCall'

export default function* rootSaga() {
  yield [runFlightsLoading()]
}