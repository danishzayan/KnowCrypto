import React from "react";
import Search from "./Search";
import CurrencyExchange from "./CurrencyExchange";
import Sorting from "./Sorting";


const Filters = () => {
  return (
    <div className="w-full h-12 border border-lightgreen rounded-lg flex items-center justify-between relative px-3">
      <Search />
      <CurrencyExchange />
      <Sorting />
    </div>
  );
};

export default Filters;
