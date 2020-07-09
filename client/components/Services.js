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
        <li>
          <a onClick={() => props.serviceFilter('Netflix')}>Netflix</a>
        </li>
        <li>
          <a onClick={() => props.serviceFilter('Hulu')}>Hulu</a>
        </li>
        <li onClick={() => props.serviceFilter('Amazon')}>
          <a>Amazon Prime</a>
        </li>
        <li onClick={() => props.serviceFilter('Every Service')}>
          <a>Every Service</a>
        </li>
      </ul>
    </div>
  )
}
