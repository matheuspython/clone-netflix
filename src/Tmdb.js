const API_KEY = '6ca014c078ab885f23a1f191a11bbd08'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
      return [
          {
              slug: 'originals',
              title: 'Originais do Netflix',
              type: 'tv',
              items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
          },
          {
              slug: 'trending',
              title: 'Recomendados para você',
              type: 'tv',
              items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
          }, 
          {
              slug: 'toprated',
              title: 'Em alta',
              type: 'movie',
              items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
          },
          {
              slug: 'action',
              title: 'Ação',
              type: 'movie',
              items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
          },
          {
              slug: 'comedy',
              title: 'Comédia',
              type: 'movie',
              items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
          },
          {
              slug: 'horror',
              title: 'Terror',
              type: 'movie',
              items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
          },
          {
              slug: 'romance',
              title: 'Romance',
              type: 'movie',
              items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
          },
          {
              slug: 'documentary',
              title: 'Documentários',
              type: 'movie',
              items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
          }
      ]
  }}