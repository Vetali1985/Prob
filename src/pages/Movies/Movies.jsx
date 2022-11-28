import { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { ErrorSearch } from 'components/ErrorSearch/ErrorSearch';
import { MovieCard } from 'pages/MovieCard/MovieCard';

import { fetchQuery } from '../../service/fetchService';

import { List, Container, FormInput, FormBtn, Form } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const onInputValue = e => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (!searchQuery) return;
    setStatus('pending');

    fetchQuery(searchQuery)
      .then(r => {
        if (r.data.total_results === 0) setStatus('no-results');
        setFilms(r.filmsArr);
        setStatus('resolved');
      })
      .catch(e => console.log(e.message));
  }, [searchQuery]);

  const formSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') return;
    setSearchParams({ searchQuery: query });
    setQuery('');
  };
  return (
    <Container>
      <Form onSubmit={formSubmit}>
        <label>
          <FormInput
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onInput={onInputValue}
          />
        </label>
        <FormBtn type="submit">Search</FormBtn>
      </Form>
      {status === 'resolved' && films.length > 0 && (
        <List>
          {films.map(film => {
            // const { id, poster_path, title, name } = film;
            return (
              <MovieCard
                key={film.id}
                posterPath={film.poster_path}
                title={film.title ?? film.name}
                movieId={film.id}
              />
            );
          })}
        </List>
      )}
      {status === 'no-results' && (
        <ErrorSearch
          message={`Sorry, we did not find any movies for "${searchQuery}"`}
        />
      )}
    </Container>
  );
};
export default Movies;
