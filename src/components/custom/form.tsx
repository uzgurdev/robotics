import React from "react";

export default function Form() {
  return (
    <div>
      <p className="title uppercase md:text-[96px] text-[24px] md:leading-[100px] leading-[25px] text-center text-[#F0D625]">
        получите бесплатный первый урок
      </p>

      <div className="inputs flex items-center justify-center flex-wrap mt-[22px] gap-[15px]">
        <input
          type="text"
          placeholder="Ваше имя"
          className="outline-0 w-[400px] h-[62px] md:w-[230px] rounded-[9px] bg-white text-[#00000066] py-[15px] px-5 md:px-7.5"
        />
        <input
          type="tel"
          placeholder="Номер телефона"
          className="outline-0 w-[400px] h-[62px] md:w-[230px] rounded-[9px] bg-white text-[#00000066] py-[15px] px-5 md:px-7.5"
        />
        <input
          type="text"
          placeholder="Возраст"
          className="outline-0 w-[400px] h-[62px] md:w-[230px] rounded-[9px] bg-white text-[#00000066] py-[15px] px-5 md:px-7.5"
        />
        <input
          type="text"
          placeholder="Выберете курс"
          className="outline-0 w-[400px] h-[62px] md:w-[230px] rounded-[9px] bg-white text-[#00000066] py-[15px] px-5 md:px-7.5"
        />
        <button className="uppercase text-black text-2xl font-bold bg-[#FFE000] w-[400px] h-[62px] md:w-[230px] rounded-[9px] shadow-[0_0_16px_4px_#FFE000]">
          получить
        </button>
      </div>

      <div className="flex items-center justify-center md:justify-start gap-2.5 mt-[23px] md:my-20 md:gap-15 md:px-38">
        <button className="cursor-pointer uppercase text-black text-2xl font-bold bg-[#FFE000] w-[178px] h-[48px] md:w-[230px] rounded-[9px] shadow-[0_0_16px_4px_#FFE000]">
          Филиал Ц4
        </button>
        <button className="cursor-pointer uppercase text-black text-2xl font-bold bg-white w-[212px] h-[48px] md:w-[230px] rounded-[9px]">
          Филиал Беруни
        </button>
      </div>
    </div>
  );
}
