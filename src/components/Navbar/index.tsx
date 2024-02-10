"use client";

import React, { useState } from "react";
import logo from "../../../public/assets/icon/mystrelLogo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/reusable/button";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <nav className="hidden lg:flex lg:flex-row justify-between items-center px-10 py-8">
        <Link href="">
          <Image src={logo} alt="myStrel" />
        </Link>
        <ul className="flex gap-[80px] text-[#2F3C37]">
          <Link href="">About</Link>
          <Link href="">Resources</Link>
          <Link href="">Pricing</Link>
        </ul>
        <ul className="flex items-center justify-normal gap-4">
          <Button className="bg-[#fff] text-[#287B81] border-[#287B81] border px-5 py-3 rounded-[18px] font-normal">
            Sign Up
          </Button>
          <Button className="bg-[#287B81] text-[#fff] border-[#287B81] border px-5 py-3 rounded-[18px] font-normal">
            Login
          </Button>
        </ul>
      </nav>
      {/* Mobile View */}
      <nav className="flex flex-col lg:hidden justify-between items-start px-5 py-4 relative">
        <Link href="">
          <Image src={logo} alt="myStrel" />
        </Link>
        <div
          onClick={handleShowNav}
          className="absolute top-[1.5rem] right-[1rem] z-30 w-6 h-6 cursor-pointer"
        >
          {showNav ? (
            <IoCloseSharp className="w-full h-full object-cover" />
          ) : (
            <IoMenuSharp className="w-full h-full object-cover" />
          )}
        </div>
        <ul
          className={
            showNav
              ? ` flex flex-col items-center gap-[15%] py-[70px] text-[#2F3C37] bg-[#fff] absolute top-0 left-0 w-full h-[70vh] shadow-sm z-20 transition duration-1000 ease-in-out`
              : `flex flex-col items-center gap-[15%] py-[70px] text-[#2F3C37] bg-[#fff] absolute top-0 left-[-100%] w-full h-[70vh] shadow-sm z-20 transition duration-1000 ease-in-out`
          }
        >
          <Link href="">About</Link>
          <Link href="">Resources</Link>
          <Link href="">Pricing</Link>
          <ul className="flex flex-col items-center justify-normal gap-4 w-full">
            <Button className="bg-[#fff] text-[#287B81] w-[70%] border-[#287B81] border px-5 py-3 rounded-[18px] font-normal">
              Sign Up
            </Button>
            <Button className="bg-[#287B81] text-[#fff] w-[70%] border-[#287B81] border px-5 py-3 rounded-[18px] font-normal">
              Login
            </Button>
          </ul>
        </ul>
        {/* <ul className="flex items-center justify-normal gap-4">
          <Button className="bg-[#fff] text-[#287B81] border-[#287B81] border px-5 py-3 rounded-[18px] font-normal">
            Sign Up
          </Button>
          <Button className="bg-[#287B81] text-[#fff] border-[#287B81] border px-5 py-3 rounded-[18px] font-normal">
            Login
          </Button>
        </ul> */}
      </nav>
    </>
  );
};

export default Navbar;
