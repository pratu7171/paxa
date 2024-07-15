import React from "react";
import Board from "./Board"

const Section = () => {
    const cards = [
        {
          title: "Old fashioned recipe for preventing allergies and chemical sensitivities",
          content: "",
          color: "blue",
        },
        {
          title: "Home business advertising ideas",
          content: "A brief description of the ideas goes here.",
          color: "green",
        },
        {
          title: "Unmatched toner cartridge quality 20 less than oem price",
          content: "A brief description of the toner cartridge goes here.",
          color: "yellow",
        },
        {
          title: "Types of paper in catalog printing",
          content: "A brief description of the paper types goes here.",
          color: "pink",
        },
        {
          title: "There is no competition",
          content: "A brief description of the competition goes here.",
          color: "purple",
        },
        {
          title: "Linux or windows which is it",
          content: "A brief description of Linux and Windows goes here.",
          color: "red",
        },
        {
          title: "At home treatments for beauty on a budget",
          content: "A brief description  of the beauty treatments goes here.",
          color: "orange",
        },
        {
          title: "Home business advertising ideas",
          content: "A brief description of the ideas goes here.",
          color: "blue",
        },
        {
          title: "Tips for choosing the perfect gloss for your lips",
          content: "A brief description of the goes here.",
          color: "green",
        },
        {
          title: "Cosmetic surgery abroad making the right choice",
          content: "A brief description of the cosmetic surgery goes here.",
          color: "yellow",
        },
        {
          title: "How to look up",
          content: "A brief description of how to look up goes here.",
          color: "pink",
        },
        {
          title: "Be single minded",
          content: "A brief description of being single minded goes here.",
          color: "purple",
        },
        {
          title: "Dna the future of nutrition",
          content: "A brief description of the future of nutrition goes here.",
          color: "red",
        },
      ];
  return (
    <div className="px-4 py-6 overflow-x-auto pl-[30px]">
      <div className="flex flex-row gap-8">
        <Board title="Design" cards={cards.slice(0, 3)} />
        <Board title="Prototip" cards={cards.slice(3, 6)} />
        <Board title="Trello" cards={cards.slice(6, 9)} />
        <Board title="Test" cards={cards.slice(9, 12)} />
        <Board title="Final" cards={cards.slice(12)} />
      </div>
    </div>
  );
};

export default Section;
