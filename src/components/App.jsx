import { Routes, Route } from 'react-router-dom';

import { Header } from './Header';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="movies" element={<Movies />}></Route>
      </Routes>
    </>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
