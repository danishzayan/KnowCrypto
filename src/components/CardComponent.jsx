import React, { useContext } from "react";
import bitcoin from "../assets/Bitcoin.svg.png";
import { CryptoContext } from "../context/CryptoContext";

const CardComponent = () => {
  const { cryptoData } = useContext(CryptoContext);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* <div classNameName="h-[10rem] p-4 border border-lightgreen rounded shadow-lg shadow-[#ffffff10] hover:shadow-xl hover:transform hover:scale-105 duration-300">
        <div classNameName="flex flex-row justify-between items-center">
          <img src={bitcoin} alt="" classNameName="w-[2.5rem] h-[2.5rem] rounded" />
          <h3 classNameName="text-[1.2rem] tracking-wider">Bitcoin</h3>
        </div>
      </div> */}

      <div className="relative border border-lightgreen py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
        <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
         
        </div>
        <div className="mt-8">
          <p className="text-large font-semibold my-2">App Development</p>
          <div className="flex space-x-2 text-gray-400 text-sm">
            {/* <!-- svg  --> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg> */}
            <p>Marketing Team</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            {/* <!-- svg  --> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg> */}
            <p>1 Weeks Left</p>
          </div>
          <div className="border-t-2"></div>

          <div className="flex justify-between">
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Team Member</p>
              <div className="flex space-x-2">
                
              </div>
            </div>
            <div className="my-2">
              <p className="font-semibold text-base mb-2">Progress</p>
              <div className="text-base text-gray-400 font-semibold">
                <p>34%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
