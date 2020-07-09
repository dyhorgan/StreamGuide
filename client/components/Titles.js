import React from 'react'
import {Link} from 'react-router-dom'

export const Titles = props => {
  console.log('logging in titles', props.dummyData)
  return (
    <div>
      {props.dummyData.length ? (
        <div className="row">
          {props.dummyData.map(function(movie) {
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
      )}
    </div>
  )
}
