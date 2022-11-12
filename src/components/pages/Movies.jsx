import { useState } from 'react';
import { fetchQuery } from '../../service/fetchService';
import {
  List,
  Container,
  FormInput,
  FormBtnLabel,
  FormBtn,
  Form,
} from '../Movies/Movies.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ErrorSearch } from '../ErrorSearch/ErrorSearch';
import { MovieCard } from 'components/MovieCard/MovieCard';

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
        <FormBtn type="submit">
          <FormBtnLabel>Search</FormBtnLabel>
        </FormBtn>
      </Form>
      {status === 'resolved' && films.length > 0 && (
        <List>
          {films.map(film => {
            const { id, poster_path, title, name } = film;
            return (
              <MovieCard
                key={id}
                posterPath={poster_path}
                title={title ?? name}
                movieId={id}
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
