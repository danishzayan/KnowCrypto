import React, { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

const CardComponent = () => {
  const { cryptoData } = useContext(CryptoContext);
  console.log("data is here==>", cryptoData);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-self-center">
      {cryptoData
        ? cryptoData.map((data) => (
            <div className="relative border border-lightgreen py-4 px-6 rounded-3xl w-64 my-4 shadow-xl">
              <div className="flex items-center border overflow-hidden absolute rounded-full py-[1px] px-[1px] shadow-xl bg-lightgreen left-4 -top-7">
                <img
                  src={data.image}
                  className="w-[3.3rem] h-[3.3rem] object-cover rounded-[50%]"
                  alt={data.id}
                />
              </div>
              <span className="absolute uppercase px-2 rounded font-semibold bg-lightgreen left-20 -top-3">
                {data.symbol}
              </span>
              <div className="mt-3">
                <dinv className="flex flex-row justify-between items-center">
                  <p className="text-[1.3rem] font-semibold  my-2">
                    {data.name}
                  </p>
                  <button className="outline-0 border-0 bg-none cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"
                        fill="#ff0000"
                      />
                    </svg>
                  </button>
                </dinv>
                <div className="flex justify-between text-[1.2rem]">
                  <p className="text-gray-100 font-semibold">Price:</p>
                  <p className="text-green font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "usd",
                    }).format(data.current_price)}
                  </p>
                </div>
                <div className="flex justify-between text-[1rem]">
                  <p className="text-gray-100 font-semibold">Market Cap:</p>
                  <p className="text-[15px]">
                    {data.market_cap_change_percentage_24h}%
                  </p>
                </div>
                <div className="flex justify-between text-[1rem]">
                  <p className="text-gray-100 font-semibold">1H:</p>
                  <p
                    className={`text-[15px] ${
                      data.price_change_percentage_1h_in_currency > 0
                        ? "text-green"
                        : "text-red"
                    }`}
                  >
                    {Number(
                      data.price_change_percentage_1h_in_currency
                    ).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-[1rem]">
                  <p className="text-gray-100 font-semibold">24H:</p>
                  <p
                    className={`text-[15px] ${
                      data.price_change_percentage_24h_in_currency > 0
                        ? "text-green"
                        : "text-red"
                    }`}
                  >
                    {Number(
                      data.price_change_percentage_24h_in_currency
                    ).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-[1rem]">
                  <p className="text-gray-100 font-semibold">7D:</p>
                  <p
                    className={`text-[15px] ${
                      data.price_change_percentage_7d_in_currency > 0
                        ? "text-green"
                        : "text-red"
                    }`}
                  >
                    {Number(
                      data.price_change_percentage_7d_in_currency
                    ).toFixed(2)}
                  </p>
                </div>
                <div className="border-t-2 border-gray-200 mt-2"></div>
                <div className="flex justify-between mt-2 ">
                  <p className="font-semibold text-[.9rem]">Total Volume:</p>
                  <p className="font-semibold text-[.9rem]">
                    {data.total_volume}
                  </p>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default CardComponent;
