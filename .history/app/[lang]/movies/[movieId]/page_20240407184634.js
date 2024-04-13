import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = ({ params: { movieId, lang } }) => {
    console.log(id)
    return (
        <MovieDetails id={id} lang={lang} />
    );
};

export default MovieDetailsPage;