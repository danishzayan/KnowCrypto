import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const TotalNumber = 250;

  const nextButton = () => {
    if (currentPage === TotalNumber) {
      return null;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevButton = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const multiStepNext = () => {
    if (currentPage + 3 >= TotalNumber) {
      setCurrentPage(TotalNumber - 1);
    } else {
      setCurrentPage(currentPage + 3);
    }
  };

  const multiStepPrev = () => {
    if (currentPage - 3 <= TotalNumber) {
      setCurrentPage(TotalNumber + 1);
    } else {
      setCurrentPage(currentPage - 2);
    }
  };

  return (
    <nav class="flex items-center justify-center mt-10 gap-x-1">
      <button
        onClick={prevButton}
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-lightgreen focus:outline-none focus:bg-lightgreen disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <svg
          class="flex-shrink-0 w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span aria-hidden="true" class="sr-only">
          Previous
        </span>
      </button>
      <div class="flex items-center gap-x-1">
        <div class="hs-tooltip inline-block">
          <button
            type="button"
            class="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-lightgreen disabled:opacity-50 disabled:pointer-events-none dark:text-gray-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
          >
            <span class="group-hover:hidden text-xs">•••</span>
            <svg
              class="group-hover:block hidden flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 17L13 12 18 7" />
              <path d="M11 17L6 12 11 7" />
            </svg>
            <span
              class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              Previous 3 pages
            </span>
          </button>
        </div>
        <button
          onClick={prevButton}
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-lightgreen py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-lightgreen disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-current="page"
        >
          {currentPage - 1}
        </button>
        <button
          disabled
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent bg-lightgreen text-gray-800 hover:bg-lightgreen py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-lightgreen disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          {currentPage}
        </button>
        <button
          onClick={nextButton}
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-lightgreen py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-lightgreen disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          {currentPage + 1}
        </button>
        <div class="hs-tooltip inline-block">
          <button
            type="button"
            class="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-lightgreen disabled:opacity-50 disabled:pointer-events-none dark:text-gray-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
          >
            <span class="group-hover:hidden text-xs">•••</span>
            <svg
              class="group-hover:block hidden flex-shrink-0 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
            <span
              class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              Next 3 pages
            </span>
          </button>
        </div>
        <button
          onClick={() => setCurrentPage(TotalNumber)}
          type="button"
          class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-lightgreen py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-lightgreen disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          {TotalNumber}
        </button>
      </div>
      <button
        onClick={nextButton}
        type="button"
        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-lightgreen focus:outline-none focus:bg-lightgreen disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <span aria-hidden="true" class="sr-only">
          Next
        </span>
        <svg
          class="flex-shrink-0 w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
