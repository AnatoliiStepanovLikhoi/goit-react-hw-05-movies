import { useState, useEffect } from 'react';

import { getTrendings } from 'API/fetchMovies';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('pending');

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
    <div>
      <h2>Trending today</h2>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <p>Error</p>}
    </div>
  );
};

export default Home;

// getTrendings().then(data => console.log(data));
