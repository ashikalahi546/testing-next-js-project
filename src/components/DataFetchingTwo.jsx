"use client";
import React, { useEffect, useState } from "react";

const DataFetchingTwo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
    const [buttonLoading,setButtonLoading] = useState(false)
  const [itemToShow,setItemToShow] = useState(10)
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await res.json();
        setData(data.slice(0,itemToShow));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [itemToShow]);


  const handleLoader =async ()=>{
setButtonLoading(true)
try{
const res = await fetch('https://jsonplaceholder.typicode.com/comments')
const result = await res.json()
setData(preData => [...preData, ...result.slice(itemToShow,itemToShow + 10)])
setItemToShow(preItems => preItems + 10)
}finally{
    setButtonLoading(false)
}

  }
  return (
    <div>
      {loading && !data.length && (
        <div className="flex h-screen items-center justify-center">
        <div className="loading "></div>
        </div>
      ) }
        <div className="grid grid-cols-4 gap-5 m-10">
          {data.map((item) => (
            <div
              key={item?.id}
              className="border p-5 rounded-lg border-orange-500 space-y-3"
            >
              <p>{item?.name}</p>
              <p>{item?.email}</p>
              <p>{item?.body}</p>
            </div>
          ))}
        </div>
      

      <div className="w-40 mx-auto">
        <button onClick={()=>handleLoader()} className="bg-orange-500 px-5 py-2.5 rounded mb-10 text-white">{buttonLoading ? <div className="loading"></div> : "See More" }</button>
      </div>
    </div>
  );
};

export default DataFetchingTwo;
