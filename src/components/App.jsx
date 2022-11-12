import { Route, Routes } from 'react-router-dom';

import NotFound from './NotFound/NotFound';
import Home from './pages/Home';
import Layout from './Layout/Layout';
import Movies from './pages/Movies';
import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
// zcvzx;
