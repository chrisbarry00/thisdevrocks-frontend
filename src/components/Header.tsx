import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-[#0d0d0f] text-gray-200 shadow-md px-4 md:px-8 py-4 flex justify-between items-center border-b border-[#5C96FE]">
      <Logo />
      <NavBar />
      <MobileMenu />
    </header>
  );
};

export default Header;
