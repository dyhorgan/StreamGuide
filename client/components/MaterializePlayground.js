import React from 'react'
export const Playground = function() {
  return (
    <div className="container">
      <h1>COLORS</h1>
      <div className="red white-text lighten-3">Div with color class</div>
      <h1>BUTTONS</h1>
      <button className="btn waves-effect red darken-3 white-text">
        <i className="material-icons left">camera</i>Read More
      </button>
      <div className="fixed-action-btn">
        <a href="#" className="btn-floating btn-large red ">
          <i className="large material-icons">mode_edit</i>
        </a>
        <ul>
          <li>
            <a href="#" className="btn-floating green btn-large">
              <i className="large material-icons">format_quote</i>
            </a>
          </li>
          <li>
            <a href="#" className="btn-floating grey btn-large">
              <i className="large material-icons">publish</i>
            </a>
          </li>
          <li>
            <a href="#" className="btn-floating brown btn-large">
              <i className="large material-icons">attach_file</i>
            </a>
          </li>
        </ul>
      </div>
      <pre />
      <div className="red white-text hoverable">Hoverable content</div>
      <p className="z-depth-4">z-depth-4 shadow</p>
      <a className="dropdown-trigger btn" href="" data-target="dropdown1">
        Drop Me!
      </a>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li className="divider" tabIndex="-1" />
        <li>
          <a href="#!">three</a>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">view_module</i>four
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="material-icons">cloud</i>five
          </a>
        </li>
      </ul>
    </div>
  )
}
