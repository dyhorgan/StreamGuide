import React from 'react'

export const Sliders = () => {
  return (
    <div>
      <a
        className="dropdown-trigger btn right red darken-3 col s2 flow-text"
        href=""
        data-target="dropdown5"
      >
        <i className="material-icons right">arrow_drop_down</i>
        Filters
      </a>
      <ul id="dropdown5" className="dropdown-content">
        <li>
          <a href="#!">Release Year</a>
          {/* <div id="test-slider"></div> */}
          <form action="#">
            <p className="range-field">
              1900
              <input type="range" id="test5" min="1900" max="2020" />
              2020
            </p>
          </form>
        </li>
        <li>
          <a href="#!">IMDB Score</a>
          {/* <div id="test-slider"></div> */}
          <form action="#">
            <p className="range-field">
              0
              <input type="range" id="test5" min="0" max="100" />
              10
            </p>
          </form>
        </li>
        <li>
          <a href="#!">Rotten Tomatoes Score</a>
          {/* <div id="test-slider"></div> */}
          <form action="#">
            <p className="range-field">
              0%
              <input type="range" id="test5" min="0" max="100" />
              100%
            </p>
          </form>
        </li>
        <li>
          <a href="#!"># of IMDB Votes</a>
          {/* <div id="test-slider"></div> */}
          <form action="#">
            <p className="range-field">
              {/* <div className="left"> */}
              0
              {/* </div> */}
              <input
                type="range"
                id="test5"
                min="0"
                max="100"

                // value="0"
              />
              {/* <div className="right"> */}
              2 Mil.
              {/* </div> */}
            </p>
          </form>
        </li>
      </ul>
    </div>
  )
}
