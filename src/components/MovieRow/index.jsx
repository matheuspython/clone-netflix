import React from 'react'

import {MovieRowStyled} from './style'

export default function MovieRow({title, items}) {
  return (
    <MovieRowStyled>
      <h2>{title}</h2>
      <div className="movieRow--listarea">
          <div className="movieRow--list">
            {items.results.length > 0 && items.results.map((item, key) =>(
              <div key={key} className="movieRow--item">
                <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
            ))}
        
          </div>

      </div>
    </MovieRowStyled>
  )
}
