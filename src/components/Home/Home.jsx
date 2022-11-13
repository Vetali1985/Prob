import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { fetchPopularFilms } from 'service/fetchService';
import { List } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetchPopularFilms()
      .then(setFilms)
      .then(console.log(films))
      .catch(e => console.log(e.message));
  }, [films]);
  return (
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
  );
};
export default Home;
