import React, { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { MovieDetailsCard } from './MovieDetailsCard';

import { fetchDetails } from '../../service/fetchService';

import { Container } from 'pages/Movies/Movies.styled';
import { LinkBtn, Wrapper } from './MovieDetails.styled';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    fetchDetails(movieId)
      .then(setFilm(movieId))

      .catch(e => console.log(e.message));
  }, [movieId]);

  return (
    <Container>
      <Wrapper>
        <LinkBtn to={location.state?.from ?? '/'}>Go back</LinkBtn>
      </Wrapper>

      {film.id && (
        <MovieDetailsCard
          poster_path={film.poster_path}
          original_title={film.original_title ?? 'none'}
          release_date={film.release_date}
          vote_average={film.vote_average ?? 0}
          overview={film.overview ?? 'none'}
          genres={film.genres ?? [{ id: 1, name: 'none' }]}
        />
      )}
      <Wrapper>
        <LinkBtn to="cast" state={{ from: location.state?.from ?? '/' }}>
          Cast
        </LinkBtn>
        <LinkBtn to="reviews" state={{ from: location.state?.from ?? '/' }}>
          Reviews
        </LinkBtn>
      </Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;
