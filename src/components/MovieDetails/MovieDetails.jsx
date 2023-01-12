import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

  console.log(movieDetails);

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  const userScores = Math.round(movieDetails?.vote_average * 10);

  const findGenres = movieDetails.genres?.map(genre => genre.name);

  // console.log(findGenres);

  return (
    <DetailsContainer>
      <GoBackButton onClick={() => navigate('/')} type="button">
        &#129092; Go back
      </GoBackButton>
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
