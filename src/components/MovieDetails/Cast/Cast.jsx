import { useEffect } from 'react';
import { useState } from 'react';

import { getMovieCredits } from '../../../API/fetchMovies';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  console.log(cast);

  if (!cast) {
    return null;
  }

  return (
    // cast && (
    <ul>
      {cast.map(item => (
        <li key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            alt={item.name}
          />
          <p>{item.name}</p>

          <div>
            <p>Character:</p>
            <p>{item.character}</p>
          </div>
        </li>
      ))}
    </ul>
    // )
  );
}
