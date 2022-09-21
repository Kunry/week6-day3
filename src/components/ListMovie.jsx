
const ListMovie = ({ movies }) => {


  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie._id}>
            <h2>{movie.title}</h2>
            <p>{movie.director}</p>
            <p>{movie.IMDBRating}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListMovie;
