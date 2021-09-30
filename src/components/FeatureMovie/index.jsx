import React from 'react'
import { FeatureMovieStyled } from './style'


export default function FeatureMovie({item}) {
  let firstDate = new Date(item.first_air_date)
  let genres = []
  for(let i in item.genres){
    genres.push(item.genres[i].name)
  }

  return (
    <FeatureMovieStyled
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
         
          <div className="featured--info">
            <div className="featured--points display-block-and-margin">{item.vote_average} pontos</div>
            <div className="featured--year display-block-and-margin">{firstDate.getFullYear()}</div>
            <div className="featured--seasons display-block-and-margin">{item.number_of_seasons} {item.number_of_seasons === 1? <>temporada</>: <>temporadas</>}</div>
          </div>
         
          <div className="featured--description">{item.overview}</div>
        
          <div className="feature--buttons">
            <a className="featured--watchbutton btn" href={`/watch/${item.id}`}>Assistir</a>
            <a className="featured--mylistbutton btn" href={`/list/add/${item.id}`}>+ Minha Lista</a>
          </div>
        
          <div className="featured--genres">Gêneros <strong>{genres.join(', ')}</strong></div>
        </div>
      </div>

    </FeatureMovieStyled>
  )
}
