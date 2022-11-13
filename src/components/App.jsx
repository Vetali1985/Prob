// import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Movies from './Movies/Movies';

const App = () => {
  return (
    <div>
      <Layout />
      <Movies />
      <Home />
    </div>

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="movies" element={<Movies />} />
    //     <Route path="movies/:movieId" element={<MovieDetails />}>
    //       <Route path="cast" element={<Cast />} />
    //       <Route path="reviews" element={<Reviews />} />
    //     </Route>
    //   </Route>
    // </Routes>
  );
};
export default App;
// zcvzx;
