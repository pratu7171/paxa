import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { PiGlobeHemisphereEast } from "react-icons/pi";
import { CiHardDrive } from "react-icons/ci";
import Profile1 from "../assets/Profile1.png";

const Bracket = () => {
  return (
    <div className="px-[30px] flex flex-row justify-between pt-[31px] pb-[15px]">
      <div className="flex flex-row items-center">
        <span className="font-poppins leading-[39px] text-[26px] font-bold">
          Brackets
        </span>
        <div className="flex flex-row items-center gap-[10px] ml-[90px]">
          <FaRegHeart className="text-[#000000] opacity-20 h-[19px] w-[19px]" />
          <div className="w-[1px] h-[35px] bg-[#000000] opacity-10"></div>
          <div className="flex items-center">
            <PiGlobeHemisphereEast className="text-[#000000] opacity-20 h-[19px] w-[19px]" />
            <span className="font-poppins leading-[27px] text-[18px] opacity-10">
              Public
            </span>
          </div>
          <div className="w-[1px] h-[35px] bg-[#000000] opacity-10"></div>

          <CiHardDrive className="text-[#000000] opacity-20 h-[19px] w-[19px]" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center space-x-2 mr-[100px]">
          <div className="flex -space-x-5 w-[140px] h-[40px]">
            <img
              className="w-[40px] h-[40px] rounded-full ring-2 ring-transparent"
              src={Profile1}
              alt="Avatar 1"
            />
            <img
              className="w-[40px] h-[40px] rounded-full ring-2 ring-transparent"
              src={Profile1}
              alt="Avatar 2"
            />
            <img
              className="w-[40px] h-[40px] rounded-full ring-2 ring-transparent"
              src={Profile1}
              alt="Avatar 3"
            />
            <img
              className="w-[40px] h-[40px] rounded-full ring-2 ring-transparent"
              src={Profile1}
              alt="Avatar 4"
            />
            <img
              className="w-[40px] h-[40px] rounded-full ring-2 ring-transparent"
              src={Profile1}
              alt="Avatar 5"
            />
            <span className="text-[12px] font-poppins leading-[18px] bg-black text-white rounded-full text-center h-[40px] w-[40px] p-2">
              +44
            </span>
          </div>
        </div>
        <span className="font-poppins leading-[30px] text-[20px]">Menu</span>
      </div>
    </div>
  );
};

export default Bracket;
