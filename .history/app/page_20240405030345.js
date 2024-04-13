import MovieCard from "@/components/MovieCard";

export default function Home() {
  return (

    <div class="content">
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        <MovieCard />

      </div>
    </div>

  );
}
