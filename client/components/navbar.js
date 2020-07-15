import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Search} from './Search'

const Navbar = ({handleClick, isLoggedIn, showResultsFunc, browseClick}) => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="/allMovies" className="brand-logo center">
          StreamGuide
        </a>

        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">User Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* <nav> */}
            <Search showResultsFunc={showResultsFunc} />
            {/* </nav> */}

            <ul id="nav-mobile" className="center hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/allMovies" onClick={browseClick}>
                  Browse
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
