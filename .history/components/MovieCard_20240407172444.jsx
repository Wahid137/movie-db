import Image from "next/image";
import star from "../public/assets/star.svg";
import tag from "../public/assets/tag.svg";

const MovieCard = ({ movie }) => {
  const { title, poster_path, genre_ids, vote_average, id } = movie;

  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
    10759: "Action & Adventure",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    10769: "Foreign",
    10771: "Reality TV",
    10775: "Teen",
    10779: "Sports",
    10780: "News & Politics",
    10781: "Late Night",
    10782: "Variety",
  };

  const movieGenres = genre_ids.map((genreId) => genres[genreId]).join("/");
  const numberOfStars = Math.round(vote_average / 2); // Assuming vote_average is out of 10

  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        width={300}
        height={500}
        src={poster_path}
        alt="cover"
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movieGenres}</p>
        <div className="flex items-center space-x-1 mb-5">
          {[...Array(numberOfStars)].map((_, index) => (
            <Image key={index} src={star} width={14} height={14} alt="star" />
          ))}
        </div>
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="./modal.html"
        >
          <Image src={tag} alt="tag" width={20} height={20} />
          <span>Details</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
