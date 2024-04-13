import movieList from "@/app/data/data";

export async function GET(_request, { params }) {
    const movieId = params.id;

    const movie = movieList?.results?.find(
        (movie) => movie.id === parseInt(movieId)
    );

    return Response.json(movie);
}