
const MovieDetails = ({ id, lang }) => {
    const data = await getDictionary('all');
    const entry = data.find(entry => entry.id === 'specificID');

  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
};

export default MovieDetails;
