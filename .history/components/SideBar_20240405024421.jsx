import Link from "next/link";

const SideBar = () => {
    return (
      <>
        <aside>
        <ul class="space-y-2">
          <li>
            <Link class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
              <img src="./assets/icons/trending.svg" width="24" height="24" alt="">
                <span>Trending</span>
            </Link>
          </li>
          <li>
            <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
              <img src="./assets/icons/newRelease.svg" width="24" height="24" alt="">
                <span>New Releases</span>
            </a>
          </li>
          <li>
            <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
              <img src="./assets/icons/commingSoon.svg" width="24" height="24" alt="">
                <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
              <img src="./assets/icons/favourite.svg" width="24" height="24" alt="">
                <span>Favourites</span>
            </a>
          </li>
          <li>
            <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
              <img src="./assets/icons/watchLater.svg" width="24" height="24" alt="">
                <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
      </>
    );
};

export default SideBar;