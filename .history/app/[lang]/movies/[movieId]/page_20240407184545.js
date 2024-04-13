import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = ({ params: { id, lang } }) => {
    console.log(id)
    return (
        <MovieDetails id={id} lang={lang} />
    );
};

export default MovieDetailsPage;