import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    if (typeof window === "undefined") {
        // Return null during server-side rendering
        return null;
    }

    const { movieId } = router.query;

    return (
        <div className="text-center">
            <h1 className="my-8 text-3xl font-bold">This movie with {movieId} id was not found!</h1>
            <Link
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm w-1/4 mx-auto"
                href="/"
            >
                <span>Go Home</span>
            </Link>
        </div>
    );
};

export default NotFound;
