import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import moviesData from '../movies-data.json';
const QueryStringMovie = () => {
  const [searchMovies, setSearchParams] = useSearchParams();
  const queryTitle = searchMovies.get('title');
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    const moviesF = moviesData.filter(movie => movie.title === queryTitle);
    setMovies(moviesF);
  }, []);
  console.log(movies);

  return(
    <div> 
      {
        movies.map(movie => {
          return <div key={movie._id}>
            <p>{movie.title}</p>
          </div>
        })
      }
    </div>
  )
};

export default QueryStringMovie;