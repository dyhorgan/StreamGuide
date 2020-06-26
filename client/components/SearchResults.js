import React from 'react'
import {Link} from 'react-router-dom'

export const SearchResults = props => {
  return (
    <div>
      <h1>Did you mean...</h1>
      {props.results.map(function(result) {
        return (
          <h2 key={result.id}>
            <Link to={`/SingleMovie/${result.id}`}>{result.title}</Link>
          </h2>
        )
      })}
    </div>
  )
}
