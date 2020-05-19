import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const capitalizeFunc = function(string) {
  let theString = ''
  for (let i = 0; i < string.length; i++) {
    theString += string[i]
  }
  return theString
}

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
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
            <div className="nav-wrapper">
              <form className="right">
                <div className="input-field">
                  <input id="search" type="search" required />
                  <label className="label-icon" htmlFor="search">
                    <Link to="/SingleMovie/4">
                      <i className="material-icons">search</i>
                    </Link>
                  </label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
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
                <Link to="/allMovies">Movies</Link>
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
