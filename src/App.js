import './App.css';
import MovieList from './components/MovieList';
import DataHandler from './controller/DataHandler';

function App() {
  const dataHandler = new DataHandler();
  const movies = dataHandler.getMovies();


  return (
    <div className="App">
      <header className="App-header">
        <h2>Film- und Serienliste</h2>
        <MovieList
          movies={movies}
        />
      </header>
    </div>
  );
}

export default App;
