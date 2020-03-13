import React, {Component} from 'react'
const dummyData = [
  {
    title: 'Good Will Hunting',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Good_Will_Hunting.png/220px-Good_Will_Hunting.png',
    imdbScore: 8.3,
    rottenTomatoes: 97,
    id: 1
  },
  {
    title: 'Grave of Fireflies',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    imdbScore: 8.5,
    rottenTomatoes: 98,
    id: 2
  },
  {
    title: 'A Quiet Place',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg',
    imdbScore: 7.5,
    rottenTomatoes: 95,
    id: 3
  },
  {
    title: 'Warrior',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Warrior_Poster.jpg/220px-Warrior_Poster.jpg',
    imdbScore: 8.2,
    rottenTomatoes: 83,
    id: 4
  },
  {
    title: 'The Fugitive',
    imgUrl:
      'https://image.tmdb.org/t/p/original/3gzLGFBoJM1xlNk0Ulzp0cJ6uPp.jpg',
    imdbScore: 7.8,
    rottenTomatoes: 96,
    id: 5
  },
  {
    title: '28 Days Later',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BZGQxOTFjNWQtMjQ0Yi00OWU1LWFlZmEtNGFhMmRlYjg3N2IzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    imdbScore: 7.6,
    rottenTomatoes: 86,
    id: 6
  },
  {
    title: 'Akira',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    imdbScore: 8.0,
    rottenTomatoes: 90,
    id: 7
  },
  {
    title: 'Big Fish',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Big_Fish_movie_poster.png/220px-Big_Fish_movie_poster.png',
    imdbScore: 8.0,
    rottenTomatoes: 75,
    id: 8
  },
  {
    title: 'Hunt for the Wilderpeople',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Hunt_for_the_Wilderpeople.png/220px-Hunt_for_the_Wilderpeople.png',
    imdbScore: 7.9,
    rottenTomatoes: 96,
    id: 9
  },
  {
    title: 'Free Solo',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Free_Solo.png',
    imdbScore: 8.2,
    rottenTomatoes: 97,
    id: 10
  },
  {
    title: 'When Harry Met Sally',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/WhenHarryMetSallyPoster.jpg/220px-WhenHarryMetSallyPoster.jpg',
    imdbScore: 7.6,
    rottenTomatoes: 90,
    id: 11
  },
  {
    title: 'I, Tonya',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_.jpg',
    imdbScore: 7.5,
    rottenTomatoes: 89,
    id: 12
  },
  {
    title: 'Captain Fantastic',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_.jpg',
    imdbScore: 7.9,
    rottenTomatoes: 82,
    id: 13
  },
  {
    title: 'Cabin in the Woods',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_.jpg',
    imdbScore: 7.0,
    rottenTomatoes: 91,
    id: 14
  },
  {
    title: 'Up in the Air',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI3MzYxMTA4NF5BMl5BanBnXkFtZTcwMDE4ODg3Mg@@._V1_.jpg',
    imdbScore: 7.4,
    rottenTomatoes: 91,
    id: 15
  }
]
export class AllMovies extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="flow-text">All Movies Component</h1>

        <div className="row left-align">
          <button className="btn waves-effect red darken-3 white-text col s2">
            <i className="material-icons right">arrow_drop_down</i>All
          </button>
          <button className="btn waves-effect red darken-3 white-text col s2">
            <i className="material-icons right">arrow_drop_down</i>Movies
          </button>
          <div className="valign-wrapper left-align col s1">
            <h5>On</h5>
          </div>
          {/* <select className="waves-effect red darken-3 white-text"><i className="material-icons right">arrow_drop_down</i>
            <option>Hulu</option>
            <option>Netflix</option>
            <option>Amazon Prime</option>
            </select> */}
          <button className="btn waves-effect red darken-3 white-text col s2">
            <i className="material-icons right">arrow_drop_down</i>Hulu
          </button>
        </div>
        <a
          className="dropdown-trigger btn right"
          href=""
          data-target="dropdown1"
        >
          <i className="material-icons right">arrow_drop_down</i>
          Sort by Default
        </a>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">Popularity</a>
          </li>
          <li>
            <a href="#!">Alphabetical</a>
          </li>
          <li>
            <a href="#!">IMDB Score</a>
          </li>
          <li>
            <a href="#!">Rotten Tomatoes Score</a>
          </li>
        </ul>
        <div className="right-align">
          <a className="dropdown-trigger btn waves-effect orange darken-3 white-text col s2 right-align">
            <i className="material-icons right">arrow_drop_down</i>
            Filter
          </a>
        </div>

        <div className="row">
          {dummyData.map(function(movie) {
            return (
              <div key={movie.id} className="col s12 m6 l3">
                <div className="card large">
                  <div className="card-image">
                    <img
                      src={movie.imgUrl}
                      className="responsive-img"
                      alt="something"
                    />
                  </div>
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
      </div>
    )
  }
}
