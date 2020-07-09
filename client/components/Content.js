import React from 'react'

export const Content = props => {
  return (
    <div>
      <a
        className="dropdown-trigger btn red darken-3 col s2"
        href=""
        data-target="dropdown2"
      >
        <i className="material-icons right">arrow_drop_down</i>
        {props.contentTag}
      </a>
      <ul id="dropdown2" className="dropdown-content">
        <li>
          <a onClick={() => props.contentFilter('Movies/TV')}>
            Movies and TV Shows
          </a>
        </li>
        <li>
          <a onClick={() => props.contentFilter('Movies')}>Movies</a>
        </li>
        <li>
          <a onClick={() => props.contentFilter('TV Shows')}>TV Shows</a>
        </li>
      </ul>
    </div>
  )
}
