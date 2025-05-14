import React from "react";

const cards = [
  {
    number: "300+",
    title: "Довольных студентов",
  },
  {
    number: "25+",
    title: "Препадавателей",
  },
  {
    number: "60+",
    title: "Групп",
  },
];

export default function Cards() {
  return (
    <div className="flex items-center justify-center flex-wrap md:mx-20 mx-4 md:-mt-4 mt-0 gap-2.5 md:gap-[43px] relative -z-20">
      {cards.map((card, index) => (
        <div
          className="card w-[195px] h-[110px] md:w-[398px] md:h-[369px] bg-[#FFE001] md:rounded-[30px] rounded-[15px] flex flex-col items-center justify-center text-[#1E1E1E] text-center shadow-[0_0_16px_4px_#FFE000]"
          key={index}
        >
          <p className="number text-[20px] md:text-[120px] font-extrabold">
            {card.number}
          </p>
          <p className="title text-[12px] md:text-[40px] font-semibold md:-mt-8">
            {card.title}
          </p>
        </div>
      ))}
    </div>
  );
}
