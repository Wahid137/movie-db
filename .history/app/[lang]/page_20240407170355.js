import MovieCard from "@/components/MovieCard";
import movieList from "../data/data";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const movies = movieList?.results;
  const dictionary = await getDictionary(lang)
  return (
    <div class="content">
      <p>{dictionary.followers}</p>
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {
          movies?.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)
        }

      </div>
    </div>
  );
}
