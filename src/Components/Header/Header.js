import React from "react";
import Banner from "../../images/banner.png";

const Header = () => {
  return (
    <div>
      <div className="pl-20 py-5">
        <h2 className="text-2xl font-semibold pb-2">Find Sellers</h2>
        <p className="font-semibold ">
          View sell requirements posted by users looking for immediate selling
        </p>
      </div>
      <div className="flex justify-center gap-2 bg-gray-100 p-5 shadow-md">
        <select className="select select-success rounded border-2  w-full max-w-xs">
          <option disabled selected>
            Select Commodity
          </option>
        </select>
        <select className="select select-success rounded border-2 w-full max-w-xs">
          <option disabled selected>
            Select State
          </option>
          <option>One Piece</option>
          <option>Naruto</option>
          <option>Death Note</option>
          <option>Attack on Titan</option>
          <option>Bleach</option>
          <option>Fullmetal Alchemist</option>
          <option>Jojo's Bizarre Adventure</option>
        </select>
        <select className="select select-success rounded border-2 w-full max-w-xs">
          <option disabled selected>
            Select City
          </option>
        </select>
        <button className="btn btn-success hover:btn-warning text-white text-xl normal-case px-8">
          Search
        </button>
      </div>
      <p className="text-end pr-20 my-5 text-xl ">
        Total Requirements : <span className="font-semibold">1156</span>
      </p>

      <div className="flex justify-between border-2 border-green-600 mx-32 rounded-md">
        <div className="m-auto">
          <h1 className="text-3xl font-semibold">
            Hi, looking for verified sellers?
          </h1>
          <h3 className="text-xl text-gray-500 pb-5">
            Post your trade requirement and get best prices <br />
            from verified sellers
          </h3>
          <button className="btn btn-warning text-lg">
            Post Trade Requirement
          </button>
        </div>
        <div className="">
          <img src={Banner} alt="app banner" className="rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default Header;
