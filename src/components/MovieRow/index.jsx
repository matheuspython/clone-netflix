import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'



import {MovieRowStyled} from './style'

export default function MovieRow({title, items}) {
  const [scrollX, setScrollX] = useState(0)
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if(x>0) x = 0
    
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150
    if((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60;
    }

    setScrollX(x)
    
  }

  return (
    <MovieRowStyled>
      <h2>{title}</h2>
      <div onClick={handleLeftArrow} className="movieRow-left movieRow">
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>

      <div onClick={handleRightArrow} className="movieRow-right movieRow">
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>


      <div className="movieRow--listarea">
          <div className="movieRow--list"
            style={{
              marginLeft: scrollX,
              width: items.results.length * 150
            }}
          >
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
