import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {dummyDataOriginal} from '../DummyDataOriginal'

export class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
      singleMovieId: 1
    }
    this.submitFunc = this.submitFunc.bind(this)
    this.onChangeFunc = this.onChangeFunc.bind(this)
    this.keyPressed = this.keyPressed.bind(this)
  }

  onChangeFunc(event) {
    console.log('firing onChange')
    this.setState({searchInput: event.target.value})
  }
  async submitFunc() {
    let title = dummyDataOriginal.find(element => {
      return (
        element.title.toUpperCase() === this.state.searchInput.toUpperCase()
      )
    })
    if (!title) {
      console.log('title doesnt exist')
      await this.props.showResultsFunc(this.state.searchInput)
    } else {
      await this.setState({singleMovieId: title.id})
      location.href = `/SingleMovie/${this.state.singleMovieId}`
    }
  }

  keyPressed(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.submitFunc(event)
    }
  }

  render() {
    return (
      <div className="nav-wrapper">
        <form className="right">
          <div className="input-field">
            <input
              id="search"
              type="search"
              name="searchInput"
              onChange={evt => this.onChangeFunc(evt)}
              onKeyPress={this.keyPressed}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons" onClick={this.submitFunc}>
                search
              </i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    )
  }
}
