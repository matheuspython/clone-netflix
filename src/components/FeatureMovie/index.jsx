import React from 'react'
import { FeatureMovieStyled } from './style'


export default function FeatureMovie({item}) {
  return (
    <FeatureMovieStyled
    style={{
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}
    >
      <div>{item.original_name}</div>

    </FeatureMovieStyled>
  )
}
