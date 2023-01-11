import { Routes, Route } from 'react-router-dom';

// import { Header } from './Layout/Header/Header';
import Movies from 'pages/Movies';
import Home from 'pages/Home';

import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          {/* <Route path="movies/:movieId" element={<MovieDetail />}>
                  <Route path="cast" element={<Cast />}></Route>
                  <Route path="reviews" element={<Reviews />}></Route>
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};
