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

  const handleRateMovie = (movieId) => {
    const rating = parseFloat(prompt('Bitte geben Sie eine Bewertung ein (0-10):'));
    if (isNaN(rating) || rating < 0 || rating > 10) {
      alert("Bewertung muss zwischen 0 und 10");
      return;
    }

    setMovies(dataHandler.rateMovie(movieId, rating));
  };

  const handleEdit = (id, title, description) => {
    setMovies(dataHandler.editMovie(id, title, description))
  };

  const handleToggleFavorit = (movieId) => {
    setMovies(dataHandler.toggleFavorite(movieId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Film- und Serienliste ({movies.length})</h2>
        <MovieList
          movies={movies}
          onDelete={handleDeleteMovie}
          onRate={handleRateMovie}
          onEdit={handleEdit}
          onToggleFavorite={handleToggleFavorit}
        />

        <button onClick={() => handleAddMovie()}>hinzufügen</button>
      </header>
    </div>
  );
}

export default App;
