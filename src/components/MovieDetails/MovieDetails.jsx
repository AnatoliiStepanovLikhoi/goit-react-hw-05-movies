import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieById } from '../../API/fetchMovies';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const navigate = useNavigate();
  const { movieId } = useParams();

  //   console.log(movieId);

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  const userScores = Math.round(movieDetails?.vote_average * 10);

  const findGenres = movieDetails.genres?.map(genre => genre.name);

  //   console.log(findGenres);

  return (
    <>
      <button onClick={() => navigate('/')} type="button">
        &#129092; Go back
      </button>
      {movieDetails?.title && (
        <>
          <section>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div>
              <h3>{movieDetails.title}:</h3>
              <p>User Score: {userScores}%</p>

              <h3>Overview:</h3>
              <p>{movieDetails.overview}</p>

              <h3>Genres:</h3>
              <ul>
                {findGenres.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
          <section>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </section>
        </>
      )}
      <Outlet />
    </>
  );
}

export default MovieDetails;
