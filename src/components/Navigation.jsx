import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-[80%] mt-16 flex justify-around align-middle border border-lightgreen rounded-lg">
      <NavLink
        to="/"
        end
        data-tabs="tabs"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5                            
                ${
                  isActive
                    ? "bg-lightgreen text-gray-300"
                    : "bg-gray-200 text-gray-100 hover:text-lightgreen active:bg-lightgreen  active:text-gray-300"
                }
                border-0 cursor-pointer rounded capitalize font-semibold `;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        data-tabs="tabs"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5                            
                  ${
                    isActive
                      ? "bg-lightgreen text-gray-300"
                      : "bg-gray-200 text-gray-100 hover:text-lightgreen active:bg-lightgreen  active:text-gray-300"
                  }
                  border-0 cursor-pointer rounded capitalize font-semibold `;
        }}
      >
        Trending
      </NavLink>

      <NavLink
        to="/saved"
        data-tabs="tabs"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5                            
                  ${
                    isActive
                      ? "bg-lightgreen text-gray-300"
                      : "bg-gray-200 text-gray-100 hover:text-lightgreen active:bg-lightgreen  active:text-gray-300"
                  }
                  border-0 cursor-pointer rounded capitalize font-semibold `;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
