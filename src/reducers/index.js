import { combineReducers } from 'redux'
import blockingCallsExampleReducer from './flightsCalls'

const reducer = combineReducers({
  blockingCallsExample: blockingCallsExampleReducer
})

export default reducer