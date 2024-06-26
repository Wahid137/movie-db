import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default async function MovieDetails({ id, lang }) {
  const data = await getDictionary("all");
  const specificEntry = data?.results?.find(
    (entry) => Number(entry.id) == Number(id)
  );

  if (!data) {
    <p>Loading...</p>;
  }

  const {backdrop_path, overview, } = specialEntry;

  return (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={}
          alt=""
          width={300}
          height={500}
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src="https://image.tmdb.org/t/p/original/phmjv93zEwitWLJEOvlXPhtK58o.jpg"
            alt=""
            width={500}
            height={700}
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            Godzilla x Kong: The New Empire
          </h2>
          <p className="my-2 text-slate-400 italic">
            Following their explosive showdown, Godzilla and Kong must reunite
            against a colossal undiscovered threat hidden within our world,
            challenging their very existence – and our own.
          </p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>Release Date : 2024-03-27</li>
            <li>Average Vote : 7.5</li>
            <li>Vote Count : 81</li>
            <li>Popularity : 2461.857</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Stream In HD
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Download In HD
          </button>
        </div>
      </div>
    </section>
  );
}
