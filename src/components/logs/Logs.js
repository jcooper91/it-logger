import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: { logs, loading }, getLogs }) => {

useEffect(() => {
  getLogs()
  // es-lint-disable-next-line
}, [getLogs])

if(loading || logs === null) {
  return <Preloader />
}

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
  { !loading && logs.length === 0 ? (<p className="center">No logs to show...</p>) : logs.map(log => <LogItem log={log} key={log.id} />) }
    </ul>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
}

//  Map state to props 
const mapStateToProps = state => ({
  log: state.log // state.log refers to our rootReducer 

  // alternative way to passing it in ass props to the function 
  // logs: state.log.logs,
  // loading: state.log.loading
})

// only use mapStateToProps when you are bringing in state
export default connect(mapStateToProps, { getLogs })(Logs)
