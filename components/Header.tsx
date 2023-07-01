import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  const categoryLinkStyles =
    "underline-drop cursor-pointer text-2xl font-light";

  return (
    <nav className="m-2 flex items-center justify-center px-2 py-2">
      <ul className="flex flex-wrap items-center justify-center">
        <li className="mb-8 flex basis-full justify-center lg:order-2 lg:basis-auto">
          <Link
            href="/posts"
            className="mx-4 cursor-pointer text-6xl font-bold"
          >
            Arukeyo
          </Link>
        </li>
        <li className="mx-2 pb-4 lg:order-1">
          <Link href="/categories/programming" className={categoryLinkStyles}>
            Programming
          </Link>
        </li>
        <li className="mx-2 pb-4 lg:order-1">
          <Link href="/categories/music" className={categoryLinkStyles}>
            Music
          </Link>
        </li>
        <li className="mx-2 pb-4 lg:order-3">
          <Link href="/categories/japanese" className={categoryLinkStyles}>
            Japanese
          </Link>
        </li>

        <li className="mx-2 pb-4 lg:order-3">
          <Link href="/categories/movies" className={categoryLinkStyles}>
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
