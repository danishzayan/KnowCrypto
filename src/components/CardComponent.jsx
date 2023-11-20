import React, { useContext } from "react";
import bitcoin from "../assets/Bitcoin.svg.png";
import { CryptoContext } from "../context/CryptoContext";

const CardComponent = () => {
  const { cryptoData } = useContext(CryptoContext);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="relative border border-lightgreen py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
        <div className="flex items-center absolute rounded-full py-[1px] px-[1px] shadow-xl bg-lightgreen left-4 -top-7">
         <img src={bitcoin} className='w-[3.3rem] h-[3.3rem]' alt="" />
        </div>
        <span className="absolute px-2 rounded shadow-xl bg-lightgreen left-20 -top-3">BTC</span>
        <div className="mt-3">
          <div className="flex flex-row justify-between items-center">
          <p className="text-[1.5rem] font-semibold  my-2">Bitcoin</p>
          <p className="text-[1.4rem] text-[red] bg-white p-1">❤</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm">
            <p>Marketing Team</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <p>1 Weeks Left</p>
          </div>
          <div className="border-t-2"></div>

          <div className="flex justify-between">
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Team Member</p>
            </div>
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
