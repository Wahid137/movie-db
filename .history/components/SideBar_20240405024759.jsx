import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <>
      <aside>
        <ul class="space-y-2">
          <li>
            <Link
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img
                src="/assets/icons/trending.svg"
                width={24}
                height={24}
                alt="Tending"
              />
              <span>Trending</span>
            </Link>
          </li>
          <li>
            <Link
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image
                src="/assets/icons/trending.svg"
                width={24}
                height={24}
                alt="Tending"
              />
              <span>New Release</span>
            </Link>
          </li>
          <li>
            <Link
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="/assets/icons/commingSoon.svg"
                width={24}
                height={24}
                alt=""
              />
              <span>Coming Soon</span>
            </Link>
          </li>
          <li>
            <Link
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="/assets/icons/favourite.svg"
                width={24}
                height={24}
                alt="fav"
              />
              <span>Favourites</span>
            </Link>
          </li>
          <li>
            <Link
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image
                src="/assets/icons/watchLater.svg"
                width="24"
                height="24"
                alt=""
              />
              <span>Watch Later</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
