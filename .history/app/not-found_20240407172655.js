
const NotFound = () => {
    return (
        <div>
            <h1>Not Found!!</h1>
            <Link
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href={`movie/${id}`}
            >
                <Image src={tag} alt="tag" width={20} height={20} />
                <span>Details</span>
            </Link>
        </div>
    );
};

export default NotFound;