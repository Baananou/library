import Link from 'next/link';
import React, { useState } from 'react'

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-secondary ">
        <div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link passHref href={"/"}>
            <div
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-primary"
            >
              Book.in | Microservices Mini-Project
            </div></Link>
            <button
              className="text-primary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="https://github.com/Baananou/library"
                >
                  <i className="fab fa-github-square text-lg leading-lg text-primary opacity-75"></i><span className="ml-2">Github Repo</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="https://www.linkedin.com/in/mohamed-yessine-baananou"
                >
                  <i className="fab fa-linkedin text-lg leading-lg text-primary opacity-75"></i><span className="ml-2">My LinkedIn</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="https://gitlab.com/Baananou"
                >
                  <i className="fab fa-gitlab text-lg leading-lg text-primary opacity-75"></i><span className="ml-2">My Gitlab</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="https://github.com/Baananou"
                >
                  <i className="fab fa-github text-lg leading-lg text-primary opacity-75"></i><span className="ml-2">My Github</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="/contact"
                >
                  <i className="fa-solid fa-user text-lg leading-lg text-primary opacity-75"></i><span className="ml-2">Contact Me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    )
}