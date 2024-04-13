import MovieDetails from "@/components/MovieDetails";
import SideBar from "@/components/SideBar";
import { getDictionary } from "../../dictionaries";

const MovieDetailsPage = async ({ params: { movieId, lang } }) => {
    const dictionary = await getDictionary(lang)

    return (
        <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <SideBar dictionary={dictionary} />
                <MovieDetails id={movieId} lang={lang} />
            </div>
        </main>
    );
};

export default MovieDetailsPage;