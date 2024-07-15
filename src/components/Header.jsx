import React from "react";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import Logo from "../assets/Logo.png";
import Board from "../assets/Board.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-[58px] pt-[13px] pb-[15px] px-[30px] bg-white shadow">
      <div className="flex items-center gap-[21px]">
        <div>
          <img src={Logo} alt="Trello Logo" className="h-8" />
        </div>
        <div className="w-[1px] h-[32px] bg-[#000000] opacity-10"></div>
        <div className="flex flex-row items-center">
          <img src={Board} alt="Board Logo" className="h-[24px] " />
          <span className="ml-1 text-[16px] leading-[24px] font-poppins">Boards</span>
        </div>
        <div className="w-[1px] h-[32px] bg-[#000000] opacity-10"></div>
        <SearchBar />
      </div>
      
      <UserProfile />
    </div>
  );
};

export default Header;
