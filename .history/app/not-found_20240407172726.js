import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <h1>Not Found!!</h1>
            <Link
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="/"
            >

                <span>Go Home</span>
            </Link>
        </div>
    );
};

export default NotFound;