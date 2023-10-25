import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './search.svg'
import MovieCard from './MovieCart';
import MovieDescription from './MovieDescription';
import { Link } from 'react-router-dom';

// ca1ecf25a87b806c6a9d879893b4f06f
// const Api_url = 'http://www.omdbapi.com/?apikey=96981757';
const Api_url = 'https://api.themoviedb.org/3/movie/popular?api_key=ca1ecf25a87b806c6a9d879893b4f06f';
// const API_KEY = 'YOUR_TMDB_API_KEY';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [redirect, setRedirect] = useState(false)


  const handleDataFromChild = (data) => {
    console.log("this is from parent",data);
    setSelectedMovie(data);
    console.log("this is from child", selectedMovie);
    setRedirect(true)
  };
  const searchMovies = async (title) => {
    console.log("this is search");
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ca1ecf25a87b806c6a9d879893b4f06f&query=${title}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setSearch(true)
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  async function fetchMovies() {
    await fetch(Api_url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        console.log(data.results[0]);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  useEffect(() => {
    { search ? searchMovies(searchTerm) : fetchMovies() }
  }, [search])
  return (
    <div className="App">
{redirect ? <MovieDescription movie={selectedMovie}/>:
 <div className="App">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) =>
                 <MovieCard movie={movie} sendDataToParent={handleDataFromChild} />
              )}
          </div>
        ) :
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
    
}
    </div>
    

  );
}

export default App;
