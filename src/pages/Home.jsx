import { useState, useEffect } from 'react';

import { getTrendings } from 'API/fetchMovies';
import { Loader } from 'components/Loader/Loader';
import { Container } from '../components/Common/Container.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  const location = useLocation();

  useEffect(() => {
    setStatus('pending');

    getTrendings()
      .then(data => {
        // console.log(data);
        setMovies(data);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, []);

  return (
    <Container>
      <h2>Trending today</h2>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <p>Error</p>}
      {status === 'resolved' && (
        <MoviesList moviesList={movies} state={location} />
      )}
    </Container>
  );
};

export default Home;

// getTrendings().then(data => console.log(data));
