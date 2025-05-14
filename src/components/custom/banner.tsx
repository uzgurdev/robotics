import React from "react";
import Image from "next/image";

import Robot from "../../../public/robot.png";

export default function Banner() {
  return (
    <div
      className="h-[219px] md:h-[611px] md:overflow-hidden rounded-b-2xl bg-cover bg-center flex items-center justify-center md:shadow-2xl shadow-[0] bg-[#1E1E1E]"
      style={{ backgroundImage: 'url("/bg_banner.png")' }}
    >
      {/* Banner Content */}
      <div className="content rounded-2xl w-64 z-20 relative bg-white md:w-[651px] md:h-[474px]">
        <div className="text-start p-4 md:p-[50px]">
          <h1 className="text-[32px] md:text-[85px] font-semibold text-[#1E1E1E]">
            JustRobotics
          </h1>
          <h6 className="text-[16px] md:text-[40px] md:leading-10.5 leading-4 font-medium text-[#1E1E1E]">
            твой проводник в мир технологий и искусства
          </h6>

          <div className="cta md:mt-20 mt-0">
            <p className="font-normal text-[14px] md:text-[20px] text-[#1E1E1E] m-0">
              получите бесплатное первое занятие
            </p>
            <button className="md:w-[320px] md:h-[62px] w-[180px] h-[35px] bg-[#1E1E1E] text-[#FFE001] font-bold text-[14px] md:text-2xl uppercase md:rounded-[8px] rounded-xs px-4 py-2">
              Перейти к курсам
            </button>
          </div>
        </div>
      </div>

      {/* Robot Image */}
      <div className="img w-[183px] h-[201px] md:w-[777px] md:h-[611px] z-30 relative">
        <Image
          src={Robot}
          alt="robot"
          width={183}
          height={201}
          className="w-[183px] h-[201px] md:w-[777px] md:h-[611px] object-cover object-center absolute top-0 left-0 z-10"
        />
      </div>
    </div>
  );
}
