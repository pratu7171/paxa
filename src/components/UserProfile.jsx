import React from 'react';
import Profile1 from "../assets/Profile1.png";
import { FiPlusCircle } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { GoBell } from "react-icons/go";

const UserProfile = () => {
  return (
    <div className="flex items-center">
      <div className='flex gap-[30px]'>
      <FiPlusCircle className='text-[#000000] opacity-20'/>
      <FiAlertCircle className='text-[#000000] opacity-20'/>
      <GoBell className='text-[#000000] opacity-20'/>
      </div>
      <div className="relative ml-[30px]">
        <img
          src={Profile1}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
