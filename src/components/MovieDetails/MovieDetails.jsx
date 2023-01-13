import {
  useParams,
  Outlet,
  useNavigate,
  useLocation,
  // Link,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

import { getMovieById } from '../../API/fetchMovies';

import {
  DetailsContainer,
  DescSection,
  GoBackButton,
  MovieTitle,
  DescContainer,
  GenresList,
  InfoLink,
  InfoSection,
  InfoList,
  InfoTitle,
} from './MovieDetails.styled';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const navigate = useNavigate();
  const { movieId } = useParams();

  const location = useLocation();

  // const { state } = location.state;
  // console.log(location.state);

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  const userScores = Math.round(movieDetails?.vote_average * 10);

  const findGenres = movieDetails.genres?.map(genre => genre.name);

  const goBackRef = useRef(
    `${location.state?.pathname}${
      location.state?.pathname ? location.state?.search : ''
    }`
  );

  // console.log(goBackRef);

  return (
    <DetailsContainer>
      <GoBackButton
        onClick={() => {
          navigate(goBackRef.current ?? '/');
        }}
        type="button"
      >
        &#129092; Go back
      </GoBackButton>

      {/* <Link to={goBackRef.current ?? '/'}>Go back</Link> */}

      {movieDetails?.title && (
        <div>
          <DescSection>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <DescContainer>
              <MovieTitle>
                {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
              </MovieTitle>
              <p>User Score: {userScores}%</p>

              <h3>Overview:</h3>
              <p>{movieDetails.overview}</p>

              <h3>Genres:</h3>
              <GenresList>
                {findGenres.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </GenresList>
            </DescContainer>
          </DescSection>
          <InfoSection>
            <InfoTitle>Additional information</InfoTitle>
            <InfoList>
              <li>
                <InfoLink to="cast">Cast</InfoLink>
              </li>
              <li>
                <InfoLink to="reviews">Reviews</InfoLink>
              </li>
            </InfoList>
          </InfoSection>
        </div>
      )}
      <Outlet />
    </DetailsContainer>
  );
}

export default MovieDetails;
