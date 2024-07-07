"use client";
import React, { useState } from "react";
import { useEffect } from "react";

const NavberTwo = () => {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <div className="bg-red-500 h-10 ">
      <ul
        className={`flex items-center justify-center gap-5 text-white ${
          header
            ? "top-0 fixed bg-blue-600 w-full h-10 duration-300 ease-in-out "
            : "  h-10  top-0 duration-300 ease-in"
        }`}
      >
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default NavberTwo;
