"use client";
import { useEffect, useState, } from "react";
import { navberData } from "./data/NavberData";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const NavberTwo = () => {
  const [header, setHeader] = useState(false);
  const [open, setOpen] = useState(false)
  const handleNavber = () => {
    setOpen(!open)
  }

  const scrollHeader = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) { // Change this to your breakpoint
      setOpen(false); // Close menu on larger screens
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("scroll", scrollHeader)
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className={` w-full text-[12px] bg-white transition-all ease-in-out shadow-lg ${header
        ? " fixed  duration-500 ease-in-out top-0 py-3 text-black"
        : "duration-1000 ease-in py-3"
        }`}
    >


<div onClick={handleNavber} className={`absolute right-5 top-5 lg:hidden block `}>
        {open ? <RxCross2 /> : <MdOutlineMenu />}
      </div>
      <div className={`xl:w-[1140px] xl:px-0 lg:px-5 mx-auto flex items-center justify-between`}>
        <h1 className="text-3xl font-medium">Logo</h1>
        <ul
          className={`transition-transform  duration-700 ease-in-out flex lg:flex-row flex-col gap-4 top-16 lg:top-0 lg:static absolute 
            ${open ? "left-0 translate-x-0 opacity-100 lg:bg-white bg-gray-300 w-full pl-5 py-5 z-40" : "opacity-0 -translate-x-full"} 
            lg:opacity-100 lg:transition-none`}
        >
          {navberData.map((item, index) => (
            <li className="navber" key={index}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavberTwo;
