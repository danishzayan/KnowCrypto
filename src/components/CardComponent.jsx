import React, { useContext } from "react";
import bitcoin from "../assets/Bitcoin.svg.png";
import { CryptoContext } from "../context/CryptoContext";

const CardComponent = () => {
  const { cryptoData } = useContext(CryptoContext);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="relative border border-lightgreen py-4 px-6 rounded-3xl w-64 my-4 shadow-xl">
        <div className="flex items-center absolute rounded-full py-[1px] px-[1px] shadow-xl bg-lightgreen left-4 -top-7">
         <img src={bitcoin} className='w-[3.3rem] h-[3.3rem]' alt="" />
        </div>
        <span className="absolute px-2 rounded shadow-xl bg-lightgreen left-20 -top-3">BTC</span>
        <div className="mt-3">
          <div className="flex flex-row justify-between items-center">
          <p className="text-[1.5rem] font-semibold  my-2">Bitcoin</p>
          <p className="text-[1.4rem] text-[red]">❤</p>
          </div>
          <div className="flex justify-between text-[1.2rem]">
            <p className='text-gray-100 font-semibold'>Price:</p>
            <p className='text-green font-bold'>$156.00</p>
          </div>
          <div className="flex justify-between text-[1rem]">
            <p className='text-gray-100 font-semibold'>Market Cap:</p>
            <p className='text-[15px]'>- 0.120%</p>
          </div>
          <div className="flex justify-between text-[1rem]">
            <p className='text-gray-100 font-semibold'>1H:</p>
            <p className='text-[15px]'>0.23</p>
          </div>
          <div className="flex justify-between text-[1rem]">
            <p className='text-gray-100 font-semibold'>24H:</p>
            <p className='text-[15px]'>0.11</p>
          </div>
          <div className="flex justify-between text-[1rem]">
            <p className='text-gray-100 font-semibold'>7D:</p>
            <p className='text-[15px]'>- 1.26</p>
          </div>
          <div className='border-t-2 border-gray-200 mt-2'></div>

          <div className="flex justify-between">
            <div className="my-2">
              <p className="font-semibold text-base">Total Volume:</p>
            </div>
            <div className="my-2">
              <p className="font-semibold text-base">564487610</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
