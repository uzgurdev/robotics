"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("RU");

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="md:w-14 md:h-14 grid place-items-center">
          <Image src={Logo} alt="Logo" width={56} />
        </div>

        {/* Nav links */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-200 z-20 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            Главная
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            О нас
          </a>
          <div className="relative group">
            <button
              className="block px-4 py-2 text-gray-700 hover:text-blue-600 focus:outline-none flex items-center"
              type="button"
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
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-30">
              <a
                href="#course1"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Курс 1
              </a>
              <a
                href="#course2"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Курс 2
              </a>
              <a
                href="#course3"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Курс 3
              </a>
            </div>
          </div>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 hover:text-blue-600"
          >
            Контакты
          </a>
          <a href="tel:+998901234567">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Позвонить
            </button>
          </a>
        </div>

        {/* Language selection */}
        <div className="flex items-center gap-3">
          <button
            className={`${
              currentLanguage === "RU" ? "text-white rounded-[7px] bg-secondary" : ""
            } cursor-pointer`}
            onClick={() => setCurrentLanguage("RU")}
          >
            RU
          </button>
          <button
            className={`${
              currentLanguage === "UZ" ? "text-white rounded-[7px] bg-secondary" : ""
            } cursor-pointer`}
            onClick={() => setCurrentLanguage("UZ")}
          >
            UZ
          </button>
        </div>

        {/* Hamburger menu (mobile) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
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
    </nav>
  );
};

export default Navbar;
