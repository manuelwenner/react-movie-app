import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import MovieList from './components/MovieList';
import DataHandler from './controller/DataHandler';

import './App.css';
import FavoriteMovies from './components/FavoriteMovies';


const dataHandler = new DataHandler();

function App() {
  const [movies, setMovies] = useState(dataHandler.getMovies());
  const favorites = dataHandler.getFavorites();

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

  // some simple styling for our navigation bar
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-around',
      listStyle: 'none',
      paddingBottom: 64,
      borderBottom: '1px grey solid'
    },
    navLi: {
      marginRight: 64
    }
  };


  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <nav>
          <ul style={styles.nav}>
            <li style={styles.navLi}>
              <NavLink
                to=""
                style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
                })}
              >Film- und Serienliste</NavLink>
            </li>
            <li>
              <NavLink
                to="favoriten"
                style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
                })}
              >Favoriten ({dataHandler.getFavorites().length})</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <MovieList
                movies={movies}
                onDelete={handleDeleteMovie}
                onRate={handleRateMovie}
                onEdit={handleEdit}
                onToggleFavorite={handleToggleFavorit}
              />

              <button onClick={() => handleAddMovie()}>hinzufügen</button>

            </>
          } />
          <Route path="/favoriten" element={
            <FavoriteMovies
              favoriteMovies={favorites}
              onToggleFavorite={handleToggleFavorit}
            />
          } />
        </Routes>

      </Router>
      </header>
    </div>
  );
}

export default App;
