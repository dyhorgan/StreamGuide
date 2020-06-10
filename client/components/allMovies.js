import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Tags from './Tags'
import {GenreDropDown} from './genreDropDown'
import {dummyDataOriginal} from '../DummyDataOriginal'
import {Languages} from './Languages'

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
    this.contentFilter = this.contentFilter.bind(this)
    this.filterFunc = this.filterFunc.bind(this)
    this.languageSet = this.languageSet.bind(this)
    this.state = {
      dummyData: dummyDataOriginal,
      serviceFilt: 'Inactive',
      contentFilt: 'Inactive',
      genreFilt: 'Inactive',
      serviceTag: 'Every Service',
      genreTag: 'All',
      contentTag: 'Movies/TV',
      languageTag: 'All Languages'
    }
  }

  async genreFilter(tag) {
    await this.setState({genreTag: tag, genreFilt: 'Active'})
    this.filterFunc()
  }

  async serviceFilter(tag) {
    await this.setState({serviceTag: tag, serviceFilt: 'Active'})
    this.filterFunc()
  }
  async contentFilter(tag) {
    await this.setState({contentTag: tag, contentFilt: 'Active'})
    this.filterFunc()
  }

  filterFunc() {
    // let {serviceFilt, contentFilt, genreFilt} = this.state

    // if(serviceFilt === 'Active'){
    let serviceFiltered = dummyDataOriginal.filter(movie => {
      return movie.whereWatch.includes(this.state.serviceTag)
    })
    this.setState({dummyData: serviceFiltered})
    // }

    // if(contentFilt === 'Active'){
    let contentFiltered = this.state.dummyData.filter(movie => {
      return movie.contentTag.includes(this.state.contentTag)
    })
    this.setState({dummyData: contentFiltered})
    // }

    // if(genreFilt === 'Active'){
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
    let sortedData = dummyDataOriginal.sort(function(movie1, movie2) {
      return movie2.imdbScore - movie1.imdbScore
    })
    this.setState({dummyData: sortedData})
  }
  sortByRT() {
    let sortedData = dummyDataOriginal.sort(function(movie1, movie2) {
      return movie2.rottenTomatoes - movie1.rottenTomatoes
    })
    this.setState({dummyData: sortedData})
  }

  sortByPop() {
    let sortedData = dummyDataOriginal.sort(function(movie1, movie2) {
      return movie2.pop - movie1.pop
    })
    this.setState({dummyData: sortedData})
  }
  async languageSet(tag) {
    await this.setState({languageTag: tag})
    this.filterFunc()
  }

  sortByAlphabet() {
    // let sortedData = this.state.dummyData.sort(function(movie1, movie2){
    //   return movie2.title - movie1.title
    // })
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
    this.setState({dummyData: sortedData})
  }

  render() {
    let dummyData = this.state.dummyData
    console.log('logging language in allMovies', this.state.languageTag)
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
          <a
            className="dropdown-trigger btn red darken-3 col s2"
            href=""
            data-target="dropdown2"
          >
            <i className="material-icons right">arrow_drop_down</i>
            {this.state.contentTag}
          </a>
          <ul id="dropdown2" className="dropdown-content">
            <li onClick={() => this.contentFilter('Movies/TV')}>
              <a href="#!">Movies and TV Shows</a>
            </li>
            <li onClick={() => this.contentFilter('Movies')}>
              <a href="#!">Movies</a>
            </li>
            <li onClick={() => this.contentFilter('TV Shows')}>
              <a href="#!">TV Shows</a>
            </li>
          </ul>
          <div className="valign-wrapper left-align col s1">
            <h5>On</h5>
          </div>

          <a
            className="dropdown-trigger btn red darken-3 col s2 dropdownWidth"
            href=""
            data-target="dropdown3"
          >
            <i className="material-icons right">arrow_drop_down</i>
            {this.state.serviceTag}
          </a>
          <ul id="dropdown3" className="dropdown-content">
            <li onClick={() => this.serviceFilter('Netflix')}>
              <a href="#!">Netflix</a>
            </li>
            <li onClick={() => this.serviceFilter('Hulu')}>
              <a href="#!">Hulu</a>
            </li>
            <li onClick={() => this.serviceFilter('Amazon')}>
              <a href="#!">Amazon Prime</a>
            </li>
            <li onClick={() => this.serviceFilter('Every Service')}>
              <a href="#!">Every Service</a>
            </li>
          </ul>
        </div>
        <Tags
          genreTag={this.state.genreTag}
          contentTag={this.state.contentTag}
          serviceTag={this.state.serviceTag}
          languageTag={this.state.languageTag}
        />
        <div className="row right-align">
          <a
            className="dropdown-trigger btn right"
            href=""
            data-target="dropdown1"
          >
            <i className="material-icons right">arrow_drop_down</i>
            Sort by Default
          </a>
          <ul id="dropdown1" className="dropdown-content">
            <li onClick={() => this.sortByPop()}>
              <a href="#!">Popularity</a>
            </li>
            <li onClick={() => this.sortByAlphabet()}>
              <a href="#!">Alphabetical</a>
            </li>
            <li onClick={() => this.sortByIMDB()}>
              <a href="#!">IMDB Score</a>
            </li>
            <li onClick={() => this.sortByRT()}>
              <a href="#!">Rotten Tomatoes Score</a>
            </li>
          </ul>
          <Languages
            languageSet={this.languageSet}
            languageTag={this.state.languageTag}
          />
          <a
            className="dropdown-trigger btn right red darken-3 col s2 flow-text"
            href=""
            data-target="dropdown5"
          >
            <i className="material-icons right">arrow_drop_down</i>
            Filters
          </a>
          <ul id="dropdown5" className="dropdown-content">
            <li>
              <a href="#!">Release Year</a>
              {/* <div id="test-slider"></div> */}
              <form action="#">
                <p className="range-field">
                  1900
                  <input type="range" id="test5" min="1900" max="2020" />
                  2020
                </p>
              </form>
            </li>
            <li>
              <a href="#!">IMDB Score</a>
              {/* <div id="test-slider"></div> */}
              <form action="#">
                <p className="range-field">
                  0
                  <input type="range" id="test5" min="0" max="100" />
                  10
                </p>
              </form>
            </li>
            <li>
              <a href="#!">Rotten Tomatoes Score</a>
              {/* <div id="test-slider"></div> */}
              <form action="#">
                <p className="range-field">
                  0%
                  <input type="range" id="test5" min="0" max="100" />
                  100%
                </p>
              </form>
            </li>
            <li>
              <a href="#!"># of IMDB Votes</a>
              {/* <div id="test-slider"></div> */}
              <form action="#">
                <p className="range-field">
                  {/* <div className="left"> */}
                  0
                  {/* </div> */}
                  <input
                    type="range"
                    id="test5"
                    min="0"
                    max="100"

                    // value="0"
                  />
                  {/* <div className="right"> */}
                  2 Mil.
                  {/* </div> */}
                </p>
              </form>
            </li>
          </ul>
        </div>

        {/* <div className="right-align">
          <a className="dropdown-trigger btn waves-effect orange darken-3 white-text col s2 right-align">
            <i className="material-icons right">arrow_drop_down</i>
            Filter
          </a>
        </div> */}
        {dummyData.length ? (
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
                        <span className="card-title">{movie.year}</span>
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
        )}
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
