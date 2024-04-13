import MovieCard from "@/components/MovieCard";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const movies = await getDictionary("all")
  console.log(movies)
  const dictionary = await getDictionary(lang)
  return (
    <div className="content">
      <p>{dictionary.followers}</p>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {
          movies?.results?.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)
        }

      </div>
    </div>
  );
}
