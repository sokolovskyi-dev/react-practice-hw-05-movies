import { useEffect, useState } from 'react';

import { Outlet, useParams } from 'react-router-dom';

import BackLink from '@/components/BackLink/BackLink';
import Loader from '@/components/Loader/Loader';
import { getMovieDetails } from '@/services/moviesApi';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieDetails(movieId);
        console.log(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError('Failed to load movie details');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);
  return (
    <div>
      <BackLink />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      MovieDetailsPage {movieId}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
