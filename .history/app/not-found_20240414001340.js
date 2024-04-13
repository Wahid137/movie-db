import Link from "next/link";

const NotFound = () => {
    return (
        <div className="mx-auto">
            <h1>Not Found!!</h1>
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