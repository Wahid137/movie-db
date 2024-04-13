import Image from "next/image";
import CustomLink from "./CustomLink";

const SideBar = () => {
  return (
    <>
      <aside>
        <ul class="space-y-2">
          <li>
            <CustomLink
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              path="#"
            >
              <Image
                src="/assets/icons/trending.svg"
                width={24}
                height={24}
                alt="Tending"
              />
              <span>Trending</span>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg text-black"
              path="#"
            >
              <Image
                src="/assets/icons/trending.svg"
                width={24}
                height={24}
                alt="Tending"
              />
              <span>New Release</span>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              path="#"
            >
              <Image
                src="/assets/icons/commingSoon.svg"
                width={24}
                height={24}
                alt=""
              />
              <span>Coming Soon</span>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              path="#"
            >
              <Image
                src="/assets/icons/favourite.svg"
                width={24}
                height={24}
                alt="fav"
              />
              <span>Favourites</span>
            </CustomLink>
          </li>
          <li>
            <CustomLink
              class="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              path="#w"
            >
              <Image
                src="/assets/icons/watchLater.svg"
                width={24}
                height={24}
                alt="watch"
              />
              <span>Watch Later</span>
            </CustomLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
