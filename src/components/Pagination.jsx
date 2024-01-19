import React, { useState } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";

const Pagination = () => {
  // const [currentPage, setCurrentPage] = useState(1);

  // const TotalNumber = 250;

  // const nextButton = () => {
  //   if (currentPage === TotalNumber) {
  //     return null;
  //   } else {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const prevButton = () => {
  //   if (currentPage === 1) {
  //     return null;
  //   } else {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const multiStepNext = () => {
  //   if (currentPage + 3 >= TotalNumber) {
  //     setCurrentPage(TotalNumber - 1);
  //   } else {
  //     setCurrentPage(currentPage + 3);
  //   }
  // };

  // const multiStepPrev = () => {
  //   if (currentPage - 3 <= 1) {
  //     setCurrentPage(TotalNumber + 1);
  //   } else {
  //     setCurrentPage(currentPage - 2);
  //   }
  // };

  return (
    <div className='flex items-center'>
      <ul className="flex items-center justify-end text-sm">
        <li  className='flex items-center'>
          <button className='outline-0 hover:text-lightgreen w-8'>
            <img className='w-full h-auto rotate-180' src={paginationArrow} alt="leftArrow" />
          </button>
        </li>
        <li><button>...</button></li>
        <li><button>1</button></li>
        <li><button>2</button></li>
        <li><button>3</button></li>
        <li><button>...</button></li>
        <li><button>100</button></li>
        <li>
          <button>
            <img className='w-full h-auto' src={paginationArrow} alt="leftArrow" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
