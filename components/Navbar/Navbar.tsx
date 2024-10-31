"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../public/logo.png'
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-blue-950 border-blue-900 text-white border-b bg-background">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
           {open ? <FaTimes /> : <FaBars />}
           </div>
        </div>
        <ul className="hidden sm:hidden capitalize  items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>

          <NavLinks />

          <Link href="/blog" className="py-7 px-3 inline-block">
              Blog
            </Link>

            <Link href="/contact" className="py-7 px-3 inline-block">
              Contact
            </Link>
        </ul>
        <div className="md:block hidden">
          
        </div>
        {/* Mobile nav */}
        <ul
  className={`
    md:hidden bg-gray-200 text-black fixed w-full top-0 bottom-0 py-24 pl-4
    max-h-screen overflow-y-scroll duration-500 ${open ? "left-0" : "left-[-100%]"}
  `}
>
  <li>
    <Link href="/" className="py-7 px-3 inline-block">
      Home
    </Link>
  </li>
  <NavLinks />

  <Link href="/blog" className="py-7 px-3 inline-block">
    Blog
  </Link>

  <Link href="/contact" className="py-7 px-3 inline-block">
    Contact
  </Link>
</ul>

      </div>
    </nav>
  );
};

export default Navbar;