import axios from "axios";
import { createContext, useLayoutEffect, useState } from "react";

// creating context object
export const CryptoContext = createContext({});

// creating the context provider component for passing the data
export const CryptoProvider = ({ children }) => {
  
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [sorting, setSorting] = useState("market_cap_desc");

  // Calling api crypto data
  const getCryptoData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sorting}&per_page=12&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      //   console.log("crypto data =>", response.data);
      setCryptoData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Calling api for searching data
  const getSearchResult = async (query) => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      setSearchData(response.data.coins);
      // console.log("result ==>", response.data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sorting]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        currency,
        setCurrency,
        sorting,
        setSorting,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
