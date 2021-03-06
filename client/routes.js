import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, BrowserRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import {AllMovies} from './components/allMovies'
import {Home} from './components/Home'
import {Playground} from './components/MaterializePlayground'
import {SingleMovie} from './components/SingleMovie'
import {SearchResults} from './components/SearchResults'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/allMovies"
          component={() => (
            <AllMovies
              results={this.props.results}
              showResults={this.props.showResults}
              showResultsFunc={this.props.showResultsFunc}
              compFunc={this.props.compFunc}
            />
          )}
        />
        <Route path="/SingleMovie/:id" component={SingleMovie} />
        <Route path="/SearchResults" component={SearchResults} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route exact path="/" component={Home} />
        <Route exact path="/playground" component={Playground} />
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
