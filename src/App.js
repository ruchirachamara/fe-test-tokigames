import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as flightsCallsActionCreators from './actionCreators/flightsCalls'
import { StickyHeadTable } from './resuables/table'
import { CircularIndeterminate } from './resuables/loader'

import './App.css'

const columns = [
  { 
    id: 'route', 
    label: 'Route', 
    minWidth: 170,
    align: 'left',
    format: value => value.toLocaleString(), 
  },
  { 
    id: 'departure', 
    label: 'Departure', 
    minWidth: 100 
  },
  {
    id: 'arrival',
    label: 'Arrival',
    minWidth: 100 
  }
]

class App extends Component {

  render() {

    const { state, blockingCallsExampleActions } = this.props

    return (
        <div className="App">
          <div className="App-header">
            <h2>TOKI Games - Test Example</h2>
          </div>
          <h4>Flights</h4>          
          <div className="main__container-wrapper">
            {state.blockingCallsExample.isFetching && <CircularIndeterminate />}
            {state.blockingCallsExample.flights &&
              <StickyHeadTable 
                columns={columns}
                dataSet={state.blockingCallsExample.flights.data}
              />
            }            
          </div>          
          <button onClick={blockingCallsExampleActions.getFlights}>Get Cheap Flights</button>          
          <button onClick={blockingCallsExampleActions.getBusinessFlights}>Get Business Flights</button>          
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    blockingCallsExampleActions: bindActionCreators(flightsCallsActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)