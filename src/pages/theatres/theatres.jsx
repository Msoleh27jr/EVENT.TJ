import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../../shared/ui/custom/title/title";
import { Link } from "react-router-dom";
import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";
import TheatresReleases from "../../shared/ui/custom/releases/theatres-releases";
import TheatresSoon from "../../shared/ui/custom/soon/theatres-soon";

const data = [
  {
    id: 1,
    name: "Кинотеатр «Навруз» Душанбе",
    link: "https://tamosho.tj/",
  },
  {
    id: 2,
    name: "Кинотеатр «Кайхон» в Душанбе",
    link: "https://kayhon.tj",
  },
  {
    id: 3,
    name: "Кинотеатр «Премьер Зал» Душанбе",
    link: "https://kinopremierzal.tj/",
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
              const selected = data.find((item) => item.name === e.target.value);
              if (selected) {
                window.open(selected.link, "_blank", "noopener,noreferrer");
              }
            }}
            className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-[8px]"
          >
            <option value="" disabled selected hidden>
              {t("theatres")}
            </option>
            {data.map((e) => (
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
      <div className="flex flex-col items-center">
        <CalendarComponent />
        <TheatresReleases />
        <TheatresSoon />
      </div>
    </div>
  );
};

export default Theatres;
