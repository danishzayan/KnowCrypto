import React from "react";
import bitcoin from '../assets/Bitcoin.svg.png'

const CardComponent = () => {
  return (
    <div className="h-[10rem] p-4 border border-lightgreen rounded shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <div className='flex flex-row justify-between items-center'>
        <img src={bitcoin} alt="" className='w-[2.5rem] h-[2.5rem] rounded'/>
        <h3 className='text-[1.2rem] tracking-wide'>Bitcoin</h3>
      </div>
    </div>
  
  );
};

export default CardComponent;
