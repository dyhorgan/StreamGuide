import React from 'react'
import {Dropdown} from 'react-bootstrap'

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
        <li>
          <a onClick={() => props.genreFilter('All')}>All</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Action')}>Action/Adventure</a>
        </li>
        <li className="center">
          {/* <button onClick={() => props.genreFilter('Horror')} type="submit" >Horror</button> */}
          <a onClick={() => props.genreFilter('Horror')}>Horror</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Drama')}>Drama</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Fantasy')}>Fantasy</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Sci-Fi')}>Sci-Fi</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Animated')}>Animated</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Documentary')}>Documentary</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Foreign')}>Foreign</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Comedy')}>Comedy</a>
        </li>
        <li>
          <a onClick={() => props.genreFilter('Film-Noir')}>Film Noir</a>
        </li>
      </ul>
    </div>
  )
}

// return (<div>
//   <label htmlFor="genre">Choose a Genre:</label>
//   <select name="genre">
//     <option defaultValue="All" onClick={() => props.genreFilter('All')}>All</option>
//     <option value="Action/Adventure" onClick={() => props.genreFilter('Action/Adventure')}>Action/Adventure</option>
//     <option value="Horror" onClick={() => props.genreFilter('Horror')}>Horror</option>
//     <option value="Drama" onClick={() => props.genreFilter('Drama')}>Drama</option>
//     <option value="Fantasy" onClick={() => props.genreFilter('Fantasy')}>Fantasy</option>
//     <option value="Sci-Fi" onClick={() => props.genreFilter('Sci-Fi')}>Sci-Fi</option>
//     <option value="Animated" onClick={() => props.genreFilter('Animated')}>Animated</option>
//     <option value="Documentary" onClick={() => props.genreFilter('Documentary')}>Documentary</option>
//     <option value="Foreign" onClick={() => props.genreFilter('Foreign')}>Foreign</option>
//     <option value="Comedy" onClick={() => props.genreFilter('Comedy')}>Comedy</option>
//     <option value="Film-Noir" onClick={() => props.genreFilter('Film-Noir')}>Film-Noir</option>
// </select></div>)
// return <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     {props.genreTag}
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('All')}>All</Dropdown.Item>
//     <Dropdown.Item href="#/action-2" onClick={() => props.genreFilter('Action/Adventure')}>Action/Adventure</Dropdown.Item>
//     <Dropdown.Item href="#/action-3" onClick={() => props.genreFilter('Horror')}>Horror</Dropdown.Item>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('Drama')}>Drama</Dropdown.Item>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('Fantasy')}>Fantasy</Dropdown.Item>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('Sci-Fi')}>Sci-Fi</Dropdown.Item>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('Animated')}>Animated</Dropdown.Item>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('Documentary')}>Documentary</Dropdown.Item>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('Foreign')}>Foreign</Dropdown.Item>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('Comedy')}>Comedy</Dropdown.Item>
//     <Dropdown.Item href="#/action-1" onClick={() => props.genreFilter('Film-Noir')}>Film-Noir</Dropdown.Item>
//   </Dropdown.Menu>
//  </Dropdown>
