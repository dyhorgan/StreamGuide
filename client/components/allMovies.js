import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Titles} from './Titles'
import Tags from './Tags'
import {GenreDropDown} from './genreDropDown'
import {dummyDataOriginal} from '../DummyDataOriginal'
import {Languages} from './Languages'
import {Sliders} from './Sliders'
import {Sort} from './Sort'
import {Services} from './Services'
import {Content} from './Content'

// import Nouislider from 'nouislider-react'
// import css from "./nouislider.css";
export class AllMovies extends Component {
  constructor() {
    super()
    this.genreFilter = this.genreFilter.bind(this)
    this.serviceFilter = this.serviceFilter.bind(this)
    this.sortByIMDB = this.sortByIMDB.bind(this)
    this.sortByPop = this.sortByPop.bind(this)
    this.sortByAlphabet = this.sortByAlphabet.bind(this)
    this.sortByRT = this.sortByRT.bind(this)
    this.contentFilter = this.contentFilter.bind(this)
    this.filterFunc = this.filterFunc.bind(this)
    this.languageSet = this.languageSet.bind(this)
    this.orderChangeFunc = this.orderChangeFunc.bind(this)
    this.state = {
      dummyData: dummyDataOriginal,
      serviceTag: 'Every Service',
      genreTag: 'All',
      contentTag: 'Movies/TV',
      languageTag: 'All Languages',
      sortTag: 'Sort By Default',
      sortOrder: 'ascending'
    }
  }

  async genreFilter(tag) {
    await this.setState({genreTag: tag})
    this.filterFunc()
  }

  async serviceFilter(tag) {
    await this.setState({serviceTag: tag})
    this.filterFunc()
  }
  async contentFilter(tag) {
    await this.setState({contentTag: tag})
    this.filterFunc()
  }

  async orderChangeFunc() {
    console.log('orderChangeFunc is firing')
    await this.setState({sortOrder: 'ascending'})
  }

  filterFunc() {
    let serviceFiltered = dummyDataOriginal.filter(movie => {
      return movie.whereWatch.includes(this.state.serviceTag)
    })
    this.setState({dummyData: serviceFiltered})

    let contentFiltered = this.state.dummyData.filter(movie => {
      return movie.contentTag.includes(this.state.contentTag)
    })
    this.setState({dummyData: contentFiltered})

    let genreFiltered = this.state.dummyData.filter(movie => {
      return movie.genreTag.includes(this.state.genreTag)
    })
    this.setState({dummyData: genreFiltered})

    let languageFiltered = this.state.dummyData.filter(movie => {
      return movie.languages.includes(this.state.languageTag)
    })
    this.setState({dummyData: languageFiltered})
    // }
  }

  sortByIMDB() {
    let sortOrder = this.state.sortOrder
    let sortedData

    if (sortOrder === 'ascending') {
      this.setState({sortOrder: 'descending'})
      sortedData = dummyDataOriginal.sort(function(movie1, movie2) {
        return movie2.imdbScore - movie1.imdbScore
      })
    } else {
      this.setState({sortOrder: 'ascending'})
      sortedData = dummyDataOriginal.sort(function(movie1, movie2) {
        return movie1.imdbScore - movie2.imdbScore
      })
    }
    this.setState({dummyData: sortedData, sortTag: 'Sort By IMDB Score'})
  }
  sortByRT() {
    let sortOrder = this.state.sortOrder
    let sortedData
    if (sortOrder === 'ascending') {
      this.setState({sortOrder: 'descending'})
      sortedData = dummyDataOriginal.sort(function(movie1, movie2) {
        return movie2.rottenTomatoes - movie1.rottenTomatoes
      })
    } else {
      this.setState({sortOrder: 'ascending'})
      sortedData = dummyDataOriginal.sort(function(movie1, movie2) {
        return movie1.rottenTomatoes - movie2.rottenTomatoes
      })
    }
    this.setState({dummyData: sortedData, sortTag: 'Sort By RT Score'})
  }

  sortByPop() {
    let sortOrder = this.state.sortOrder
    let sortedData = dummyDataOriginal.sort(function(movie1, movie2) {
      return movie2.pop - movie1.pop
    })
    this.setState({dummyData: sortedData, sortTag: 'Sort By Popularity'})
  }
  async languageSet(tag) {
    await this.setState({languageTag: tag})
    this.filterFunc()
  }

  sortByAlphabet() {
    let sortOrder = this.state.sortOrder
    let sortedData = dummyDataOriginal.sort(function(a, b) {
      var nameA = a.title.toUpperCase()
      var nameB = b.title.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    this.setState({dummyData: sortedData, sortTag: 'Sort By Alphabet'})
  }

  render() {
    let dummyData = this.state.dummyData

    return (
      <div className="container">
        <p />
        {/* <Nouislider range={{ min: 0, max: 100 }} start={[0, 100]}/> */}
        <div className="row left-align">
          {/* <button className="btn waves-effect red darken-3 white-text col s2">
            <i className="material-icons right">arrow_drop_down</i>All
          </button> */}
          <GenreDropDown
            genreFilter={this.genreFilter}
            genreTag={this.state.genreTag}
          />
          <Content
            contentTag={this.state.contentTag}
            contentFilter={this.contentFilter}
          />
          <div className="valign-wrapper left-align col s1">
            <h5>On</h5>
          </div>

          <Services
            serviceTag={this.state.serviceTag}
            serviceFilter={this.serviceFilter}
          />
        </div>
        <Tags
          genreTag={this.state.genreTag}
          contentTag={this.state.contentTag}
          serviceTag={this.state.serviceTag}
          languageTag={this.state.languageTag}
        />
        <div className="row right-align">
          <Sort
            sortByPop={this.sortByPop}
            sortByAlphabet={this.sortByAlphabet}
            sortByIMDB={this.sortByIMDB}
            sortByRT={this.sortByRT}
            sortTag={this.state.sortTag}
            orderChange={this.orderChangeFunc}
          />
          <Languages
            languageSet={this.languageSet}
            languageTag={this.state.languageTag}
          />
          <Sliders />
        </div>

        {/* <div className="right-align">
          <a className="dropdown-trigger btn waves-effect orange darken-3 white-text col s2 right-align">
            <i className="material-icons right">arrow_drop_down</i>
            Filter
          </a>
        </div> */}
        {/* {dummyData.length ? (
          <div className="row">
            {dummyData.map(function(movie) {
              return (
                <div key={movie.id} className="col s12 m6 l3">
                  <div className="card large">
                    <Link to={`/SingleMovie/${movie.id}`}>
                      <div className="card-image">
                        <img
                          src={movie.imgUrl}
                          className="responsive-img"
                          alt="something"
                        />
                        <span className="card-title outline">{movie.year}</span>
                      </div>
                    </Link>
                    <div className="card-panel hoverable">
                      <p>{movie.title}</p>
                      <p>IMDB Score: {movie.imdbScore}</p>
                      <p>Rotten Tomatoes: {movie.rottenTomatoes}%</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <h1>No Titles Meet Your Criteria</h1>
        )} */}
        <Titles dummyData={dummyData} />
        <ul className="pagination">
          <li className="disabled">
            <a href="#!">
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          <li className="active">
            <a href="#!">1</a>
          </li>
          <li className="waves-effect">
            <a href="#!">2</a>
          </li>
          <li className="waves-effect">
            <a href="#!">
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
