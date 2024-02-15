import React from 'react';

const MovieList = ({ movies }) => {

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Bewertung: {movie.rating}</p>
            <hr />
          </>
        </div>
      ))}
    </>
  );
};

export default MovieList;
