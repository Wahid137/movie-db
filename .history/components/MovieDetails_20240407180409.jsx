import movies from "../app/data/data.js";

const MovieDetails = ({ id, lang }) => {
  console.log(movies);
  console.log(typeof id);

  const singleMovie = movies.results?.find((movie) => movie.id == id);
  console.log(singleMovie);
  console.log(typeof movie.id);

  return (
    <div>
      <h1>Movie Details: {singleMovie.title}</h1>
    </div>
  );
};

export default MovieDetails;
