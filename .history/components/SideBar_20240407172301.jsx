import Image from "next/image";
import Link from "next/link";
import commingSoon from "../public/assets/icons/commingSoon.svg";
import favorite from "../public/assets/icons/favourite.svg";
import newRelease from "../public/assets/icons/newRelease.svg";
import trending from "../public/assets/icons/trending.svg";
import watchLater from "../public/assets/icons/watchLater.svg";

const SideBar = () => {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <Image src={trending} width={24} height={24} alt="Tending" />
              <span>Trending</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black"
              href="#"
            >
              <Image src={newRelease} width={24} height={24} alt="Tending" />
              <span>New Release</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image src={commingSoon} width={24} height={24} alt="" />
              <span>Coming Soon</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image src={favorite} width={24} height={24} alt="fav" />
              <span>Favourites</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <Image src={watchLater} width={24} height={24} alt="watch" />
              <span>Watch Later</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
