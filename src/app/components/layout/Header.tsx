import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#f1f1f1]  overflow-x-hidden">
      <div className="max-w-[1500px] mx-auto text-black p-4 flex justify-between items-center ">
      <Link href="/">
        <img
          src="/images/VeloceMorso.png"
          alt="Logo"
          className="h-[70px] object-cover"
        />
      </Link>
      <nav className="flex gap-x-8 font-semibold items-center">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/menu">
          Menu
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
        <Link className="hover:underline" href="/cart">
          Cart
        </Link>
        <Link
          className="bg-red1 py-2 px-3 text-white rounded-[4px] hover:bg-red-600"
          href="/login"
        >
          Login
        </Link>
      </nav>
      </div>
     
    </header>
  );
};

export default Header;
