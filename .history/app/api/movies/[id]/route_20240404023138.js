import movieList from "@/app/data/data";

export async function GET(_request, { params }) {
    const movieId = params.id;

    const movie = movieList.find(
        (movie) => movie.id === (movieId)
    );

    return Response.json(comment);
}