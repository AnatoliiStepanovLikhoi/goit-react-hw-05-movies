import { useEffect } from 'react';
import { useState } from 'react';

import { getMovieReviews } from '../../../API/fetchMovies';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => setReview(results));
  }, [movieId]);

  console.log(reviews);

  //   if (!review) {
  //     return null;
  //   }

  return reviews && reviews.length > 0 ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <h3>Sorry, we don`t have any reviews for this movie</h3>
  );
}
