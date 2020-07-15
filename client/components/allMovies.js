import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Titles} from './Titles'
import Tags from './Tags'
import {GenreDropDown} from './genreDropDown'

import {Languages} from './Languages'
import {Sliders} from './Sliders'
import {Sort} from './Sort'
import {Services} from './Services'
import {Content} from './Content'
import {SearchResults} from './SearchResults'
import axios from 'axios'

// import Nouislider from 'nouislider-react'
// import css from "./nouislider.css";
export class AllMovies extends Component {
  // static whyDidYouRender = true
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
    this.tagClose = this.tagClose.bind(this)

    this.state = {
      dummyData: [],
      serviceTag: 'Every Service',
      genreTag: 'All',
      contentTag: 'Movies/TV',
      languageTag: 'All Languages',
      sortTag: 'Sort By Default',
      sortOrder: 'ascending'
    }
  }

  async componentDidMount() {
    let {data} = await axios.get('/api/titles')
    this.setState({dummyData: data})
    $(document).ready(function() {
      $('.dropdown-trigger').dropdown()
    })

    $(document).ready(function() {
      $('.fixed-action-btn').floatingActionButton()
    })

    $(document).ready(function() {
      $('.materialboxed').materialbox()
    })

    $(document).ready(function() {
      $('.chips').chips()
      $('.chips-initial').chips({
        data: [
          {
            tag: 'Apple'
          },
          {
            tag: 'Microsoft'
          },
          {
            tag: 'Google'
          }
        ]
      })
    })

    $(document).ready(function() {
      $('.chips-placeholder').chips({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag'
      })
    })

    $(document).ready(function() {
      $('.chips-autocomplete').chips({
        autocompleteOptions: {
          data: {
            Apple: null,
            Microsoft: null,
            Google: null
          },
          limit: Infinity,
          minLength: 1
        }
      })
    })
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

  async orderChangeFunc(string) {
    if (string !== this.state.sortTag) {
      await this.setState({sortOrder: 'ascending'})
    }
  }

  async filterFunc() {
    let {data} = await axios.get('/api/titles')
    let serviceFiltered = data.filter(movie => {
      return movie.whereWatch.includes(this.state.serviceTag)
    })
    await this.setState({dummyData: serviceFiltered})

    let contentFiltered = this.state.dummyData.filter(movie => {
      return movie.contentTag.includes(this.state.contentTag)
    })
    await this.setState({dummyData: contentFiltered})

    let genreFiltered = this.state.dummyData.filter(movie => {
      return movie.genreTag.includes(this.state.genreTag)
    })
    await this.setState({dummyData: genreFiltered})

    let languageFiltered = this.state.dummyData.filter(movie => {
      return movie.languages.includes(this.state.languageTag)
    })
    console.log('logging in filterFunc', languageFiltered)
    await this.setState({dummyData: languageFiltered})
  }

  async sortByIMDB() {
    await this.orderChangeFunc('Sort By IMDB Score')
    let sortOrder = this.state.sortOrder
    let sortedData
    if (sortOrder === 'ascending') {
      this.setState({sortOrder: 'descending'})
      sortedData = this.state.dummyData.sort(function(movie1, movie2) {
        return movie2.imdbScore - movie1.imdbScore
      })
    } else {
      this.setState({sortOrder: 'ascending'})
      sortedData = this.state.dummyData.sort(function(movie1, movie2) {
        return movie1.imdbScore - movie2.imdbScore
      })
    }
    this.setState({dummyData: sortedData, sortTag: 'Sort By IMDB Score'})
  }
  async sortByRT() {
    await this.orderChangeFunc('Sort By RT Score')
    let sortOrder = this.state.sortOrder
    let sortedData
    if (sortOrder === 'ascending') {
      this.setState({sortOrder: 'descending'})
      sortedData = this.state.dummyData.sort(function(movie1, movie2) {
        return movie2.rottenTomatoes - movie1.rottenTomatoes
      })
    } else {
      this.setState({sortOrder: 'ascending'})
      sortedData = this.state.dummyData.sort(function(movie1, movie2) {
        return movie1.rottenTomatoes - movie2.rottenTomatoes
      })
    }
    this.setState({dummyData: sortedData, sortTag: 'Sort By RT Score'})
  }

  async sortByPop() {
    await this.orderChangeFunc('Sort By Popularity')
    let sortOrder = this.state.sortOrder
    let sortedData
    if (sortOrder === 'ascending') {
      this.setState({sortOrder: 'descending'})
      sortedData = this.state.dummyData.sort(function(movie1, movie2) {
        return movie2.pop - movie1.pop
      })
    } else {
      this.setState({sortOrder: 'ascending'})
      sortedData = this.state.dummyData.sort(function(movie1, movie2) {
        return movie1.pop - movie2.pop
      })
    }

    this.setState({dummyData: sortedData, sortTag: 'Sort By Popularity'})
  }

  async sortByAlphabet() {
    await this.orderChangeFunc('Sort By Alphabet')
    let sortOrder = this.state.sortOrder
    let sortedData
    if (sortOrder === 'ascending') {
      this.setState({sortOrder: 'descending'})
      sortedData = this.state.dummyData.sort(function(a, b) {
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
    } else {
      this.setState({sortOrder: 'ascending'})
      sortedData = this.state.dummyData.sort(function(a, b) {
        var nameA = a.title.toUpperCase()
        var nameB = b.title.toUpperCase()
        if (nameA < nameB) {
          return 1
        }
        if (nameA > nameB) {
          return -1
        }
        return 0
      })
    }

    this.setState({dummyData: sortedData, sortTag: 'Sort By Alphabet'})
  }

  async languageSet(tag) {
    await this.setState({languageTag: tag})
    this.filterFunc()
  }
  tagClose(string) {
    if (string === 'genre') {
      this.genreFilter('All')
    }
    if (string === 'content') {
      this.contentFilter('Movies/TV')
    }
    if (string === 'service') {
      this.serviceFilter('Every Service')
    }
    if (string === 'language') {
      this.languageSet('All Languages')
    }
  }

  render() {
    console.log('log in allmovies', this.state.dummyData)
    return (
      <div className="container">
        {!this.props.showResults ? (
          <div>
            <p />
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
              tagClose={this.tagClose}
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
            <Titles dummyData={this.state.dummyData} />
          </div>
        ) : (
          <SearchResults results={this.props.results} />
        )}
      </div>
    )
  }
}
