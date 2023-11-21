import React, { useState } from "react";
import SearchIcon from "../assets/search-icon.svg";

const Search = () => {
    
    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        let query = e.target.value;
        setSearchText(query)
        console.log(query);
    }

  return (
    <form className="w-96 relative flex items-center m">
      <input
        className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-lightgreen"
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Search Crypto..."
      />
      <button type="submit" className="absolute right-1">
        <img src={SearchIcon} className="w-[1.4rem]" alt="search" />
      </button>
    </form>
  );
};

export default Search;
