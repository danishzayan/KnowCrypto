import axios from "axios";
import { createContext, useLayoutEffect, useState } from "react";

// creating context object
export const CryptoContext = createContext({});

// creating the provider component
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();

  const getCryptoData = async () => {
    try {
      const data = await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
        )
        .then((response) => {
        //   console.log("crypto data =>", response.data);
          setCryptoData(response.data)
        });
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getCryptoData()
  }, [])

  return <CryptoContext.Provider value={{cryptoData}}>{children}</CryptoContext.Provider>;
};

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=16&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en
