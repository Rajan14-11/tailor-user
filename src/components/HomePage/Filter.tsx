import React from "react";
import { FiFilter } from "react-icons/fi";

function Filter() {
  const Filters = ["Relevance", "Delivery Time", "Rating", "Price"];
  return (
    <div className="bg-white h-fit md:pt-4 py-4 px-8 flex justify-between items-center border-b border-secondary">
      <div className="w-1/4 text-secondary font-bold cursor-none font-secondary">
        333 Tailors
      </div>
      <div className="flex items-center w-3/4 justify-end">
        <div className="hidden md:flex">
          {Filters.map((filter, index) => (
            <button
              className="p-2 hover:text-neutralFocus border-b-2 border-secondary mx-2 font-primary font-semibold"
              key={index}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center text-base font-semibold cursor-pointer">
          <FiFilter className="text-xl mr-2 text-primary" />
          <p className="hover:text-primary">More filters</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
