import movieList from "@/app/data/data";

export async function GET(_request, { params }) {
    const movieId = params.id;

    const movie = movieList?.results?.find(
        (movie) => movie.id === parseInt(movieId)
    );

    return Response.json(movie);
}

export async function PATCH(request, { params }) {
    const movie = await request.json();
    const movieId = params.id;
    const movieIndex = movieList.findIndex(
        (movie) => movie.id === parseInt(movieId)
    );
    movieList[movieIndex].text = movie.text;

    return Response.json(movieList[movieIndex]);
}