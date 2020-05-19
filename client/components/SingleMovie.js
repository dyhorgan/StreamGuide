import React, {Component} from 'react'
// import IMDB from './icons8-imdb-48.png'
import {dummyDataOriginal} from '../DummyDataOriginal'

let dummyData = dummyDataOriginal
export class SingleMovie extends Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      found: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const found = dummyData.find(element => Number(element.id) === Number(id))
    this.setState({id, found})
  }

  render() {
    const found = this.state.found
    return (
      <div className="container center-align">
        <h2>{found.title}</h2>
        <h5>{found.year}</h5>

        <img
          src={found.imgUrl}
          className="singleStyle materialboxed"
          alt="something"
        />
        <div className="center-align">
          <p className="flexRow valign-wrapper center-align">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              className="logoStyle"
            />
            <p id="styleSpacing" />
            {found.imdbScore}
          </p>
          <p className="flexRow valign-wrapper center-align">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png"
              className="logoStyle"
            />
            <p id="styleSpacing" />
            <p>{found.rottenTomatoes}%</p>
          </p>
        </div>
        <h4>
          Where to Watch {found.title}: {found.whereWatch}
        </h4>
      </div>
    )
  }
}
