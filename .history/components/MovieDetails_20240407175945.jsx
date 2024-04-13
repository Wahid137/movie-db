import movies from "../app/data/data.js";

const MovieDetails = ({ id, lang }) => {
  const singleMovie = movies?.find((movie) => movie.id == id);
  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
};

export default MovieDetails;
