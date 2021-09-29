import React, {useEffect, useState} from 'react'
import Tmdb from './services/api'
import MovieRow from './components/MovieRow/index.jsx'

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
         <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}
