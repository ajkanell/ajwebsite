import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar2({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="">
        <div className="lg:max-w-5xl sm:max-w-3xl relative flex flex-wrap items-center py-3 mb-3 px-8 mx-auto justify-between">
          <div className="w-full lg:w-auto flex items-center justify-between ">
            <Link href="/">
              <a className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black">
                A.J Kanell
              </a>
            </Link>
            <button
              className="text-black cursor-pointer text-2xl flex justify-end leading-none pl-3 py-1 lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <HiOutlineX /> : <HiMenu />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-8">
              <li className="nav-item">
                <Link href="/tv">
                  <a
                    className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="">tv</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/radio">
                  <a
                    className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="">radio</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="https://sticktosports.medium.com"
                  target="_blank"
                >
                  <span className="">writing</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="https://podcasts.apple.com/us/podcast/coaches-4-change/id1536640509"
                  target="_blank"
                >
                  <span className="">c4c podcast</span>
                </a>
              </li>
              <li className="nav-item">
                <Link href="/resume">
                  <a
                    className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="">resume</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a
                    className=" py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <span className="">contact me</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
