import React from 'react'

export const Sort = props => {
  return (
    <div>
      <a
        className="dropdown-trigger btn right"
        href=""
        data-target="dropdown1"
        onChange={() => props.orderChange()}
      >
        <i className="material-icons right">arrow_drop_down</i>
        {props.sortTag}
      </a>
      <ul id="dropdown1" className="dropdown-content">
        <li onClick={() => props.sortByPop()}>
          <a>Popularity</a>
        </li>
        <li onClick={() => props.sortByAlphabet()}>
          <a>Alphabetical</a>
        </li>
        <li onClick={() => props.sortByIMDB()}>
          <a>IMDB Score</a>
        </li>
        <li onClick={() => props.sortByRT()}>
          <a>Rotten Tomatoes Score</a>
        </li>
      </ul>
    </div>
  )
}
