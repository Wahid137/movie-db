import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = ({ params: { movieId, lang } }) => {
    console.log(movieId)
    return (
        <MovieDetails id={movieId} lang={lang} />
    );
};

export default MovieDetailsPage;