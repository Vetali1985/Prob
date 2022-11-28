import React from 'react';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Poster, Link, Title, ListItem } from './MovieCard.styled';

export const MovieCard = ({ posterPath, title, movieId }) => {
  const location = useLocation();
  const filmPosterSrc = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  return (
    <ListItem>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        <Poster
          src={posterPath ? filmPosterSrc : 'noPoster'}
          alt={title}
          height="510"
        />
        <Title>{title}</Title>
      </Link>
    </ListItem>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};
