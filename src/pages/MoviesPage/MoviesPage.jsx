// import React, { useState } from 'react';

import { useEffect, useState } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';

import Loader from '@/components/Loader/Loader';
import { getMovieBySearch } from '@/services/moviesApi';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getMovieBySearch(query);
        console.log('🚀 ~ data:', data);

        setMovies(data);
      } catch (error) {
        console.error(error);
        setError('Failed to load movies');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const searchValue = form.elements.search.value.trim();

    // setSearchParams({ query: searchValue });
    setSearchParams(searchValue === '' ? {} : { query: searchValue });
    form.reset();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" defaultValue={query} />
        <button>Search</button>
      </form>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {/* {movies.length === 0 && <p>No movies available.</p>} */}
      {!isLoading && !error && movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
