import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = ({ params: { movieId, lang } }) => {

    return (
        <MovieDetails id={movieId} lang={lang} />
    );
};

export default MovieDetailsPage;