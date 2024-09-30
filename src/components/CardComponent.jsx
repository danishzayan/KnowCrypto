import React, { useContext, useState } from "react";
import { CryptoContext } from "../context/CryptoContext";

const CardComponent = () => {

  const { cryptoData, currency } = useContext(CryptoContext);
  const [isActive, setIsActive] = useState(false)
  
  const handleLike = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };



  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 place-self-center my-12">
      {cryptoData
        ? cryptoData.map((data) => (
            <div
              key={data.id}
              className="relative border border-lightgreen py-4 px-6 rounded-3xl w-full my-4 shadow-xl"
            >
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
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[1.3rem] truncate font-semibold  my-2">
                    {data.name}
                  </p>
                  <button className="outline-0 border-0 bg-none cursor-pointer">
                    <svg
                      onClick={handleLike}
                      className=""
                      title="Like Paperclip Attachment SVG File"
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill={isActive ? '#ff0000' : '#0f172a'}
                      stroke="#ff0000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between text-[1.2rem]">
                  <p className="text-gray-100 font-semibold">Price:</p>
                  <p className="text-green font-bold">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: currency,
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
                  <p className="font-semibold text-[.9rem] truncate">
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
