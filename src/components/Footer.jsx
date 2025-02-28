import React from "react";
import logo from "./assets/logo.svg";

function Footer() {
  return (
    <div className="bg-[#1840A7] py-[50px] text-white">
      <div className="max-w-[1296px] mx-auto px-4 md:px-8 lg:px-0">
        <div className="flex flex-col md:flex-row gap-y-[30px] md:gap-x-[98px] justify-between items-center">
          <img src={logo} alt="Logo" className="w-[150px] h-auto" />

          <nav className="flex flex-wrap justify-center md:justify-between gap-x-[24px] text-center md:text-left">
            <ul className="w-[306px] flex flex-col gap-y-[8px]">
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-white"></span>
                <a href="">O компании</a>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-white"></span>
                <a href="">Деятельность</a>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-white"></span>
                <a href="">Персонал</a>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-white"></span>
                <a href="">Клиенту</a>
              </li>
            </ul>

            <ul className="w-[306px] flex flex-col gap-y-[8px]">
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-white"></span>
                <a href="">Акционеру и инвестору</a>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-white"></span>
                <a href="">Пресс-центр</a>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-white"></span>
                <a href="">Торги</a>
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 bg-white"></span>
                <a href="">Контакты</a>
              </li>
            </ul>

            <ul className="w-[306px] flex flex-col gap-y-[8px]">
              <li className="flex items-center gap-x-2">
                <a href="">Местонахождение</a>
              </li>
              <li className="flex items-center gap-x-2">
                <a href="">
                  Ante quam egestas tristique a malesuada massa aliquam
                  ultrices. Et tellus nec.
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-[50px] gap-y-[20px]">
          <div className="w-full md:w-[526px] flex flex-col gap-y-[13px] text-center md:text-left">
            <p className="font-normal text-[13px] leading-[18.2px] text-white">
              Dictum praesent dignissim pellentesque amet diam velit faucibus
              sed. Nec mattis posuere habitasse porta feugiat mattis enim. Quam
              interdum at penatibus amet elementum luctus.
            </p>
            <p className="font-normal text-[13px] leading-[18.2px] text-white">
              Политика обработки персональных данных
            </p>
          </div>
          <p className="font-semibold text-[16px] leading-[22.4px] text-white text-center md:text-right">
            Разработано: d-e-n.ru
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
