const API_KEY = '6ca014c078ab885f23a1f191a11bbd08'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async endpoint => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getHomeList: async () => {
    return {
      slug: "originals",
      title: 'Originais da Netflix',
      itens: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: "trending",
      title: "Recomendados para Você",
      itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

    },
    {
      slug: "toprated",
      title: "Em Alta",
      itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

    }
    ,
    {
      slug: "action",
      title: "Ação",
      itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

    },
    {
      slug: "comedy",
      title: "comedia",
      itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)

    },
    {
      slug: "horror",
      title: "Terror",
      itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

    },
    {
      slug: "romance",
      title: "Romance",
      itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)

    },
    {
      slug: "documentary",
      title: "Documentarios",
      itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)

    }
  }
}