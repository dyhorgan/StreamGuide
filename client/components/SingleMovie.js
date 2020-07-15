import React, {Component} from 'react'

import axios from 'axios'

export class SingleMovie extends Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      found: {}
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id
    let {data} = await axios.get('/api/titles')
    const found = data.find(element => Number(element.id) === Number(id))
    this.setState({id, found})
    $(document).ready(function() {
      $('.materialboxed').materialbox()
    })
  }

  render() {
    const found = this.state.found
    if (!found.whereWatch) {
      found.whereWatch = []
    }
    let services = found.whereWatch.filter(function(element) {
      return element !== 'Every Service'
    })
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
            <span id="styleSpacing" />
            {found.imdbScore}
          </p>
          <p className="flexRow valign-wrapper center-align">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png"
              className="logoStyle"
            />
            <span id="styleSpacing" />
            <span>{found.rottenTomatoes}%</span>
          </p>
        </div>
        <h4>
          Where to Watch {found.title}:{' '}
          {services.map(function(element, index) {
            if (index !== services.length - 1) {
              return element + ', '
            } else if (element !== 'Every Service') {
              return element
            }
          })}
        </h4>
      </div>
    )
  }
}
