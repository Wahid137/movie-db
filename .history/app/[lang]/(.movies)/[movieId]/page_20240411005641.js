import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";

const PhotoModal = ({ params: { movieId, lang } }) => {

    return (
        <Modal>
            <MovieDetails id={movieId} lang={lang} />
        </Modal>
    )
}

export default PhotoModal;