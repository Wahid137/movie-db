import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function MovieDetails = ({ id, lang }) => {

      const data = await getDictionary("all");
      const specificEntry = data.find((entry) => entry.id === id);
    


  if (!entry) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Movie Details: {entry.title}</h1>
    </div>
  );
};

