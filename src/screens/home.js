import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as blockingCallsExampleActionCreators from '../actionCreators/blockingCalls'

import { StickyHeadTable } from '../resuables/table'

class Home extends Component {

    render() {

        const {
            state,
            blockingCallsExampleActions
        } = this.props
    
        return (
            <div>
                {state.blockingCallsExample.isFetching && <h2>Loading...</h2>}
                <div className="App">
                    <div className="App-header">
                        <h2>Flights Lists - Toki Games / Test</h2>
                    </div>
                    <button onClick={blockingCallsExampleActions.getUsers}>Get Users
                    </button>
                    <StickyHeadTable />
                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        state
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        blockingCallsExampleActions: bindActionCreators(blockingCallsExampleActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)