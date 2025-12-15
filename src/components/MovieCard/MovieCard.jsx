import React from 'react';

import { CardWrapper, ImageWrapper } from './MovieCard.styled';

import noPhoto from '@/assets/no-photo.jpg';

const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;
  return (
    <CardWrapper>
      <ImageWrapper>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : noPhoto}
          alt={title}
        />
      </ImageWrapper>

      <div>
        <h1>{title}</h1>
        <p>User score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(genre => genre.name)}</p>
      </div>
    </CardWrapper>
  );
};
export default MovieCard;
