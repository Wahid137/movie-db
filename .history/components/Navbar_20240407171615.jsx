import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src={logo} width={139} height={26} alt="logo" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="../public/assets/ring.svg"
                width={24}
                height={24}
                alt="ring"
              />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="../public/assets/sun.svg"
                width={24}
                height={24}
                alt="sun"
              />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="../public/assets/shopping-cart.svg"
                width={24}
                height={24}
                alt="cart"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
