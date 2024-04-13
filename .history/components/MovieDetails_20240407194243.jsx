import { getDictionary } from "./path/to/your/util";

export default async function MovieDetails({ id, lang }) {
  const data = await getDictionary("all");
  const specificEntry = data.find((entry) => entry.id === id);

  return (
    <div>
      <h1>Movie Details</h1>
    </div>
  );
}
