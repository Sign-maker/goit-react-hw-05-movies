import axios1 from 'axios';

const axios = axios1.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'aa5059789a38bc93f2c5a690047de290',
  },
});

export async function getTrending(page, signal) {
  const params = { page };

  const { data } = await axios.get('trending/movie/day', { params, signal });
  return data;
}

export async function getMoviesByTitle(query, page, signal) {
  const params = { query, page };

  const { data } = await axios.get('search/movie', { params, signal });
  return data;
}

export async function getMovieById(id, signal) {
  const { data } = await axios.get(`movie/${id}`, { signal });
  return data;
}

export async function getMovieCredits(id, signal) {
  const { data } = await axios.get(`movie/${id}/credits`, { signal });
  return data;
}

export async function getMovieReviews(id, page, signal) {
  const params = { page };

  const { data } = await axios.get(`movie/${id}/reviews`, { params, signal });
  return data;
}
