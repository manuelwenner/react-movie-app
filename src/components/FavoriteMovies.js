import React from 'react';
import MovieItemShow from './MovieItemShow';

const FavoriteMovies = ({ favoriteMovies, onToggleFavorite }) => {

  return (
    <>
      {favoriteMovies.length === 0 ? (
        <p>Keine Favoriten vorhanden.</p>
      ) : (
        <ul>
          {favoriteMovies.map((movie) => (
            <MovieItemShow 
              key={movie.id}
              movie={movie} 
              onToggleFavorite={onToggleFavorite} />
          ))}
        </ul>
      )}
    </>
  );
};

export default FavoriteMovies;
