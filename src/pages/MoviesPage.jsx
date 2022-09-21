import { useState } from "react";
import FormMovie from '../components/Form';
import ListMovie from "../components/ListMovie";
import moviesData from '../movies-data.json';

const MoviesPage = () => {
  const [movies, setMovies] = useState(moviesData);

  return (
    <>
      <ListMovie movies={movies} />
      <FormMovie movies={movies} setMovies={setMovies} />
    </>
  );
};

export default MoviesPage;
