import React, { useContext }  from "react";
import selectIcon from "../assets/select-icon.svg";
import { CryptoContext } from "../context/CryptoContext";


const Sorting = () => {

    const {setSorting} = useContext(CryptoContext);

    const handleSorting = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setSorting(val);
    }

  return (
    <div>
      <form className="relative flex justify-center items-center">
        <label htmlFor="sortby" className="font-bold mr-2">
          Sort By:
        </label>
        <select
          onClick={handleSorting}
          className="rounded bg-gray-200 capitalize pl-2 required outline-0 border border-transparent focus:border-lightgreen"
          name="sortby"
        >
          <option value="market_cap_asc">market cap asc</option>
          <option value="market_cap_desc">market cap desc</option>
          <option value="volume_asc">volume asc</option>
          <option value="volume_desc">volume desc</option>
          <option value="id_asc">id asc</option>
          <option value="id_desc">id desc</option>
        </select>
        <img
          className="w-[.9rem] h-auto absolute right-[3px] top-[6px] pointer-events-none"
          src={selectIcon}
          alt="selecticon"
        />
      </form>
    </div>
  );
};

export default Sorting;
