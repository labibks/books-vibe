import React from "react";
import bookImg from '../../assets/pngwing 1.png'

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-[#eeecec] p-16 my-12 rounded-md">
      <div>
        <h1 className="text-5xl font-semibold">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-green-400 text-white rounded-2xl mt-14">
          View The List
        </button>
      </div>
      <div>
        <img src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
