"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";


const NotFound = () => {
    const router = useSearchParams();
    console.log(router)
    /*  const { movieId } = router.query;
     console.log(movieId) */

    return (
        <div className="text-center">
            <h1 className="my-8 text-3xl font-bold">This movie with id was not found!</h1>
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