import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './search.svg'
import MovieCard from './MovieCart';
const Api_url = 'http://www.omdbapi.com/?apikey=96981757';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] =useState('');
  const searchMovies = async (title) => {
    const res = await fetch(`${Api_url}&s=${title}`);
    const data = await res.json();
    console.log(data);
    setMovies(data.Search)
  }
  async function fetchMovies() {
    try {
      const res = await fetch(`${Api_url}&s=*&type=movie&r=${2+2}`);
      const data = await res.json();
      if (data.Response === "True") {
        console.log(data.Search);
        setMovies(data.Search);
      } else {
        console.log("An error occurred:", data.Error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  useEffect(() => {
    // fetchMovies()
    searchMovies('spiderman')
  }, [])
  return (
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
        movies?.length > 0 ?(

          <div className='container'>
            {movies.map((movie)=>
            <MovieCard movie={movie} />)}
          </div> 
        ): 
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }

    </div>
  );
}

export default App;
