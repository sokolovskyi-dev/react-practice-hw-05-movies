import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getReviews } from '@/services/moviesApi';

import Loader from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchReviews() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
        setError('Failed to load reviews');
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviews();
  }, [movieId]);

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (reviews.length === 0) return <p>No reviews available.</p>;

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
