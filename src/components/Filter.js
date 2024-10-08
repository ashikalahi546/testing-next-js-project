"use client";

import { useState } from "react";
import { filterData } from "./FilterData";

const Filter = () => {
  const [filtering, setFiltering] = useState("CorporatePlan");

  const handleClick = (plan) => {
    setFiltering(plan);
  };

  const filteredData = filterData.filter((item) => item.type === filtering);

  return (
    <div>
      <div className="flex justify-center gap-5 mt-5">
        <button
          onClick={() => handleClick("HomePlan")}
          aria-pressed={filtering === "HomePlan"}
          className={`text-white px-5 py-2 rounded ${
            filtering === "HomePlan"
              ? "bg-red-600 duration-300 transition-all ease-in-out"
              : "bg-orange-300 duration-300 transition-all ease-in-out"
          }`}
        >
          HomePlan
        </button>
        <button
          onClick={() => handleClick("CorporatePlan")}
          aria-pressed={filtering === "CorporatePlan"}
          className={`text-white px-5 py-2 rounded ${
            filtering === "CorporatePlan"
              ? "bg-red-600 duration-300 transition-all ease-in-out"
              : "bg-orange-300 duration-300 transition-all ease-in-out"
          }`}
        >
          CorporatePlan
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 p-10">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="border p-5">
              <h1>{item.name}</h1>
              <h1>{item.type}</h1>
              <h1>monthly: {item.price.monthly}</h1>
              <h1>yearly: {item.price.yearly}</h1>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center">
            <h2>No plans available for this filter.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
