import React, {Component} from 'react'
// import IMDB from './icons8-imdb-48.png'
const dummyData = [
  {
    title: 'Good Will Hunting',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Good_Will_Hunting.png/220px-Good_Will_Hunting.png',
    imdbScore: 8.3,
    rottenTomatoes: 97,
    year: 1997,
    whereWatch: 'Hulu',
    id: 1
  },
  {
    title: 'Grave of Fireflies',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    imdbScore: 8.5,
    rottenTomatoes: 98,
    year: 1993,
    whereWatch: 'Hulu',
    id: 2
  },
  {
    title: 'A Quiet Place',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg',
    imdbScore: 7.5,
    rottenTomatoes: 95,
    year: 2018,
    whereWatch: 'Hulu',
    id: 3
  },
  {
    title: 'Warrior',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Warrior_Poster.jpg/220px-Warrior_Poster.jpg',
    imdbScore: 8.2,
    rottenTomatoes: 83,
    year: 2011,
    whereWatch: 'Hulu',
    id: 4
  },
  {
    title: 'The Fugitive',
    imgUrl:
      'https://image.tmdb.org/t/p/original/3gzLGFBoJM1xlNk0Ulzp0cJ6uPp.jpg',
    imdbScore: 7.8,
    rottenTomatoes: 96,
    year: 1993,
    whereWatch: 'Hulu',
    id: 5
  },
  {
    title: '28 Days Later',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BZGQxOTFjNWQtMjQ0Yi00OWU1LWFlZmEtNGFhMmRlYjg3N2IzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    imdbScore: 7.6,
    rottenTomatoes: 86,
    year: 2003,
    whereWatch: 'Hulu',
    id: 6
  },
  {
    title: 'Akira',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    imdbScore: 8.0,
    rottenTomatoes: 90,
    year: 1988,
    whereWatch: 'Hulu',
    id: 7
  },
  {
    title: 'Big Fish',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Big_Fish_movie_poster.png/220px-Big_Fish_movie_poster.png',
    imdbScore: 8.0,
    rottenTomatoes: 75,
    year: 2003,
    whereWatch: 'Hulu',
    id: 8
  },
  {
    title: 'Hunt for the Wilderpeople',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Hunt_for_the_Wilderpeople.png/220px-Hunt_for_the_Wilderpeople.png',
    imdbScore: 7.9,
    rottenTomatoes: 96,
    year: 2016,
    whereWatch: 'Hulu',
    id: 9
  },
  {
    title: 'Free Solo',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Free_Solo.png',
    imdbScore: 8.2,
    rottenTomatoes: 97,
    year: 2018,
    whereWatch: 'Hulu',
    id: 10
  },
  {
    title: 'When Harry Met Sally',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/WhenHarryMetSallyPoster.jpg/220px-WhenHarryMetSallyPoster.jpg',
    imdbScore: 7.6,
    rottenTomatoes: 90,
    year: 1989,
    whereWatch: 'Hulu',
    id: 11
  },
  {
    title: 'I, Tonya',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_.jpg',
    imdbScore: 7.5,
    rottenTomatoes: 89,
    year: 2017,
    whereWatch: 'Hulu',
    id: 12
  },
  {
    title: 'Captain Fantastic',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_.jpg',
    imdbScore: 7.9,
    rottenTomatoes: 82,
    year: 2016,
    whereWatch: 'Hulu',
    id: 13
  },
  {
    title: 'Cabin in the Woods',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_.jpg',
    imdbScore: 7.0,
    rottenTomatoes: 91,
    year: 2011,
    whereWatch: 'Hulu',
    id: 14
  },
  {
    title: 'Up in the Air',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTI3MzYxMTA4NF5BMl5BanBnXkFtZTcwMDE4ODg3Mg@@._V1_.jpg',
    imdbScore: 7.4,
    rottenTomatoes: 91,
    year: 2009,
    whereWatch: 'Hulu',
    id: 15
  },
  {
    title: 'Booksmart',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMjEzMjcxNjA2Nl5BMl5BanBnXkFtZTgwMjAxMDM2NzM@._V1_.jpg',
    imdbScore: 7.2,
    rottenTomatoes: 97,
    year: 2019,
    tag: ['All', 'Comedy'],
    whereWatch: 'Hulu',
    id: 16
  }
]
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
    console.log('logging found', this.state.found)
    console.log('logging id', this.state.id)
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
