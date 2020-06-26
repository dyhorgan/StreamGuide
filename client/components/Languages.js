import React from 'react'

export const Languages = props => {
  return (
    <div>
      <a
        className="dropdown-trigger btn right red darken-3 col s2 flow-text dropdownWidth"
        href=""
        data-target="dropdown6"
      >
        <i className="material-icons right">arrow_drop_down</i>
        {props.languageTag}
      </a>
      <ul id="dropdown6" className="dropdown-content">
        <li onClick={() => props.languageSet('All Languages')}>
          <a>All Languages</a>
        </li>
        <li onClick={() => props.languageSet('English')}>
          <a>English</a>
        </li>
        <li onClick={() => props.languageSet('Spanish')}>
          <a>Spanish</a>
        </li>
        <li onClick={() => props.languageSet('Italian')}>
          <a>Italian</a>
        </li>
        <li onClick={() => props.languageSet('German')}>
          <a>German</a>
        </li>
        <li onClick={() => props.languageSet('Japanese')}>
          <a>Japanese</a>
        </li>
        <li onClick={() => props.languageSet('Korean')}>
          <a>Korean</a>
        </li>
        <li onClick={() => props.languageSet('Arabic')}>
          <a>Arabic</a>
        </li>
        <li onClick={() => props.languageSet('Russian')}>
          <a>Russian</a>
        </li>
        <li onClick={() => props.languageSet('Thai')}>
          <a>Thai</a>
        </li>
        <li onClick={() => props.languageSet('Hindi')}>
          <a>Hindi</a>
        </li>
      </ul>
    </div>
  )
}
