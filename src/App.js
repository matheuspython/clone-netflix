import React, {useEffect, useState} from 'react'
import Tmdb from './Tmdb'


export const App = () => {
  const [movieList, setMovieList] = useState([])


  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)
      
    }
    loadAll() 
  },[])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  )
}
