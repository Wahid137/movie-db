import MovieCard from "@/components/MovieCard";
import SideBar from "@/components/SideBar";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const movies = await getDictionary("all")
  const dictionary = await getDictionary(lang)
  return (

    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {
              movies?.results?.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)
            }
          </div>
        </div>
      </div>
    </main>


  );
}
