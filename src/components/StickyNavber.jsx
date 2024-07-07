"use client"
import { useEffect, useState } from "react";
import { navberData } from "./allData/NavberData";
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
    </div>
  );
};

export default StickyNavber;
