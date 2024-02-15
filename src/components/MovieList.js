import React from 'react';
import MovieItemElement from './MovieItem';

const MovieList = ({ movies, onDelete, onRate, onEdit, onToggleFavorite }) => {

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieItemElement
            key={movie.id}
            movie={movie}
            onRate={onRate}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </>
  );
};

export default MovieList;
