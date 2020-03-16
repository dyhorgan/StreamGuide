import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Nouislider from 'nouislider-react'
// import css from "./nouislider.css";

export let dummyDataOriginal = [
  {
    title: 'Good Will Hunting',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Good_Will_Hunting.png/220px-Good_Will_Hunting.png',
    imdbScore: 8.3,
    rottenTomatoes: 97,
    year: 1997,
    genreTag: ['All', 'Drama'],
    whereWatch: ['All', 'Hulu'],
    pop: 807512,
    contentTag: ['All', 'Movie'],
    id: 1
  },
  {
    title: 'Grave of Fireflies',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    imdbScore: 8.5,
    rottenTomatoes: 98,
    year: 1993,
    genreTag: ['All', 'Foreign', 'Animated', 'Drama'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 212776,
    id: 2
  },
  {
    title: 'A Quiet Place',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg',
    imdbScore: 7.5,
    rottenTomatoes: 95,
    year: 2018,
    genreTag: ['All', 'Horror', 'Sci-Fi'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 360354,
    id: 3
  },
  {
    title: 'Warrior',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Warrior_Poster.jpg/220px-Warrior_Poster.jpg',
    imdbScore: 8.2,
    rottenTomatoes: 83,
    year: 2011,
    genreTag: ['Action/Adventure', 'All', 'Drama'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 416851,
    id: 4
  },
  {
    title: 'The Fugitive',
    imgUrl:
      'https://image.tmdb.org/t/p/original/3gzLGFBoJM1xlNk0Ulzp0cJ6uPp.jpg',
    imdbScore: 7.8,
    rottenTomatoes: 96,
    year: 1993,
    genreTag: ['Action/Adventure', 'All'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 254515,
    id: 5
  },
  {
    title: '28 Days Later',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BZGQxOTFjNWQtMjQ0Yi00OWU1LWFlZmEtNGFhMmRlYjg3N2IzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    imdbScore: 7.6,
    rottenTomatoes: 86,
    year: 2003,
    genreTag: ['All', 'Horror', 'Foreign'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 357690,
    id: 6
  },
  {
    title: 'Akira',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    imdbScore: 8.0,
    rottenTomatoes: 90,
    year: 1988,
    genreTag: ['Action/Adventure', 'All', 'Sci-Fi', 'Foreign', 'Animated'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 151885,
    id: 7
  },
  {
    title: 'Big Fish',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Big_Fish_movie_poster.png/220px-Big_Fish_movie_poster.png',
    imdbScore: 8.0,
    rottenTomatoes: 75,
    year: 2003,
    genreTag: ['All', 'Fantasy'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 399939,
    id: 8
  },
  {
    title: 'Hunt for the Wilderpeople',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Hunt_for_the_Wilderpeople.png/220px-Hunt_for_the_Wilderpeople.png',
    imdbScore: 7.9,
    rottenTomatoes: 96,
    year: 2016,
    genreTag: ['All', 'Comedy', 'Foreign', 'Drama'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 96852,
    id: 9
  },
  {
    title: 'Free Solo',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Free_Solo.png',
    imdbScore: 8.2,
    rottenTomatoes: 97,
    year: 2018,
    genreTag: ['All', 'Documentary'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 44775,
    id: 10
  },
  {
    title: 'When Harry Met Sally',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/WhenHarryMetSallyPoster.jpg/220px-WhenHarryMetSallyPoster.jpg',
    imdbScore: 7.6,
    rottenTomatoes: 90,
    year: 1989,
    genreTag: ['All', 'Comedy'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 184812,
    id: 11
  },
  {
    title: 'I, Tonya',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_.jpg',
    imdbScore: 7.5,
    rottenTomatoes: 89,
    year: 2017,
    genreTag: ['All', 'Comedy', 'Drama'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 161340,
    id: 12
  },
  {
    title: 'Captain Fantastic',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_.jpg',
    imdbScore: 7.9,
    rottenTomatoes: 82,
    year: 2016,
    genreTag: ['All', 'Drama'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 171785,
    id: 13
  },
  {
    title: 'Cabin in the Woods',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_.jpg',
    imdbScore: 7.0,
    rottenTomatoes: 91,
    year: 2011,
    genreTag: ['All', 'Horror', 'Sci-Fi'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 354545,
    id: 14
  },
  {
    title: 'Up in the Air',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI3MzYxMTA4NF5BMl5BanBnXkFtZTcwMDE4ODg3Mg@@._V1_.jpg',
    imdbScore: 7.4,
    rottenTomatoes: 91,
    year: 2009,
    genreTag: ['All', 'Drama'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 308449,
    id: 15
  },
  {
    title: 'Booksmart',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjEzMjcxNjA2Nl5BMl5BanBnXkFtZTgwMjAxMDM2NzM@._V1_.jpg',
    imdbScore: 7.2,
    rottenTomatoes: 97,
    year: 2019,
    genreTag: ['All', 'Comedy'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'Movie'],
    pop: 68378,
    id: 16
  },
  {
    title: 'The Dark Knight',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    imdbScore: 9.0,
    rottenTomatoes: 94,
    year: 2008,
    genreTag: ['All', 'Action/Adventure'],
    whereWatch: ['All', 'Netflix'],
    contentTag: ['All', 'Movie'],
    pop: 2181203,
    id: 17
  },
  {
    title: 'The Avengers',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    imdbScore: 8.0,
    rottenTomatoes: 92,
    year: 2012,
    genreTag: ['All', 'Action/Adventure', 'Sci-Fi'],
    whereWatch: ['All', 'Amazon'],
    pop: 1220552,
    contentTag: ['All', 'Movie'],
    id: 18
  },
  {
    title: 'Breaking Bad',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    imdbScore: 9.5,
    rottenTomatoes: 96,
    year: 2008,
    genreTag: ['All', 'Drama'],
    whereWatch: ['All', 'Netflix'],
    contentTag: ['All', 'TV'],
    pop: 1317725,
    id: 19
  },
  {
    title: 'Terriers',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNzg0NDQ0MTcwM15BMl5BanBnXkFtZTcwNTQwNDk3Mw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    imdbScore: 8.4,
    rottenTomatoes: 92,
    year: 2010,
    genreTag: ['All', 'Comedy', 'Drama'],
    whereWatch: ['All', 'Hulu'],
    contentTag: ['All', 'TV'],
    pop: 9907,
    id: 20
  }
]
export class AllMovies extends Component {
  constructor() {
    super()
    this.genreFilter = this.genreFilter.bind(this)
    this.serviceFilter = this.serviceFilter.bind(this)
    this.sortByIMDB = this.sortByIMDB.bind(this)
    this.sortByPop = this.sortByPop.bind(this)
    this.sortByAlphabet = this.sortByAlphabet.bind(this)
    this.contentFilter = this.contentFilter.bind(this)
    this.state = {
      dummyData: dummyDataOriginal,
      service: 'All',
      content: 'Movies/TV',
      genre: 'All'
    }
  }

  genreFilter(tag) {
    // let data = this.state.dummyData
    let filteredData = dummyDataOriginal.filter(function(movie) {
      return movie.genreTag.includes(tag)
    })

    if (tag === 'Action/Adventure') {
      tag = 'Action'
    }
    this.setState({dummyData: filteredData, genre: tag})
  }

  serviceFilter(tag) {
    let filteredData = this.state.dummyData.filter(function(movie) {
      return movie.whereWatch.includes(tag)
    })

    this.setState({dummyData: filteredData, service: tag})
  }
  contentFilter(tag) {
    let filteredData = this.state.dummyData.filter(function(movie) {
      return movie.contentTag.includes(tag)
    })
    if (tag === 'All') {
      tag = 'Movies/TV'
    } else if (tag === 'Movie') {
      tag = 'Movies'
    } else if (tag === 'TV') {
      tag = 'TV Shows'
    }
    this.setState({dummyData: filteredData, content: tag})
  }

  sortByIMDB() {
    let sortedData = this.state.dummyData.sort(function(movie1, movie2) {
      return movie2.imdbScore - movie1.imdbScore
    })
    this.setState({dummyData: sortedData})
  }
  sortByRT() {
    let sortedData = this.state.dummyData.sort(function(movie1, movie2) {
      return movie2.rottenTomatoes - movie1.rottenTomatoes
    })
    this.setState({dummyData: sortedData})
  }

  sortByPop() {
    let sortedData = this.state.dummyData.sort(function(movie1, movie2) {
      return movie2.pop - movie1.pop
    })
    this.setState({dummyData: sortedData})
  }

  sortByAlphabet() {
    // let sortedData = this.state.dummyData.sort(function(movie1, movie2){
    //   return movie2.title - movie1.title
    // })
    let sortedData = this.state.dummyData.sort(function(a, b) {
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

    return (
      <div className="container">
        <h1 className="flow-text">All Movies Component</h1>

        {/* <Nouislider range={{ min: 0, max: 100 }} start={[0, 100]}/> */}
        <div className="row left-align">
          {/* <button className="btn waves-effect red darken-3 white-text col s2">
            <i className="material-icons right">arrow_drop_down</i>All
          </button> */}
          <a
            className="dropdown-trigger btn red darken-3 col s2"
            href=""
            data-target="dropdown4"
          >
            <i className="material-icons right">arrow_drop_down</i>
            {this.state.genre}
          </a>
          <ul id="dropdown4" className="dropdown-content">
            <li onClick={() => this.genreFilter('All')}>
              <a href="#!">All</a>
            </li>
            <li onClick={() => this.genreFilter('Action/Adventure')}>
              <a href="#!">Action/Adventure</a>
            </li>
            <li onClick={() => this.genreFilter('Horror')}>
              <a href="#!">Horror</a>
            </li>
            <li onClick={() => this.genreFilter('Drama')}>
              <a href="#!">Drama</a>
            </li>
            <li onClick={() => this.genreFilter('Fantasy')}>
              <a href="#!">Fantasy</a>
            </li>
            <li onClick={() => this.genreFilter('Sci-Fi')}>
              <a href="#!">Sci-Fi</a>
            </li>
            <li onClick={() => this.genreFilter('Animated')}>
              <a href="#!">Animated</a>
            </li>
            <li onClick={() => this.genreFilter('Documentary')}>
              <a href="#!">Documentary</a>
            </li>
            <li onClick={() => this.genreFilter('Foreign')}>
              <a href="#!">Foreign</a>
            </li>
            <li onClick={() => this.genreFilter('Comedy')}>
              <a href="#!">Comedy</a>
            </li>
            <li onClick={() => this.genreFilter('Film-Noir')}>
              <a href="#!">Film Noir</a>
            </li>
          </ul>
          <a
            className="dropdown-trigger btn red darken-3 col s2"
            href=""
            data-target="dropdown2"
          >
            <i className="material-icons right">arrow_drop_down</i>
            {this.state.content}
          </a>
          <ul id="dropdown2" className="dropdown-content">
            <li onClick={() => this.contentFilter('All')}>
              <a href="#!">Movies and TV Shows</a>
            </li>
            <li onClick={() => this.contentFilter('Movie')}>
              <a href="#!">Movies</a>
            </li>
            <li onClick={() => this.contentFilter('TV')}>
              <a href="#!">TV Shows</a>
            </li>
          </ul>
          <div className="valign-wrapper left-align col s1">
            <h5>On</h5>
          </div>

          <a
            className="dropdown-trigger btn red darken-3 col s2"
            href=""
            data-target="dropdown3"
          >
            <i className="material-icons right">arrow_drop_down</i>
            {this.state.service}
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
            <li onClick={() => this.serviceFilter('All')}>
              <a href="#!">Every Service</a>
            </li>
          </ul>
        </div>
        <div className="row left-align">
          <div className="chip">
            Tag
            <i className="close material-icons">close</i>
          </div>
        </div>
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
                  <div className="left">0</div>
                  <input
                    type="range"
                    id="test5"
                    min="0"
                    max="100"

                    // value="0"
                  />
                  <div className="right">2 Mil.</div>
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
