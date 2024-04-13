import movies from "../app/data/data.js";

const MovieDetails = ({ id, lang }) => {
  const singleMovie = movies.results?.find((movie) => movie.id == id);
  console.log(singleMovie);
  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
};

export default MovieDetails;
