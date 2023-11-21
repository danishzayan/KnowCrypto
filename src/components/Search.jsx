import React, { useContext, useState } from "react";
import SearchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "debounce";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  let { searchData } = useContext(CryptoContext);

  const handleChange = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
    // console.log(query);
  };

  return (
    <form className="w-96 relative flex items-center m">
      <input
        className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-lightgreen"
        onChange={handleChange}
        value={searchText}
        type="text"
        name="search"
        placeholder="Search Crypto..."
      />
      <button type="submit" className="absolute right-1">
        <img src={SearchIcon} className="w-[1.4rem]" alt="search" />
      </button>
      {searchText.length > 0 ? (
        <ul className="absolute top-8 right-0 z-50 w-96 h-96 bg-gray-300 overflow-x-hidden border border-slate-600 rounded bg-opacity-60 backdrop-blur-md">
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  key={coin.id}
                  className="flex items-center mx-4 my-2 cursor-pointer"
                >
                  <img
                    src={coin.large}
                    className="w-[1.5rem] h-[1.5rem] object-cover rounded-[50%]"
                    alt={coin.id}
                  />
                  <span className="mx-1.5">{coin.name}</span>
                </li>
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </ul>
      ) : null}
    </form>
  );
};

const Search = () => {
  const { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (value) {
    getSearchResult(value);
  }, 2000);

  return (
    <>
      <SearchInput handleSearch={debounceFunc} />
    </>
  );
};

export default Search;
