import React from "react";

function Hero() {
  return (
    <div className="my-[100px]">
      <div className="max-w-[1296px] mx-auto px-4 md:px-8 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {[
          {
            title: "О компании",
            items: ["O нас", "Руководство"],
            number: "01",
          },
          {
            title: "Деятельность",
            items: [
              "Продукция",
              "Технология",
              "Сырьевой комплекс",
              "Экология",
              "Результаты спецоценки",
            ],
            number: "02",
          },
          {
            title: "Персонал",
            items: ["Подготовка и обучение персонала", "Отправить резюме"],
            number: "03",
          },
          {
            title: "Акционеру и инвестору",
            items: ["Подробнее"],
            number: "04",
          },
          {
            title: "Пресс центр",
            items: [
              "Новости",
              "Фотогалерея",
              "Видеогалерея",
              "Корпоративная пресса",
            ],
            number: "05",
          },
          {
            title: "Контакты",
            items: ["Как c нами связаться", "Реквизиты"],
            number: "06",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="group w-full sm:w-[416px] h-auto md:h-[313px] border-2 border-[rgba(24,64,167,0.5)] 
            flex flex-col md:flex-row justify-between items-center p-6 md:p-10 
            transition duration-300 ease-in-out hover:bg-[rgba(24,64,167,1)] hover:text-white"
          >
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              <p className="font-semibold text-lg md:text-xl group-hover:text-white">
                {card.title}
              </p>
              {card.items.map((item, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 md:text-base group-hover:text-white"
                >
                  {item}
                </p>
              ))}
            </div>
            <h3 className="text-[rgba(24,64,167,1)] group-hover:text-white font-bold text-[64px] md:text-[96px] leading-[1] md:leading-[134.4px]">
              {card.number}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
