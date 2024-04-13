import MovieCard from "@/components/MovieCard";

export default function Home() {
  return (
    <main>
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <div class="content">
          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            <MovieCard />

          </div>
        </div>
      </div>
    </main>
  );
}
