import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="border-b-2 border-gray-300 py-3 px-4 flex justify-between items-center">
        <Link href={"/"} className="text-lg font-semibold">
          {" "}
          ❄️ Dev-Story
        </Link>
        <nav className="space-x-3">
          <Link href={"/about"}>About</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
          <Link href={"/tutorials"}>Tutorials</Link>
          <Link href={"/stories"}>Stories</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
