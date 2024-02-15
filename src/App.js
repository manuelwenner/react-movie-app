import React, { useState } from 'react';

import './App.css';
import MovieList from './components/MovieList';
import DataHandler from './controller/DataHandler';

const dataHandler = new DataHandler();

function App() {
  const [movies, setMovies] = useState(dataHandler.getMovies());

  const handleDeleteMovie = (id) => {
    setMovies(dataHandler.deleteMovie(id));
  };

  const handleAddMovie = () => {
    var movie = { id: movies.length + 1, title: 'New Movie', description: 'Super toller neuer Film', rating: 10 };
    setMovies(dataHandler.addMovie(movie));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Film- und Serienliste ({movies.length})</h2>
        <MovieList
          movies={movies}
          onDelete={handleDeleteMovie}
        />

        <button onClick={() => handleAddMovie()}>hinzufügen</button>
      </header>
    </div>
  );
}

export default App;
