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

  return (
    <div className="App">
      <header className="App-header">
        <h2>Film- und Serienliste ({movies.length})</h2>
        <MovieList
          movies={movies}
          onDelete={handleDeleteMovie}
        />
      </header>
    </div>
  );
}

export default App;
