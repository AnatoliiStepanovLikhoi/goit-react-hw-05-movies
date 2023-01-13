import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Container } from '../components/Common/Container.styled';

import { getMovieByName } from 'API/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  // const [inputRequest, setInputRequest] = useState('');
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams({});
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const acquiredSearchParam = searchParams.get('value');

    if (!acquiredSearchParam) {
      return setStatus('idle');
    }

    getMovieByName(acquiredSearchParam).then(data => {
      setMovies(data);
      setStatus('resolved');
    });

    // getMovieByName(inputRequest, 1).then(data => console.log(data));
  }, []);

  const onInputSubmit = event => {
    event.preventDefault();

    const acquiredSearchParam = searchParams.get('value');

    // console.log(acquiredSearchParam);
    if (!acquiredSearchParam) {
      return setStatus('idle');
    }

    setStatus('pending');

    getMovieByName(acquiredSearchParam)
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  };

  const onInputUpdate = ({ target }) => {
    // setInputRequest(target.value);
    // console.log(target.value);

    let params = target.value.trim().toLowerCase();
    // console.log(params);
    setSearchParams(params ? { value: params } : {});
  };

  return (
    <Container>
      <form onSubmit={onInputSubmit}>
        <label>
          <input
            type="text"
            name="findMovie"
            onChange={onInputUpdate}
            // value={searchParams}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <MoviesList moviesList={movies} state={location} />
      )}
    </Container>
  );
}
