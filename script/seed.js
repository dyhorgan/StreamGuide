'use strict'

const db = require('../server/db')
const {User, Title} = require('../server/db/models')

const dummyData = [
  {
    title: 'Good Will Hunting',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Good_Will_Hunting.png/220px-Good_Will_Hunting.png',
    imdbScore: 8.3,
    rottenTomatoes: 97,
    year: 1997,
    genreTag: ['All', 'Drama'],
    whereWatch: ['Every Service', 'Hulu'],
    pop: 807512,
    contentTag: ['Movies/TV', 'Movies'],
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 212776,
    languages: ['All Languages', 'Japanese'],
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
    whereWatch: ['Every Service', 'Hulu', 'Amazon'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 360354,
    languages: ['All Languages', 'English'],
    id: 3
  },
  {
    title: 'Warrior',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Warrior_Poster.jpg/220px-Warrior_Poster.jpg',
    imdbScore: 8.2,
    rottenTomatoes: 83,
    year: 2011,
    genreTag: ['Action', 'All', 'Drama'],
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 416851,
    languages: ['All Languages', 'English'],
    id: 4
  },
  {
    title: 'The Fugitive',
    imgUrl:
      'https://img.reelgood.com/content/movie/86ad81c1-44d7-4f21-9670-d622e983010b/poster-780.webp',
    imdbScore: 7.8,
    rottenTomatoes: 96,
    year: 1993,
    genreTag: ['Action', 'All'],
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 254515,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 357690,
    languages: ['All Languages', 'English'],
    id: 6
  },
  {
    title: 'Akira',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    imdbScore: 8.0,
    rottenTomatoes: 90,
    year: 1988,
    genreTag: ['Action', 'All', 'Sci-Fi', 'Foreign', 'Animated'],
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 151885,
    languages: ['All Languages', 'Japanese'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 399939,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 96852,
    languages: ['All Languages', 'English'],
    id: 9
  },
  {
    title: 'Free Solo',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Free_Solo.png',
    imdbScore: 8.2,
    rottenTomatoes: 97,
    year: 2018,
    genreTag: ['All', 'Documentary'],
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 44775,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 184812,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 161340,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 171785,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 354545,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 308449,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 68378,
    languages: ['All Languages', 'English'],
    id: 16
  },
  {
    title: 'The Dark Knight',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    imdbScore: 9.0,
    rottenTomatoes: 94,
    year: 2008,
    genreTag: ['All', 'Action'],
    whereWatch: ['Every Service', 'Netflix'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 2181203,
    languages: ['All Languages', 'English'],
    id: 17
  },
  {
    title: 'The Avengers',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    imdbScore: 8.0,
    rottenTomatoes: 92,
    year: 2012,
    genreTag: ['All', 'Action', 'Sci-Fi'],
    whereWatch: ['Every Service', 'Amazon'],
    pop: 1220552,
    contentTag: ['Movies/TV', 'Movies'],
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Netflix'],
    contentTag: ['Movies/TV', 'TV Shows'],
    pop: 1317725,
    languages: ['All Languages', 'English'],
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
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'TV Shows'],
    pop: 9907,
    languages: ['All Languages', 'English'],
    id: 20
  },
  {
    title: 'Rick and Morty',
    imgUrl:
      'https://i.pinimg.com/originals/3e/f2/cb/3ef2cb37b337beb4e2743e21458b9d86.jpg',
    imdbScore: 9.2,
    rottenTomatoes: 94,
    year: 2013,
    genreTag: ['All', 'Comedy', 'Sci-Fi'],
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'TV Shows'],
    pop: 337380,
    languages: ['All Languages', 'English'],
    id: 21
  },
  {
    title: 'Fargo',
    imgUrl:
      'https://m.media-amazon.com/images/M/MV5BNTUyYjZiOTQtY2VhZC00MzdhLWJlNzctZjQyYjk1ZTZmOTZiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    imdbScore: 8.9,
    rottenTomatoes: 96,
    year: 2014,
    genreTag: ['All', 'Drama'],
    whereWatch: ['Every Service', 'Hulu'],
    contentTag: ['Movies/TV', 'TV Shows'],
    pop: 301389,
    languages: ['All Languages', 'English'],
    id: 22
  },
  {
    title: 'Stranger Things',
    imgUrl:
      'https://img.reelgood.com/content/show/244c3e6a-0057-4354-b535-8b52fd83c3e1/poster-780.webp',
    imdbScore: 8.8,
    rottenTomatoes: 93,
    year: 2014,
    genreTag: ['All', 'Drama', 'Sci-Fi'],
    whereWatch: ['Every Service', 'Netflix'],
    contentTag: ['Movies/TV', 'TV Shows'],
    pop: 738909,
    languages: ['All Languages', 'English'],
    id: 23
  },
  {
    title: 'The Office',
    imgUrl:
      'https://img.reelgood.com/content/show/53a973fc-70d6-48ca-b9ef-893c35342e47/poster-780.webp',
    imdbScore: 8.9,
    rottenTomatoes: 81,
    year: 2005,
    genreTag: ['All', 'Comedy'],
    whereWatch: ['Every Service', 'Netflix'],
    contentTag: ['Movies/TV', 'TV Shows'],
    pop: 357691,
    languages: ['All Languages', 'English'],
    id: 24
  },
  {
    title: 'House',
    imgUrl:
      'https://img.reelgood.com/content/show/dad6c389-4e26-4e89-9b1b-dc01eeebc6e5/poster-780.webp',
    imdbScore: 8.7,
    rottenTomatoes: 90,
    year: 2004,
    genreTag: ['All', 'Drama'],
    whereWatch: ['Every Service', 'Amazon'],
    contentTag: ['Movies/TV', 'TV Shows'],
    pop: 397847,
    languages: ['All Languages', 'English'],
    id: 25
  },
  {
    title: 'Mr. Robot',
    imgUrl:
      'https://img.reelgood.com/content/show/352f683b-a755-41cc-93a8-21d71c710645/poster-780.webp',
    imdbScore: 8.5,
    rottenTomatoes: 94,
    year: 2015,
    genreTag: ['All', 'Drama'],
    whereWatch: ['Every Service', 'Amazon'],
    contentTag: ['Movies/TV', 'TV Shows'],
    pop: 313773,
    languages: ['All Languages', 'English'],
    id: 26
  },
  {
    title: 'Downfall',
    imgUrl:
      'https://img.reelgood.com/content/movie/5b921a9b-707a-474b-b69e-19c1a986bf2c/poster-780.webp',
    imdbScore: 8.2,
    rottenTomatoes: 90,
    year: 2004,
    genreTag: ['All', 'Drama'],
    whereWatch: ['Every Service', 'Amazon'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 320624,
    languages: ['All Languages', 'German'],
    id: 27
  },
  {
    title: 'Even the Rain',
    imgUrl:
      'https://img.reelgood.com/content/movie/225fcfdc-bdf9-4e4b-a7a4-c39e652f292f/poster-780.webp',
    imdbScore: 7.4,
    rottenTomatoes: 87,
    year: 2004,
    genreTag: ['All', 'Drama'],
    whereWatch: ['Every Service', 'Netflix'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 12355,
    languages: ['All Languages', 'Spanish'],
    id: 28
  },
  {
    title: 'Cinema Paradiso',
    imgUrl:
      'https://img.reelgood.com/content/movie/c677ecbc-d4e9-44c4-a730-a11ad9cf20cd/poster-780.webp',
    imdbScore: 8.5,
    rottenTomatoes: 89,
    year: 1988,
    genreTag: ['All', 'Drama', 'Romance'],
    whereWatch: ['Every Service', 'HBO'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 218809,
    languages: ['All Languages', 'Italian'],
    id: 29
  },
  {
    title: 'Deep Red',
    imgUrl:
      'https://img.reelgood.com/content/movie/fadba26e-3f04-4067-8960-e08df3dbce70/poster-780.webp',
    imdbScore: 7.6,
    rottenTomatoes: 96,
    year: 1975,
    genreTag: ['All', 'Horror'],
    whereWatch: ['Every Service', 'Amazon'],
    contentTag: ['Movies/TV', 'Movies'],
    pop: 30230,
    languages: ['All Languages', 'English'],
    id: 30
  },

  {
    title: 'Happy as Lazzarro',
    imgUrl:
      'https://img.reelgood.com/content/movie/1ccbd862-7262-4b67-9fa0-91961850482f/poster-780.webp',
    imdbScore: 7.6,
    rottenTomatoes: 91,
    pop: 13050,
    year: 2018,
    genreTag: ['All', 'Drama', 'Fantasy'],
    contentTag: ['Movies/TV', 'Movies'],
    whereWatch: ['Every Service', 'Netflix'],
    languages: ['All Languages', 'Italian'],
    id: 31
  },
  {
    title: 'Parasite',
    imgUrl:
      'https://img.reelgood.com/content/movie/c03f0e9b-aca0-467b-8137-39e5b92d33fa/poster-780.webp',
    imdbScore: 8.6,
    rottenTomatoes: 99,
    pop: 423981,
    year: 2019,
    genreTag: ['All', 'Drama', 'Thriller'],
    contentTag: ['Movies/TV', 'Movies'],
    whereWatch: ['Every Service', 'Hulu'],
    languages: ['All Languages', 'Korean'],
    id: 32
  },
  {
    title: 'Paradise Now',
    imgUrl:
      'https://img.reelgood.com/content/movie/c0238b24-3c15-4521-b2a1-54aae0f24696/poster-780.webp',
    imdbScore: 7.4,
    rottenTomatoes: 89,
    pop: 22027,
    year: 2005,
    genreTag: ['All', 'Crime', 'Drama', 'Thriller'],
    contentTag: ['Movies/TV', 'Movies'],
    whereWatch: ['Every Service', 'Amazon'],
    languages: ['All Languages', 'Arabic'],
    id: 33
  },
  {
    title: 'Shutter',
    imgUrl:
      'https://img.reelgood.com/content/movie/451fd5b8-681c-4b0c-838f-13911312eb08/poster-780.webp',
    imdbScore: 7.1,
    rottenTomatoes: 59,
    pop: 39540,
    year: 2004,
    genreTag: ['All', 'Horror'],
    contentTag: ['Movies/TV', 'Movies'],
    whereWatch: ['Every Service', 'Netflix'],
    languages: ['All Languages', 'Thai'],
    id: 34
  },
  {
    title: 'Stalker',
    imgUrl:
      'https://img.reelgood.com/content/movie/1a58f220-8427-4fbb-bbcb-b99e22a33caf/poster-780.webp',
    imdbScore: 8.2,
    rottenTomatoes: 100,
    pop: 109326,
    year: 1979,
    genreTag: ['All', 'Drama', 'Science-Fiction'],
    contentTag: ['Movies/TV', 'Movies'],
    whereWatch: ['Every Service', 'Amazon'],
    languages: ['All Languages', 'Russian'],
    id: 35
  },
  {
    title: 'Haider',
    imgUrl:
      'https://img.reelgood.com/content/movie/7f088e5e-c6ac-426d-95da-a7619ccbb39c/poster-780.webp',
    imdbScore: 8.1,
    rottenTomatoes: 86,
    pop: 48570,
    year: 2014,
    genreTag: ['All', 'Crime', 'Drama'],
    contentTag: ['Movies/TV', 'Movies'],
    whereWatch: ['Every Service', 'Netflix'],
    languages: ['All Languages', 'Hindi'],
    id: 36
  },
  {
    title: 'Sunset Boulevard',
    imgUrl:
      'https://img.reelgood.com/content/movie/7d7265c1-df6c-47e4-b170-6110aedca6de/poster-780.webp',
    imdbScore: 8.4,
    rottenTomatoes: 98,
    pop: 48570,
    year: 1950,
    genreTag: ['All', 'Crime', 'Drama', 'Film-Noir'],
    contentTag: ['Movies/TV', 'Movies'],
    whereWatch: ['Every Service', 'Amazon'],
    languages: ['All Languages', 'English'],
    id: 37
  }
]

async function seed() {
  await db.sync({force: true})

  for (let i = 0; i < dummyData.length; i++) {
    let title = dummyData[i]
    await Title.create(title)
  }

  console.log(`seeded successfully`)
  // db.close()
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  console.log(db)
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
