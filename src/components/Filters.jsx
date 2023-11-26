import React from "react";
import Search from "./Search";
import CurrencyExchange from "./CurrencyExchange";

const Filters = () => {
  return (
    <div className="w-full h-12 border border-lightgreen rounded-lg flex items-center justify-between relative px-3">
      <Search />
      <CurrencyExchange />
      <div>Sorting</div>
    </div>
  );
};

export default Filters;
