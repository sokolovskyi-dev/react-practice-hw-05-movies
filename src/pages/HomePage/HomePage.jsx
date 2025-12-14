import React, { useEffect, useState } from 'react';

import Loader from '@/components/Loader/Loader';
import MovieList from '@/components/MovieList/MovieList';
import { getTrending } from '@/services/moviesApi';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);
        const movies = await getTrending();
        setTrendingMovies(movies);
        // console.log(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      {!isLoading && !error && <MovieList movies={trendingMovies} />}
    </div>
  );
};

export default HomePage;
