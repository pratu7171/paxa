import React from "react";
import Profile1 from "../assets/Profile1.png";
import { FiMessageSquare } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { RiAttachment2 } from "react-icons/ri";
import Trello1 from "../assets/trello1.png";

const Card = ({ title, content, color, children }) => {
  return (
    <>
    <div
      className={`rounded-md w-[346px] shadow-md p-4 bg-${color} flex flex-col bg-[#F4F4F4] mb-[10px]`}
    >
      <div>
          <img src={Trello1} alt="" className="rounded-[10px] w-[322px] h-[170px]"></img>
      </div>
      <div className="mt-[16px]">
        <div className="bg-[#F8BD1C] w-[60px] h-[8px] rounded"></div>
      </div>
      <div className="w-[300px] mt-[16px]">
        <h3 className="text-[16px] font-poppins leading-[24px]  mb-2">
          {title}
        </h3>
        <p className="text-gray-700">{content}</p>
      </div>
      <div className="flex flex-row items-center justify-between mt-[15px]">
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
      
          <span className="text-[30px] font-poppins leading-[18px] bg-black text-white rounded-full text-center h-[40px] w-[40px] p-2">
            +
          </span>
        </div>
        <div className="flex flex-row items-center gap-[19px]">
          <div className="flex flex-row items-center gap-[2px]">
            <span>44</span>
            <FiMessageSquare className="w-[20px] h-[20px]"/>
          </div>
          <div className='flex flex-row items-center gap-[2px]'>
          <span>44</span>
          <HiOutlineHeart className="w-[20px] h-[20px]"/>
          </div>
          <div className='flex flex-row items-center gap-[2px]'>
          <span>44</span>
          <RiAttachment2 className="w-[20px] h-[20px]"/>
          </div>
        </div>
      </div>
      {children}
    </div>
      </>
  );
};

export default Card;
