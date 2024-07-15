import React from "react";
import Card from "./Card";
import { BsThreeDots } from "react-icons/bs";

const Board = ({ title, cards }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between h-[50px] bg-[#F4F4F4] items-center rounded-[10px] p-4">
        <h2 className="text-[16px] font-poppins leading-[24px]">{title}</h2>
        <BsThreeDots className="opacity-20 h-6 w-6" />
      </div>
      <div className="h-[calc(100vh-275px)] overflow-y-scroll no-scrollbar">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            color={card.color}
          />
        ))}
        <div className="relative h-[160px] border-dotted border-2 border-opacity-20 border-black p-4 mb-[10px] flex items-center justify-center text-center">
          + Add new card
        </div>
      </div>
    </div>
  );
};

export default Board;
