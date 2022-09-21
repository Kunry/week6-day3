import { useState } from 'react';

const Form = ({ movies, setMovies }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    IMDBRating: 0,
    _id: Math.random()
  });

  const updateNewMovie = (e) => {
    const { value, name } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newMovie);
    const _movies = [...movies];
    _movies.push(newMovie);
    setMovies(_movies);
    setNewMovie({ title: '', director: '', IMDBRating: 0,  _id: Math.random() });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Title: </label>
        <input
          type='text'
          name='title'
          onChange={updateNewMovie}
          value={newMovie.title}
        />

        <label htmlFor=''>Director: </label>
        <input
          type='text'
          name='director'
          onChange={updateNewMovie}
          value={newMovie.director}
        />

        <label htmlFor=''>Rating: </label>
        <input
          type='number'
          name='IMDBRating'
          onChange={updateNewMovie}
          value={newMovie.IMDBRating}
        />
        <button type='submit'>Añadir usuario</button>
      </form>
    </div>
  );
};

export default Form;
