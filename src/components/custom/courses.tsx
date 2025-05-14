import React from "react";

import Robotics from "../../../public/robotics.png";
import Art_Kids from "../../../public/art_kids.png";
import Art_Adults from "../../../public/art_adults.png";
import English from "../../../public/english.png";
import Chess from "../../../public/chess.png";
import Image from "next/image";

const courses = [
  {
    name: "Робототехника",
    image: Robotics,
  },
  {
    name: "Живопись для детей",
    image: Art_Kids,
  },
  {
    name: "Живопись для взрослых",
    image: Art_Adults,
  },
  {
    name: "Английский язык для детей",
    image: English,
  },
  {
    name: "Шахмат",
    image: Chess,
  },
];

export default function Courses() {
  return (
    <div className="grid place-items-center md:py-20 py-7.5 px-4 md:px-35 md:gap-20 gap-7.5">
      <p className="font-bold text-[20px] md:text-[96px] md:leading-[100px] leading-0 text-[#F0D625] md:text-center uppercase">
        Авторские кусы <br className="hidden md:inline-block" /> от JustRobotics
      </p>
      <div className="w-full md:grid md:grid-cols-2 flex items-center overflow-y-auto gap-4 md:gap-12.5 no-scrollbar">
        {courses.map((course, index) => (
          <div
            key={index}
            className="card md:rounded-[30px] rounded-[5px] md:p-10 p-4 md:bg-[#FFE001] bg-[#000000] min-w-[284px] min-h-[304px] md:w-[551px] md:h-[508px] md:shadow-[0_0_16px_4px_#FFE000] shadow-[0] relative"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              .card::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="img p-0 md:flex items-center justify-center">
              <Image
                src={course.image}
                alt="robotics"
                width={254}
                height={191}
                className="w-[254px] h-[191px] md:w-[449px] md:h-[211px]"
              />
            </div>
            <p className="md:block hidden mt-[21px] text-[40px] font-bold text-black leading-10.5">
              {course.name}
            </p>
            <p className="block md:hidden mt-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <button className="md:block hidden absolute bottom-8 ml-73 bg-black p-1.5 rounded-full">
              Подробнее о кусе -&gt;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
