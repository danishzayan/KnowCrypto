import React, { useContext, useState } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";

const Pagination = () => {
  
  let {page, setPage} = useContext(CryptoContext);

  const TotalNumber = 250;

  const nextButton = () => {
    if (page === TotalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prevButton = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(TotalNumber + 1);
    } else {
      setPage(page - 2);
    }
  };

  return (
    <div className='flex items-center'>
      <ul className="flex items-center justify-end text-sm">
        <li  className='flex items-center'>
          <button className='outline-0 hover:text-lightgreen w-8' onClick={prevButton}>
            <img className='w-full h-auto rotate-180' src={paginationArrow} alt="leftArrow" />
          </button>
        </li>
        <li><button onClick={multiStepPrev} className='outline-0 hover:text-lightgreen w-8 h-8 justify-center text-lg'>...</button></li>
        <li><button onClick={prevButton} className='outline-0 hover:text-lightgreen w-8 h-8 justify-center bg-gray-200 mx-1.5'>{page - 1}</button></li>
        <li><button disabled className='outline-0  w-8 h-8 justify-center bg-lightgreen text-gray-200 mx-1.5'>{page}</button></li>
        <li><button onClick={nextButton} className='outline-0 hover:text-lightgreen w-8 h-8 justify-center bg-gray-200 mx-1.5'>{page + 1}</button></li>
        {
          page + 1 !== TotalNumber && page !== TotalNumber ? <li><button onClick={multiStepNext} className='outline-0 hover:text-lightgreen w-8 h-8 justify-center text-lg'>...</button></li> : null
        }
        {
          page !== TotalNumber ? <li><button onClick={() => setPage(TotalNumber)} className='outline-0 hover:text-lightgreen w-8 h-8 justify-center bg-gray-200 mx-1.5' >{TotalNumber}</button></li> : null
        }
        <li>
          <button className='outline-0 hover:text-lightgreen w-8' onClick={nextButton}>
            <img className='w-full h-auto' src={paginationArrow} alt="RightArrow" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
