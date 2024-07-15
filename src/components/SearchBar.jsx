import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-[512px] h-[30px] pl-4 pr-4 py-2 border rounded-full focus:outline-none focus:ring bg-[#F4F4F4]"
      />
      <svg
        className="w-4 h-4 text-gray-500 absolute right-3 top-2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M12.9 14.32a8 8 0 111.414-1.414l5.387 5.387-1.414 1.414-5.387-5.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
