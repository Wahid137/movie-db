import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = ({ params: { movieId, lang } }) => {
    console.log(typeof (movieId))
    return (
        <MovieDetails id={movieId} lang={lang} />
    );
};

export default MovieDetailsPage;