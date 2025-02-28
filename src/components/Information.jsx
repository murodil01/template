import React from "react";
import robot from "./assets/robot.png";

function Information() {
  return (
    <div className="max-w-[1296px] mx-auto px-4 md:px-8 lg:px-0 my-[100px]">
      <div
        className="flex flex-col md:flex-row items-center justify-center md:justify-between 
      gap-6 md:gap-x-[134px]"
      >
        <div className="w-full md:w-[416px] flex flex-col gap-y-6 text-center md:text-left">
          <h3 className="text-[24px] md:text-[28px] font-bold text-gray-800 leading-tight">
            Lectus nisi sed id dictum. Adipiscing
          </h3>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Commodo faucibus justo turpis id lectus ac fringilla scelerisque
            accumsan. Fames lectus nibh non ultrices id ut sed praesent in. Ac
            tristique nunc pellentesque odio. Blandit scelerisque dolor molestie
            egestas nunc nunc sit. Fermentum at pharetra odio risus malesuada
            diam laoreet eleifend vulputate. Enim molestie lorem nec ipsum nunc
            sit commodo non. Euismod rhoncus ut amet diam porta nisi tempus.
            Posuere suspendisse suscipit dolor enim. A lectus convallis quis
            elementum. Vitae pretium nunc venenatis felis.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Urna orci blandit imperdiet feugiat scelerisque dui at velit ac.
            Sollicitudin placerat in viverra amet in praesent vestibulum.
            Suscipit interdum odio pellentesque diam et.
          </p>

          <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-x-6 w-full">
            <button
              className="w-full md:w-[152px] h-[42px] bg-blue-700 border-2 border-blue-700 
            text-white text-sm md:text-base transition duration-300 hover:bg-blue-800"
            >
              aaaddd@test.ru
            </button>
            <button
              className="w-full md:w-[152px] h-[42px] bg-blue-700 border-2 border-blue-700 
            text-white text-sm md:text-base transition duration-300 hover:bg-blue-800"
            >
              dvs@test.ru
            </button>
          </div>
        </div>

        <img
          src={robot}
          alt="Robot"
          className="w-[80%] md:w-[526px] max-w-[400px] md:max-w-none"
        />
      </div>
    </div>
  );
}

export default Information;
