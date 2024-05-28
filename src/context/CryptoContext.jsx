import axios from "axios";
import { createContext, useLayoutEffect, useState, useCallback } from "react";
import debounce from "lodash.debounce";

// creating context object
export const CryptoContext = createContext({});

// creating the context provider component for passing the data
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [sorting, setSorting] = useState("market_cap_desc");
  const [page, setPage] = useState(1);

  // Debounced function to handle search
  const debouncedGetSearchResult = useCallback(
    debounce((query) => {
      getSearchResult(query);
    }, 500),
    []
  );

  // Fetch initial crypto data
  const getInitialCryptoData = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sorting}&per_page=16&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`);
      setCryptoData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch updated crypto data based on search, currency, sorting, and page
  const getUpdatedCryptoData = async () => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sorting}&per_page=16&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`);
      setCryptoData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch search results
  const getSearchResult = async (query) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
      setSearchData(response.data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  // Use layout effect to fetch data on initial render and subsequent updates
  useLayoutEffect(() => {
    if (coinSearch) {
      getUpdatedCryptoData();
    } else {
      getInitialCryptoData();
    }
  }, [coinSearch, currency, sorting, page]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult: debouncedGetSearchResult,
        setCoinSearch,
        currency,
        setCurrency,
        sorting,
        setSorting,
        page,
        setPage,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
