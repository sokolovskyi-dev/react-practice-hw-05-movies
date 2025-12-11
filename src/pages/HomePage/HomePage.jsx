import React, { useEffect, useState } from 'react';

import MovieList from '@/components/MovieList/MovieList';
import { getTrending } from '@/services/moviesApi';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await getTrending();
        setTrendingMovies(movies);
        // console.log(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default HomePage;
