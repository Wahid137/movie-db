import movies from "../app/data/data.js";

const MovieDetails = ({ id, lang }) => {
  console.log(movies);
  console.log("type", typeof id);

  const singleMovie = movies.results?.find((movie) => movie.id == 1049948);
  console.log(singleMovie);

  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
};

export default MovieDetails;
