import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";

export default async function MovieDetails({ id, lang }) {
  const data = await getDictionary("all");
  const dictionary = await getDictionary(lang);

  const specificEntry = data?.results?.find(
    (entry) => Number(entry.id) == Number(id)
  );

  if (!data) {
    <p>Loading...</p>;
  }

  const {
    backdrop_path,
    overview,
    original_title,
    popularity,
    vote_average,
    vote_count,
    release_date,
    poster_path,
  } = specificEntry;

  return (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={backdrop_path}
          alt=""
          width={500}
          height={500}
        />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image src={poster_path} alt="" width={500} height={500} />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {original_title}
          </h2>
          <p className="my-2 text-slate-400 italic">{overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>
              {dictionary.release} : {release_date}
            </li>
            <li>
              {dictionary.average} : {vote_average.toFixed(1)}
            </li>
            <li>
              {dictionary.voteCount} : {vote_count}
            </li>
            <li>Popularity : {popularity}</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dictionary.stream}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dictionary.download}
          </button>
        </div>
      </div>
    </section>
  );
}
