import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
// import { useDebounce } from '../components/Hooks/useDebounce';
import { Notify } from 'notiflix';

import { Container } from '../components/Common/Container.styled';
import { Button } from 'components/Common/Button.styled';
import { Input } from './Movies.styled';

import { getMovieByName } from 'API/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Common/Notification.styled';

Notify.init({
  distance: '20px',
  cssAnimationStyle: 'from-top',
  fontSize: '16px',
  timeout: 1000,
  backOverlay: true,
  clickToClose: true,
});

// const DEBOUNCE_TIME_MS = 500;

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  const [inputRequest, setInputRequest] = useState(
    () => searchParams.get('value') ?? ''
  );

  // const acquiredSearchParam = searchParams.get('value') ?? '';

  useEffect(() => {
    // console.log('render');

    if (inputRequest === '') {
      return Notify.success('Please fill what you`re looking for!');
    }

    setStatus('pending');

    getMovieByName(inputRequest)
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onInputSubmit = event => {
    event.preventDefault();

    if (inputRequest === '') {
      return Notify.success('Please fill what you`re looking for!');
    }

    setStatus('pending');

    setSearchParams({ value: inputRequest });

    getMovieByName(inputRequest)
      .then(data => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  };

  const onInputUpdate = ({ target }) => {
    setInputRequest(target.value.trim().toLowerCase());

    // console.log(target.value);
    // let params = target.value.trim().toLowerCase();
    // console.log('render');
    // setSearchParams({ value: params });
  };

  return (
    <Container>
      <form onSubmit={onInputSubmit}>
        <label>
          <Input
            type="text"
            name="findMovie"
            onChange={onInputUpdate}
            value={inputRequest}
            placeholder="Fill your request"
          />
        </label>
        <Button type="submit">Search</Button>
      </form>

      {status === 'idle' && (
        <Notification>Please fill what you`re looking for!</Notification>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' &&
        Notify.failure('Sorry, something went wrong, please try again later!')}
      {status === 'resolved' && movies.length === 0 && (
        <Notification>Sorry, we found no movies</Notification>
      )}
      {status === 'resolved' && (
        <MoviesList moviesList={movies} state={{ from: location }} />
      )}
    </Container>
  );
}
