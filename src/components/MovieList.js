import React from 'react';

const MovieList = ({ movies, onDelete, onRate }) => {

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Bewertung: {movie.rating}</p>
            <button onClick={() => onDelete(movie.id)}>löschen</button>
            <button onClick={() => onRate(movie.id)}>bewerten</button>
            <hr />
          </>
        </div>
      ))}
    </>
  );
};

export default MovieList;
