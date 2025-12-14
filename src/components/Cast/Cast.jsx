import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getMovieCredits } from '@/services/moviesApi';

import Loader from '../Loader/Loader';

import noPhoto from '@/assets/no-photo.jpg';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function fetchCast() {
      try {
        setError(null);
        setIsLoading(true);

        const actors = await getMovieCredits(movieId);
        console.log(actors);
        setCast(actors);
      } catch (error) {
        console.error(error);
        setError('Failed to load cast');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCast();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <div>
            <img
              loading="lazy"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : noPhoto
              }
              alt={actor.name}
            />
          </div>
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
