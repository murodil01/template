import React, { useState } from "react";
import header1 from "./assets/header1.png";
import logo from "./assets/logo.svg";
import header2 from "./assets/header2.png";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${header1})` }}
    >
      <div className="max-w-[1296px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-x-[348px] py-[20px] gap-6">
          <img
            src={logo}
            alt="Logo"
            className="w-[180px] md:w-[235px] h-auto"
          />

          <div className="flex flex-col md:flex-row items-center gap-6 text-white">
            <label className="flex flex-col items-center md:items-start">
              <p className="font-semibold text-[14px] leading-[19.6px]">
                Быстрый поиск по сайту
              </p>
              <div className="flex items-center border-b-2 border-white">
                <input
                  type="text"
                  className="bg-transparent outline-none text-white w-[180px] px-2"
                />
                <button className="text-white px-2">🔍</button>
              </div>
            </label>
          </div>

          <div className="flex gap-x-2 text-white">
            <button className="hover:text-gray-300">Ru</button>
            <button className="hover:text-gray-300">En</button>
          </div>

          <button
            className="md:hidden text-white text-2xl absolute top-6 right-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav
          className={`md:block ${
            isOpen ? "block" : "hidden"
          } text-white text-center md:text-left`}
        >
          <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-[50px] justify-center">
            {[
              "O компании",
              "Деятельность",
              "Персонал",
              "Клиенту",
              "Акционеру и инвестору",
              "Пресс-центр",
              "Торги",
              "Контакты",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex flex-col md:flex-row justify-between items-center mt-[100px] gap-6">
          <div className="w-full md:w-[636px] flex flex-col gap-[30px] md:gap-[60px] text-center md:text-left">
            <p className="font-bold text-[28px] md:text-[40px] leading-[40px] md:leading-[56px] text-white">
              Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui
              nisl scelerisque in pharetra molestie. Nunc leo.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                className="w-full max-w-[145px] border-2 border-white text-white px-5 py-2 
                          text-sm md:text-base lg:text-lg 
                          md:px-6 md:py-3 
                          hover:bg-blue-800 hover:text-white transition-all"
              >
                Подробнее
              </button>
            </div>
          </div>

          <img
            src={header2}
            alt="Header Image"
            className="w-full md:w-auto mt-[99px]"
          />
        </main>
      </div>
    </div>
  );
}

export default Header;
