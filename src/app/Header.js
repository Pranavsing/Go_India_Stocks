//Header.js//
import React from "react";

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header
      className={`flex justify-between items-center py-4 px-8 bg-blue-700 text-white ${
        isMenuOpen ? "pl-64" : ""
      }`}
    >
      <button onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <h1 className="text-xl">My App</h1>
      <div></div>
    </header>
  );
};

export default Header;
