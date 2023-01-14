import { useEffect } from 'react';
import { useState } from 'react';

import { getMovieCredits } from '../../../API/fetchMovies';
import { useParams } from 'react-router-dom';

import posterPhoto from '../../../images/movie-poster-coming-soon.jpg';

import {
  CastList,
  CastImage,
  CastItem,
  CastInfo,
  CastName,
} from './Cast.styled';

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
    <CastList>
      {cast.map(item => (
        <CastItem key={item.id}>
          <CastImage
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                : posterPhoto
            }
            alt={item.name}
          />
          <CastName>{item.name}</CastName>

          <CastInfo>
            <p>Character:</p>
            <p>{item.character}</p>
          </CastInfo>
        </CastItem>
      ))}
    </CastList>
    // )
  );
}
