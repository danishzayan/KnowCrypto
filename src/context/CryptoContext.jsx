import axios from "axios";
import { createContext, useLayoutEffect, useState } from "react";

// creating context object
export const CryptoContext = createContext({});

// creating the context provider component for passing the data
export const CryptoProvider = ({ children }) => {

  const [cryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinSearch, setCoinSearch] = useState("");

  const getCryptoData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=12&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      //   console.log("crypto data =>", response.data);
      setCryptoData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  // const getCryptoData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinSearch}&order=market_cap_desc&per_page=12&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
  //     );

  //     //   console.log("crypto data =>", response.data);
  //     setCryptoData(response.data);
  //   } catch (error) {
  //     if (error.response && error.response.status === 429) {
  //       // Implement backoff and retry here
  //       await new Promise((resolve) => setTimeout(resolve, 5000)); // Example: Retry after 5 seconds
  //       getCryptoData(); // Retry the function
  //     } else {
  //       console.log(error);
  //     }
  //   }
  // };
  

  // Calling api for searching data
  const getSearchResult = async (query) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
    setSearchData(response.data.coins);
    // console.log("result ==>", response.data.coins);
  } catch (error) {
    console.log(error);
  }
};


  useLayoutEffect(() => {
    getCryptoData();
    // getSearchResult();
  }, [coinSearch]);

  return (
    <CryptoContext.Provider value={{ cryptoData, searchData, getSearchResult, setCoinSearch }}>
      {children}
    </CryptoContext.Provider>
  );
};
