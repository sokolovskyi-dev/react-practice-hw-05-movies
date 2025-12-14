import { useEffect, useRef, useState } from 'react';

import { Outlet, useLocation, useParams } from 'react-router-dom';

import AddInformation from '@/components/AddInformation/AddInformation';
import BackLink from '@/components/BackLink/BackLink';
import Loader from '@/components/Loader/Loader';
import MovieCard from '@/components/MovieCard/MovieCard';
import { getMovieDetails } from '@/services/moviesApi';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieDetails(movieId);
        setMovie(data);
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
      <BackLink to={backLink.current} />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {movie && <MovieCard movie={movie} />}
      {movie && <AddInformation />}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
{
  /* <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />; */
}
