import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function MovieDetails({ id, lang }) {
  const data = await getDictionary("all");
  console.log(data);
  const specificEntry = data?.results?.find((entry) => entry.id === id);
  console.log("space", specificEntry);

  if (!data) {
    <p>Loading.</p>;
  }

  return (
    <div>
      <h1>Movie Details: {specificEntry.title}</h1>
    </div>
  );
}
