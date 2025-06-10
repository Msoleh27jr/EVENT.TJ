import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../shared/ui/custom/title/title";
import { Link } from "react-router-dom";
import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";
import TheatresReleases from "../../shared/ui/custom/releases/theatres-releases";
import TheatresSoon from "../../shared/ui/custom/soon/theatres-soon";

const theatresData = [
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

const Theatres = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-5">
        <Title parentPage="home" curentPage="theatres" titlePage="theatres" />
        <div className="w-full relative bottom-[5px] flex flex-col md:flex-row items-center gap-5 md:items-baseline justify-between">
          <select
            onChange={(e) => {
              const selected = theatresData.find((item) => item.name === e.target.value);
              if (selected) {
                window.open(selected.link, "_blank", "noopener,noreferrer");
              }
            }}
            className="w-[80%] md:w-auto p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-[8px]"
          >
            <option value="" disabled selected hidden>
              {t("theatres")}
            </option>
            {theatresData.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <div className="flex gap-5 font-semibold text-black dark:text-white">
            <Link to="#">{t("today")}</Link>
            <Link to="#">{t("tomorrow")}</Link>
            <Link to="#">{t("this_week")}</Link>
          </div>
        </div>
      </div>
      <div className="flex mt-20 flex-col items-center">
        <CalendarComponent />
        <TheatresReleases />
        {/* <TheatresSoon /> */}
      </div>
    </div>
  );
};

export default Theatres;
