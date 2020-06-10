import React from 'react'

export const GenreDropDown = props => {
  return (
    <div>
      <a
        className="dropdown-trigger btn red darken-3 col s2"
        href=""
        data-target="dropdown4"
      >
        <i className="material-icons right">arrow_drop_down</i>
        {props.genreTag}
      </a>
      <ul id="dropdown4" className="dropdown-content">
        <li onClick={() => props.genreFilter('All')}>
          <a href="#!">All</a>
        </li>
        <li onClick={() => props.genreFilter('Action')}>
          <a href="#!">Action/Adventure</a>
        </li>
        <li onClick={() => props.genreFilter('Horror')}>
          <a href="#!">Horror</a>
        </li>
        <li onClick={() => props.genreFilter('Drama')}>
          <a href="#!">Drama</a>
        </li>
        <li onClick={() => props.genreFilter('Fantasy')}>
          <a href="#!">Fantasy</a>
        </li>
        <li onClick={() => props.genreFilter('Sci-Fi')}>
          <a href="#!">Sci-Fi</a>
        </li>
        <li onClick={() => props.genreFilter('Animated')}>
          <a href="#!">Animated</a>
        </li>
        <li onClick={() => props.genreFilter('Documentary')}>
          <a href="#!">Documentary</a>
        </li>
        <li onClick={() => props.genreFilter('Foreign')}>
          <a href="#!">Foreign</a>
        </li>
        <li onClick={() => props.genreFilter('Comedy')}>
          <a href="#!">Comedy</a>
        </li>
        <li onClick={() => props.genreFilter('Film-Noir')}>
          <a href="#!">Film Noir</a>
        </li>
      </ul>
    </div>
  )
}
