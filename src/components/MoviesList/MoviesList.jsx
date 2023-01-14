import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import { MovieList, ListItem, NavlistLink } from './MovieList.styled';
import { FcFilmReel } from 'react-icons/fc';

export const MoviesList = ({ moviesList, state }) => (
  <MovieList>
    {moviesList.map(movieItem => (
      <ListItem key={movieItem.id}>
        <FcFilmReel />
        <NavlistLink to={`/movies/${movieItem.id}`} state={state}>
          {movieItem.original_title}
        </NavlistLink>
      </ListItem>
    ))}
  </MovieList>
);

MoviesList.propType = {
  moviesList: PropTypes.array.isRequired,
  // state: PropTypes.object.isRequired,
};
