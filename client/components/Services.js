import React from 'react'

export const Services = props => {
  return (
    <div>
      <a
        className="dropdown-trigger btn red darken-3 col s2 dropdownWidth"
        href=""
        data-target="dropdown3"
      >
        <i className="material-icons right">arrow_drop_down</i>
        {props.serviceTag}
      </a>
      <ul id="dropdown3" className="dropdown-content">
        <li onClick={() => props.serviceFilter('Netflix')}>
          <a href="#!">Netflix</a>
        </li>
        <li onClick={() => props.serviceFilter('Hulu')}>
          <a href="#!">Hulu</a>
        </li>
        <li onClick={() => props.serviceFilter('Amazon')}>
          <a href="#!">Amazon Prime</a>
        </li>
        <li onClick={() => props.serviceFilter('Every Service')}>
          <a href="#!">Every Service</a>
        </li>
      </ul>
    </div>
  )
}
