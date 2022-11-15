import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';

import Layout from './Layout/Layout';
import { Div, StyledLink } from './Layout/Layout.styled';

const Cast = lazy(() => import('./Cast/Cast'));
const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./Movies/Movies'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      {/* <Div>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Div> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
{
}
