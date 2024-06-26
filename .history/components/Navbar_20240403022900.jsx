import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav class="container flex items-center justify-between space-x-10 py-6">
        <Link href="index.html">
          <Image src="./assets/logo.svg" width={139} height={26} alt="logo" />
        </Link>

        <ul class="flex items-center space-x-5">
          <li>
            <Link
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/assets/ring.svg" width={24} height={24} alt="ring" />
            </Link>
          </li>
          <li>
            <Link
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="/assets/icons/sun.svg"
                width={24}
                height={24}
                alt="sun"
              />
            </Link>
          </li>
          <li>
            <Link
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src="./assets/shopping-cart.svg"
                width="24"
                height="24"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
