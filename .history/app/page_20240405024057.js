
export default function Home() {
  return (
    <main>
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <!-- Sidebar -->
        <aside>
          <ul class="space-y-2">
            <li>
              <a class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                <img src="./assets/icons/trending.svg" width="24" height="24" alt="">
                  <span>Trending</span>
              </a>
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

        <!-- Content -->
        <div class="content">
          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

            <!-- Begin Card -->
            <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
              <img class="w-full object-cover" src="./assets/movie-1.png" alt="">
                <figcaption class="pt-4">
                  <h3 class="text-xl mb-1">Iron Man</h3>
                  <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                  <div class="flex items-center space-x-1 mb-5">
                    <img src="./assets/star.svg" width="14" height="14" alt="">
                      <img src="./assets/star.svg" width="14" height="14" alt="">
                        <img src="./assets/star.svg" width="14" height="14" alt="">
                          <img src="./assets/star.svg" width="14" height="14" alt="">
                            <img src="./assets/star.svg" width="14" height="14" alt="">
                            </div>
                            <a class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                              href="./modal.html">
                              <img src="./assets/tag.svg" alt="">
                                <span>Details</span>
                            </a>
                          </figcaption>
                        </figure>
                        <!-- End Card -->

                        <!-- Begin Card -->
                        <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                          <img class="w-full object-cover" src="./assets/movie-1.png" alt="">
                            <figcaption class="pt-4">
                              <h3 class="text-xl mb-1">Iron Man</h3>
                              <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                              <div class="flex items-center space-x-1 mb-5">
                                <img src="./assets/star.svg" width="14" height="14" alt="">
                                  <img src="./assets/star.svg" width="14" height="14" alt="">
                                    <img src="./assets/star.svg" width="14" height="14" alt="">
                                      <img src="./assets/star.svg" width="14" height="14" alt="">
                                        <img src="./assets/star.svg" width="14" height="14" alt="">
                                        </div>
                                        <a class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                          href="./modal.html">
                                          <img src="./assets/tag.svg" alt="">
                                            <span>Details</span>
                                        </a>
                                      </figcaption>
                                    </figure>
                                    <!-- End Card -->

                                    <!-- Begin Card -->
                                    <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                      <img class="w-full object-cover" src="./assets/movie-1.png" alt="">
                                        <figcaption class="pt-4">
                                          <h3 class="text-xl mb-1">Iron Man</h3>
                                          <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                          <div class="flex items-center space-x-1 mb-5">
                                            <img src="./assets/star.svg" width="14" height="14" alt="">
                                              <img src="./assets/star.svg" width="14" height="14" alt="">
                                                <img src="./assets/star.svg" width="14" height="14" alt="">
                                                  <img src="./assets/star.svg" width="14" height="14" alt="">
                                                    <img src="./assets/star.svg" width="14" height="14" alt="">
                                                    </div>
                                                    <a class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                                      href="./modal.html">
                                                      <img src="./assets/tag.svg" alt="">
                                                        <span>Details</span>
                                                    </a>
                                                  </figcaption>
                                                </figure>
                                                <!-- End Card -->

                                                <!-- Begin Card -->
                                                <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                                  <img class="w-full object-cover" src="./assets/movie-1.png" alt="">
                                                    <figcaption class="pt-4">
                                                      <h3 class="text-xl mb-1">Iron Man</h3>
                                                      <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                                      <div class="flex items-center space-x-1 mb-5">
                                                        <img src="./assets/star.svg" width="14" height="14" alt="">
                                                          <img src="./assets/star.svg" width="14" height="14" alt="">
                                                            <img src="./assets/star.svg" width="14" height="14" alt="">
                                                              <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                </div>
                                                                <a class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                                                  href="./modal.html">
                                                                  <img src="./assets/tag.svg" alt="">
                                                                    <span>Details</span>
                                                                </a>
                                                              </figcaption>
                                                            </figure>
                                                            <!-- End Card -->

                                                            <!-- Begin Card -->
                                                            <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                                              <img class="w-full object-cover" src="./assets/movie-1.png" alt="">
                                                                <figcaption class="pt-4">
                                                                  <h3 class="text-xl mb-1">Iron Man</h3>
                                                                  <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                                                  <div class="flex items-center space-x-1 mb-5">
                                                                    <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                      <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                        <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                          <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                            <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                            </div>
                                                                            <a class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                                                              href="./modal.html">
                                                                              <img src="./assets/tag.svg" alt="">
                                                                                <span>Details</span>
                                                                            </a>
                                                                          </figcaption>
                                                                        </figure>
                                                                        <!-- End Card -->

                                                                        <!-- Begin Card -->
                                                                        <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                                                          <img class="w-full object-cover" src="./assets/movie-1.png" alt="">
                                                                            <figcaption class="pt-4">
                                                                              <h3 class="text-xl mb-1">Iron Man</h3>
                                                                              <p class="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                                                              <div class="flex items-center space-x-1 mb-5">
                                                                                <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                                  <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                                    <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                                      <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                                        <img src="./assets/star.svg" width="14" height="14" alt="">
                                                                                        </div>
                                                                                        <a class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                                                                          href="#">
                                                                                          <img src="./assets/tag.svg" alt="">
                                                                                            <span>Details</span>
                                                                                        </a>
                                                                                      </figcaption>
                                                                                    </figure>
                                                                                    <!-- End Card -->
                                                                                  </div>
                                                                              </div>
                                                                            </div>
                                                                          </main>
                                                                          );
}
