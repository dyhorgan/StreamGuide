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
          <a href="#!">Popularity</a>
        </li>
        <li onClick={() => props.sortByAlphabet()}>
          <a href="#!">Alphabetical</a>
        </li>
        <li onClick={() => props.sortByIMDB()}>
          <a href="#!">IMDB Score</a>
        </li>
        <li onClick={() => props.sortByRT()}>
          <a href="#!">Rotten Tomatoes Score</a>
        </li>
      </ul>
    </div>
  )
}
