import axios1 from 'axios';

const axios = axios1.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'aa5059789a38bc93f2c5a690047de290',
  },
});

export async function getTrending(page) {
  const params = { page };

  const { data } = await axios.get('trending/movie/day', { params });
  return data;
}

export async function getMoviesByTitle(title, page) {
  const params = { query: title, page };

  const { data } = await axios.get('search/movie', { params });
  return data;
}

export async function getMovieById(id) {
  const { data } = await axios.get(`${id}`);
  return data;
}

export async function getMovieCredits(id) {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data;
}

export async function getMovieReviews(id, page) {
  const params = { page };

  const { data } = await axios.get(`movie/${id}/reviews`, { params });
  return data;
}
