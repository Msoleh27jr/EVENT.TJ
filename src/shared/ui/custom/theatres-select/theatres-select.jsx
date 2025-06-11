import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const theatres = [
  {
    id: 1,
    name: "Театр наций (Москва)",
    link: "https://www.bolshoi.ru/",
  },
  {
    id: 2,
    name: "Театр Ла Скала (Милан)",
    link: "https://vakhtangov.ru/",
  },
  {
    id: 3,
    name: "Комеди Франсез (Париж)",
    link: "https://mxat.ru/",
  },
  {
    id: 4,
    name: "МХТ имени Чехова (Москва)",
    link: "https://www.carlofelicegenova.it/",
  },
  {
    id: 5,
    name: "Большой театр России (Москва)",
    link: "https://www.roh.org.uk/",
  },
  {
    id: 6,
    name: "Театр имени Вахтангова (Москва)",
    link: "https://www.comedie-francaise.fr/",
  },
  {
    id: 7,
    name: "Национальный театр Исландии (Рейкьявик)",
    link: "https://www.berliner-ensemble.de/",
  },
  {
    id: 8,
    name: "Королевский театр Ковент-Гарден (Лондон)",
    link: "https://www.teatroallascala.org/",
  },
  {
    id: 9,
    name: "Национальный театр Карло Феличе (Генуя, Италия)",
    link: "https://theatreofnations.ru/",
  },
  {
    id: 10,
    name: "Берлинский драматический театр (Берлинер ансамбль)",
    link: "https://www.leikhusid.is/",
  },
];

const TheatreSelect = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full relative bottom-[5px] flex flex-col md:flex-row items-center gap-5 md:items-baseline justify-between">
      <select
        onChange={(e) => {
          const selected = theatres.find((item) => item.name === e.target.value);
          if (selected) {
            window.open(selected.link, "_blank", "noopener,noreferrer");
          }
        }}
        className="w-[80%] md:w-[100px] p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-[8px]"
      >
        <option value="" disabled selected hidden>
          {t("theatres")}
        </option>
        {theatres.map((e) => (
          <option key={e.id} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      <div className="flex gap-5 font-semibold text-gray-900 dark:text-white">
        <NavLink to="/theatres/today" className={({ isActive }) => `relative font-medium pb-1 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-[#9F00FF] before:transition-all before:duration-300 ${isActive ? "before:w-full text-[#9F00FF]" : "before:w-0 hover:before:w-full"}`}>
          {t("today")}
        </NavLink>
        <NavLink to="/theatres/tomorrow" className={({ isActive }) => `relative font-medium pb-1 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-[#9F00FF] before:transition-all before:duration-300 ${isActive ? "before:w-full text-[#9F00FF]" : "before:w-0 hover:before:w-full"}`}>
          {t("tomorrow")}
        </NavLink>
        <NavLink to="/theatres/week" className={({ isActive }) => `relative font-medium pb-1 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-[#9F00FF] before:transition-all before:duration-300 ${isActive ? "before:w-full text-[#9F00FF]" : "before:w-0 hover:before:w-full"}`}>
          {t("this_week")}
        </NavLink>
      </div>
    </div>
  );
};

export default TheatreSelect;
