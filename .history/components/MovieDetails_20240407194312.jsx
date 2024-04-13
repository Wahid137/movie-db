import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function MovieDetails({ id, lang }) {
  const data = await getDictionary("all");
  const specificEntry = data.find((entry) => entry.id === id);

  return (
    <div>
      <h1>Movie Details: {specificEntry.title}</h1>
    </div>
  );
}
