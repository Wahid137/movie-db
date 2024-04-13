"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <Link
      className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${
        active ? "bg-primary" : ""
      }`}
      href={path}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
