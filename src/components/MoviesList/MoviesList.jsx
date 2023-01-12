import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => (
  <ul>
    {moviesList.map(movieItem => (
      <li key={movieItem.id}>
        <Link to={`/movies/${movieItem.id}`}>{movieItem.original_title}</Link>
      </li>
    ))}
  </ul>
);

MoviesList.propType = {
  moviesList: PropTypes.array.isRequired,
};
