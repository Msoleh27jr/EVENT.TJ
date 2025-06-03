import React from "react";
import Title from "../../shared/ui/custom/title/title";
import { Link } from "react-router-dom";
import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";

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
    id: 2,
    name: "Кинотеатр «Премьер Зал» Душанбе",
    link: "https://kinopremierzal.tj/",
  },
];

const Theatres = () => {
  return (
    <div>
      <div className="flex items-end gap-5">
        <Title parentPage="home" curentPage="theatres" titlePage="theatres" />
        <div className="w-full relative bottom-[5px] flex items-baseline justify-between">
          <select
            onChange={(e) => {
              const selected = data.find((item) => item.name == e.target.value);
              if (selected) {
                window.open(selected.link, "_blank", "noopener,noreferrer");
              }
            }}
            className="p-2 bg-gray-200 rounded-[8px] "
          >
            <option value="" disabled selected hidden>
              Театры
            </option>
            {data.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <div className="flex gap-5 font-semibold">
            <Link to="#">Сегодня</Link>
            <Link to="#">Завтра</Link>
            <Link to="#">На этой неделе</Link>
          </div>
        </div>
      </div>
      <CalendarComponent />
    </div>
  );
};

export default Theatres;
