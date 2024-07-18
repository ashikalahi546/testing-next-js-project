"use client";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const DarkLightMode = () => {
 const [darkmode, setDarkmode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkmode ? "dark" : "light");
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);
  const toggleDarkmode = () => {
    setDarkmode(prevDarkmode => !prevDarkmode);
  };

  return (
    <div>
      <div
        onClick={toggleDarkmode}
        className="w-16 h-8 flex items-center dark:bg-black relative bg-teal-500 cursor-pointer rounded-full p-1"
      >
        <FaMoon className="text-white" />
        <div
          className={`absolute bg-white dark:bg-white w-6 h-6 rounded-full transform transition-transform duration-300 ${
            darkmode ? "translate-x-8" : ""
          }`}
        ></div>
        <BsSunFill className="text-yellow-400 ml-auto" />
      </div>
    </div>
  );
};

export default DarkLightMode;
