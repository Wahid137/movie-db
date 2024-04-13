
const MovieModal = ({ params: { movieId, lang } }) => {

    return (
        <Modal>
            <MovieDetails id={movieId} lang={lang} />
        </Modal>
    )
}

export default PhotoModal;