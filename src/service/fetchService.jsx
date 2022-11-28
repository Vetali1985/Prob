import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
export async function fetchPopularFilms() {
  const url = `${URL}trending/all/day?api_key=d6e97164aaa08d2091b81af2621a507c`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return filmsArr;
}

export async function fetchQuery(searchQuery) {
  const url = `${URL}search/movie?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US&query=${searchQuery}&page=1&include_adult=false`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return { filmsArr, data };
}

export async function fetchDetails(id) {
  const url = `${URL}movie/${id}?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US`;
  const resp = await axios.get(url);
  const data = await resp.data;
  console.log(data);
  return data;
}

export async function fetchReviews(id) {
  const url = `${URL}movie/${id}/reviews?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US&page=1`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmsArr = await data.results;

  return filmsArr;
}

export async function fetchCast(movieId) {
  const url = `${URL}movie/${movieId}/credits?api_key=d6e97164aaa08d2091b81af2621a507c&language=en-US`;
  const resp = await axios.get(url);
  const data = await resp.data;
  const filmCast = await data.cast;
  return filmCast;
}
