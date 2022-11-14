import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
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
    <main>
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
        <Outlet />
      </List>
    </main>
  );
};
export default Home;
