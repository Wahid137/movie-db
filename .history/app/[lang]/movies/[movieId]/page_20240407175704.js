import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = ({ params: { id } }) => {
    return (
        <MovieDetails id={id} />
    );
};

export default MovieDetailsPage;