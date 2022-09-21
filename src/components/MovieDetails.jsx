import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import moviesData from '../movies-data.json';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { idMovie } = useParams();

  useEffect(() => {
    const find = moviesData.find((movie) => movie._id === idMovie);
    setMovie(find);
  }, [idMovie]);
// poner fantasias de condicionales
/**
 * return <div>{movie && <p>{movie.title}</p>}</div>;
 * return <div>{<p>{movie?.title}</p>}</div>;
 */
  return <div>{movie ? <p>{movie.title}</p> : null}</div>;
};

export default MovieDetails;
