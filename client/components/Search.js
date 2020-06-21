import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {dummyDataOriginal} from '../DummyDataOriginal'

// const capitalizeFunc = function(string) {
//     let theString = ''
//     for (let i = 0; i < string.length; i++) {
//       theString += string[i].toUpperCase()
//     }
//     return theString
//   }

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
    this.setState({searchInput: event.target.value})
  }
  async submitFunc() {
    // const {history} = this.props
    let title = dummyDataOriginal.find(element => {
      return (
        element.title.toUpperCase() === this.state.searchInput.toUpperCase()
      )
    })

    await this.setState({singleMovieId: title.id})
    //  console.log('logging history in submitFunc', history)
    //  this.props.history.push(`/SingleMovie/${this.state.singleMovieId}`)
    location.href = `/SingleMovie/${this.state.singleMovieId}`
  }

  keyPressed(event) {
    event.preventDefault()
    if (event.key === 'Enter') {
      this.submitFunc(event)
    }
  }

  render() {
    return (
      <div className="nav-wrapper">
        {/* <form className="right" onSubmit={this.submitFunc}>
          <div className="input-field">
             <input id="search" type="text" name="searchInput" onChange={this.onChangeFunc} required />
            <label className="label-icon" htmlFor="search">
           
              <Link to={`/SingleMovie/${this.state.singleMovieId}`}>
                <i className="material-icons" onClick={this.submitFunc} >search</i>
              </Link>
            </label>
             <i className="material-icons">close</i>
          </div>
        </form> */}
        <form className="right">
          <div className="input-field">
            <input
              id="search"
              type="search"
              name="searchInput"
              onChange={this.onChangeFunc}
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
