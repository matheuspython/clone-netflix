import React from 'react'

import {MovieRowStyled} from './style'

export default function MovieRow({title, items}) {
  return (
    <MovieRowStyled>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        {items.results.length > 0 && items.results.map((item, key) =>(
          <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
        ))}
      </div>
    </MovieRowStyled>
  )
}
