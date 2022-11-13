import { Poster } from './MovieCard.styled';

export const MovieCard = ({ movieId, title, posterPath }) => {
  const filmPosterSrc = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  return (
    <li>
      <Poster
        src={posterPath ? filmPosterSrc : 'No Poster'}
        alt={title}
        height="500"
      />
    </li>
  );
};
