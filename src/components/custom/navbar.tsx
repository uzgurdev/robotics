"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Logo from "../../../public/logo.png";
import { Instagram, LucideLinkedin, Twitter } from "lucide-react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("UZ");
  const courses = useRef([
    "робототехника",
    "Английский",
    "Живопись для детей",
    "Живопись для взрослых",
  ]);

  return (
    <nav className="bg-[var(--primary)] md:border-y-[10px] border-y-[14px] border-[var(--secondary)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:py-[23px] py-[2.5px] flex items-center justify-between">
        {/* Logo */}
        <div className="md:w-28 md:h-28 w-14 h-14 grid place-items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={56}
            height={56}
            className="md:w-28 md:h-28 w-14 h-14 object-contain"
          />
        </div>

        <div className="flex items-center gap-[30px] relative">
          {/* Nav links */}
          <div
            className={`flex-col md:flex-row md:flex md:items-center absolute md:static top-22 left-0 w-full md:w-auto bg-black border-[14px] border-[#FFDE00] md:border-0 md:bg-transparent shadow-md md:shadow-none transition-all duration-200 z-20 ${
              isOpen ? "flex" : "hidden"
            } py-5 px-7 md:py-0 md:px-0`}
          >
            <a
              href="#home"
              className="block text-[24px] px-4 py-2 text-white mr-[46px] md:border-b-0 border-b-2  border-b-gray-500 mb-4 md:mb-0"
            >
              Главная
            </a>
            <a
              href="#about"
              className="block text-[24px] px-4 py-2 text-white mr-[46px] md:border-b-0 border-b-2  border-b-gray-500 mb-4 md:mb-0"
            >
              О нас
            </a>
            <div className="relative md:static group mr-[46px] w-max">
              <button
                className="text-[24px] px-4 py-2 md:h-[37px] leading-[22.5px] text-[#FFDE00] md:border-2 border-[#FFDE00] rounded-full focus:outline-none flex items-center mb-4 md:mb-0"
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Курсы
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Desktop dropdown */}
              <div className="absolute left-auto mt-2 w-40 bg-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-30 hidden md:flex flex-col gap-[9px]">
                {courses.current.map((course, idx) => (
                  <a
                    key={idx}
                    href={`#${course}`}
                    className="w-[289px] h-[45px] block text-[20px] px-4 py-2 leading-[22.5px] text-[#FFDE00] border-2 border-[#FFDE00] rounded-full"
                  >
                    {course}
                  </a>
                ))}
              </div>
              {/* Mobile dropdown (pushes content) */}
              {isDropdownOpen && (
                <div className="block md:hidden">
                  <div className="flex flex-col gap-2 mt-2">
                    {courses.current.map((course, idx) => (
                      <a
                        key={idx}
                        href={`#${course}`}
                        className="w-full h-[45px] block text-[24px] px-4 py-2 leading-[22.5px] text-[#FFDE00] border-2 border-[#FFDE00] rounded-full"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {course}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a
              href="#contact"
              className="block text-[24px] px-4 py-2 text-white mr-[46px] md:border-b-0 border-b-2  border-b-gray-500"
            >
              Контакты
            </a>
            <a href="tel:+998901234567" className="hidden md:block text-[24px]">
              <button className="bg-[#FFE000] text-white px-4 py-2 rounded-md shadow-[0_0_16px_4px_#FFE000] transition duration-200">
                Позвонить
              </button>
            </a>
          </div>
          <div
            className={`md:hidden absolute w-full py-6 px-6 top-100.5 left-0 z-20 flex items-center gap-7 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <LucideLinkedin cursor={"pointer"} />
            <Instagram cursor={"pointer"} />
            <Twitter cursor={"pointer"} />
          </div>

          {/* Language selection */}
          <div className="flex items-center gap-3">
            <button
              className={`${
                currentLanguage === "RU"
                  ? "text-white rounded-[7px] bg-[var(--secondary)] w-[42px] h-[32px] md:w-[87.6px] md:h-[52px] text-2xl md:text-[0px]"
                  : ""
              } cursor-pointer`}
              onClick={() => setCurrentLanguage("RU")}
            >
              RU
            </button>
            <button
              className={`${
                currentLanguage === "UZ"
                  ? "text-white rounded-[7px] bg-[var(--secondary)] w-[42px] h-[32px] md:w-[87.6px] md:h-[52px] text-2xl md:text-[0px]"
                  : ""
              } cursor-pointer`}
              onClick={() => setCurrentLanguage("UZ")}
            >
              UZ
            </button>
          </div>

          {/* Hamburger menu (mobile) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
