import { useEffect } from 'react';
import { useState } from 'react';

import { getMovieReviews } from '../../../API/fetchMovies';
import { useParams } from 'react-router-dom';

import { ReviewsList, ReviewsItem, ReviewsTitle } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => setReview(results));
  }, [movieId]);

  console.log(reviews);

  if (!reviews) {
    return null;
  }

  return reviews.length > 0 ? (
    <ReviewsList>
      {reviews.map(review => (
        <ReviewsItem key={review.id}>
          <ReviewsTitle>Author: {review.author}</ReviewsTitle>
          <p>{review.content}</p>
        </ReviewsItem>
      ))}
    </ReviewsList>
  ) : (
    <h3>Sorry, we don`t have any reviews for this movie</h3>
  );
}
