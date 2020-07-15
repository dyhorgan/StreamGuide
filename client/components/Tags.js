import React from 'react'

// eslint-disable-next-line react/display-name
export default class extends React.Component {
  constructor() {
    super()
    this.state = {genre: false, content: false, service: false, language: false}
  }
  render() {
    return (
      <div className="row left-align">
        {this.props.genreTag !== 'All' ? (
          <div className="chip">
            {this.props.genreTag}
            <i
              className="close material-icons"
              onClick={() => this.props.tagClose('genre')}
            >
              close
            </i>
          </div>
        ) : (
          <div />
        )}
        {this.props.contentTag !== 'Movies/TV' ? (
          <div className="chip">
            {this.props.contentTag}
            <i
              className="close material-icons"
              onClick={() => this.props.tagClose('content')}
            >
              close
            </i>
          </div>
        ) : (
          <div />
        )}
        {this.props.serviceTag !== 'Every Service' ? (
          <div className="chip">
            {this.props.serviceTag}
            <i
              className="close material-icons"
              onClick={() => this.props.tagClose('service')}
            >
              close
            </i>
          </div>
        ) : (
          <div />
        )}
        {this.props.languageTag !== 'All Languages' ? (
          <div className="chip">
            {this.props.languageTag}
            <i
              className="close material-icons"
              onClick={() => this.props.tagClose('language')}
            >
              close
            </i>
          </div>
        ) : (
          <div />
        )}
      </div>
    )
  }
}
