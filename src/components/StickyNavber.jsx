"use client"
import Cloud from "/public/images/13.webp"
import { useEffect, useState } from "react";
import { navberData } from "./allData/NavberData";
import Image from "next/image";
const StickyNavber = () => {
  const [header,setHeader] = useState(false);
  const scrollHeader = ()=>{
    if(window.scrollY >= 10){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',scrollHeader)
    return ()=> window.removeEventListener('scroll',scrollHeader)
  },[]) 
  return (
    <div className="bg-blue-500 h-screen ">
      <ul className={`flex items-center justify-center gap-8 text-white  ${header ? 'bg-pink-500 fixed w-full h-16  top-0 duration-300 ease-in-out ' : '  duration-100 h-16  ease-in-out top-0'}`}>
        {navberData.map((item, i) => (
          <li className="navber" key={i}>
            {item?.title}
          </li>
        ))}
      </ul>

      <div className="flex justify-center py-20 image-opacity">
        <Image src={Cloud} alt="loading....?"/>
      </div>
    </div>
  );
};

export default StickyNavber;
