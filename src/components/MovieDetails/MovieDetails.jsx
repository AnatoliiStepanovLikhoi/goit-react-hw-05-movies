import {
  useParams,
  Outlet,
  useNavigate,
  useLocation,
  // Link,
} from 'react-router-dom';

import {
  useEffect,
  useState,
  // useRef
} from 'react';

import { getMovieById } from '../../API/fetchMovies';

import {
  DetailsContainer,
  DescSection,
  MovieTitle,
  DescContainer,
  GenresList,
  InfoLink,
  InfoSection,
  InfoList,
  InfoTitle,
} from './MovieDetails.styled';

import { Button } from 'components/Common/Button.styled';

import posterPhoto from '../../images/movie-poster-coming-soon.jpg';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const navigate = useNavigate();
  const { movieId } = useParams();

  const location = useLocation();

  // const { state } = location.state;

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  const userScores = Math.round(movieDetails?.vote_average * 10);

  const findGenres = movieDetails.genres?.map(genre => genre.name);

  // const goBackRef = useRef(
  //   `${location.state?.from.pathname}${
  //     location.state?.from.pathname ? location.state?.from.search : ''
  //   }`
  // );

  const goBackRef = location.state?.from ?? '/';

  // console.log(location.state.from);
  // console.log(goBackRef.current);

  return (
    <DetailsContainer>
      <Button
        onClick={() => {
          navigate(goBackRef);
        }}
        type="button"
      >
        &#129092; Go back
      </Button>

      {/* <Link to={goBackRef}>Go back</Link> */}

      {movieDetails?.title && (
        <div>
          <DescSection>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : posterPhoto
              }
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
