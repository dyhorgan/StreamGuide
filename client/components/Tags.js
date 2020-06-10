import React from 'react'

// eslint-disable-next-line react/display-name
export default props => {
  return (
    <div className="row left-align">
      <div className="chip">
        {props.genreTag}
        <i className="close material-icons">close</i>
      </div>
      <div className="chip">
        {props.contentTag}
        <i className="close material-icons">close</i>
      </div>
      <div className="chip">
        {props.serviceTag}
        <i className="close material-icons">close</i>
      </div>
      <div className="chip">
        {props.languageTag}
        <i className="close material-icons">close</i>
      </div>
      <div className="chip">
        Tag
        <i className="close material-icons">close</i>
      </div>
    </div>
  )
}
