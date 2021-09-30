import React, {useEffect, useState} from 'react'
import Tmdb from './services/api'

import GlobalStyle from './styles/global'

import MovieRow from './components/MovieRow/index.jsx'
import FeatureMovie from './components/FeatureMovie/index'
export const App = () => {
  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originalsFromNetflix = list.filter(original => original.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originalsFromNetflix[0].items.results.length - 1))
      let chosen = originalsFromNetflix[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      
      setFeatureData(chosenInfo)
    }
    loadAll() 
  },[])

  return (
    <>
    <GlobalStyle />
      <div className="page">
        {featureData &&
          <FeatureMovie item={featureData} />
        }
        <section className="lists">
          {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>
      </div>
    </>
  )
}
