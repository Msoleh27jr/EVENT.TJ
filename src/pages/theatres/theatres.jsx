import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Title from "../../shared/ui/custom/title/title";
import CalendarComponentTheatre from "../../shared/ui/custom/calendar-swiper/calendar-swiper-theatres";

export const data = [
  {
    id: 1,
    title: "aladdin_title",
    image: "/images/theatres/theatres-1.jpg",
    theatre: "theatresList_comedie_francaise",
    genre: "musical_fairy_tale",
    age: "3+",
    duration: 50,
    premiere: 2025,
    day: "this_week",
    date: "2025-06-11",
  },
  {
    id: 2,
    title: "extraordinary_competition_title",
    image: "/images/theatres/theatres-2.jpg",
    theatre: "theatresList_la_scala",
    genre: "fairy_tale",
    age: "3+",
    duration: 45,
    premiere: 2025,
    day: "today",
    date: "2025-06-13",
  },
  {
    id: 3,
    title: "game_over_title",
    image: "/images/theatres/theatres-3.jpg",
    theatre: "theatresList_comedie_francaise",
    genre: "fairy_tale",
    age: "3+",
    duration: 50,
    premiere: 2025,
    day: "tomorrow",
    date: "2025-06-13",
  },
  {
    id: 4,
    title: "my_fair_lady_title",
    image: "/images/theatres/theatres-4.jpg",
    theatre: "theatresList_comedie_francaise",
    genre: "musical",
    age: "12+",
    duration: 150,
    premiere: 2025,
    day: "today",
    date: "2025-06-14",
  },
  {
    id: 5,
    title: "book_of_maina_title",
    image: "/images/theatres/theatres-5.jpg",
    theatre: "theatresList_mht_chekhov",
    genre: "fairy_tale",
    age: "6+",
    duration: 55,
    premiere: 2025,
    day: "this_week",
    date: "2025-06-16",
  },
  {
    id: 6,
    title: "interview_with_legend_title",
    image: "/images/theatres/theatres-6.jpg",
    theatre: "theatresList_la_scala",
    genre: "concert_play",
    age: "12+",
    duration: 100,
    premiere: 2025,
    day: "tomorrow",
    date: "2025-06-16",
  },
  {
    id: 7,
    title: "cinderella_title",
    image: "/images/theatres/theatres-7.jpg",
    theatre: "theatresList_mht_chekhov",
    genre: "musical_fairy_tale",
    age: "3+",
    duration: 50,
    premiere: 2025,
    day: "today",
    date: "2025-06-16",
  },
  {
    id: 8,
    title: "stork_and_scarecrow_title",
    image: "/images/theatres/theatres-8.jpg",
    theatre: "theatresList_la_scala",
    genre: "fairy_tale",
    age: "5+",
    duration: 50,
    premiere: 2025,
    day: "tomorrow",
    date: "2025-06-17",
  },
  {
    id: 9,
    title: "buratino_adventure_title",
    image: "/images/theatres/theatres-9.jpg",
    theatre: "theatresList_mht_chekhov",
    genre: "musical_fairy_tale",
    age: "3+",
    duration: 50,
    premiere: 2025,
    day: "this_week",
    date: "2025-06-18",
  },
  {
    id: 10,
    title: "seville_barber_title",
    image: "/images/theatres/theatres-10.jpg",
    theatre: "theatresList_la_scala",
    genre: "operetta",
    age: "12+",
    duration: 150,
    premiere: 2025,
    day: "today",
    date: "2025-06-18",
  },
];

const Theatres = () => {
  const { t } = useTranslation();
  const theatres = [
    { id: 1, name: "theatresList_la_scala" },
    { id: 2, name: "theatresList_mht_chekhov" },
    { id: 3, name: "theatresList_comedie_francaise" },
  ];

  const [visibleCount, setVisibleCount] = useState(10);
  const [selectTheatre, setSelectTheatre] = useState("all");
  const [dayFilter, setDayFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(null);

  const showMore = () => setVisibleCount((prev) => prev + 4);

  const filteredData = data.filter((item) => {
    const matchTheatre = selectTheatre === "all" || item.theatre === selectTheatre;
    const matchDay = dayFilter === "all" || item.day === dayFilter;
    const matchDate = !selectedDate || item.date === selectedDate;
    return matchTheatre && matchDay && matchDate;
  });

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-5">
        <Title parentPage="home" curentPage="theatres" titlePage="theatres" />
        <div className="w-full relative bottom-[5px] flex flex-col md:flex-row items-center gap-5 md:items-baseline justify-between">
          <select value={selectTheatre} onChange={(e) => setSelectTheatre(e.target.value)} className="w-[80%] md:w-auto p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-[8px]">
            <option value="all">{t("theatres")}</option>
            {theatres.map((e) => (
              <option key={e.id} value={e.name}>
                {t(e.name)}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 font-semibold text-gray-900 dark:text-white mt-6">
            {["today", "tomorrow", "this_week"].map((filter) => (
              <button key={filter} onClick={() => setDayFilter(filter)} className={`relative font-medium pb-1 transition-colors duration-300 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5  before:bg-[#9F00FF] before:transition-all before:duration-300 ${dayFilter === filter ? "before:w-full text-[#9F00FF]" : "before:w-0 hover:before:w-full"}`}>
                {t(filter)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <CalendarComponentTheatre data={data} selectedDate={selectedDate} onChange={setSelectedDate} />

      <section className="py-10 px-4">
        <h2 className="text-4xl font-semibold text-[#2C2C2C] dark:text-white mb-8 text-center md:text-start">{t("theatres")}</h2>

        <div className="w-full overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 min-w-[260px] md:min-w-0">
            {filteredData.length > 0 ? (
              filteredData.slice(0, visibleCount).map((e) => (
                <article key={e.id} className="group flex flex-col overflow-hidden cursor-pointer min-w-[260px] md:min-w-0">
                  <Link to={`/theatres/${e.id}`} className="block rounded-2xl overflow-hidden shadow-md">
                    <img src={e.image} alt={t(e.title)} className="w-full h-[333px] object-cover transition-transform duration-900 ease-in-out group-hover:scale-105" />
                  </Link>
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-1 transition-colors duration-900 ease-in-out group-hover:text-[#7F00FF]">{t(e.title)}</h3>
                    <p className="text-base text-[#7F00FF] font-semibold mb-2">{t(e.theatre)}</p>
                    <div className="text-sm font-semibold space-y-1">
                      <p className="inline-block p-2 rounded-[6px] bg-gray-100 dark:bg-gray-800 text-[#68617a] dark:text-white transition-colors duration-900 ease-in-out group-hover:bg-[#7F00FF] group-hover:text-white tracking-normal">{t(e.genre)}</p>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <h3 className="col-span-full text-center text-gray-500 dark:text-gray-400">{t("no_events_found")}</h3>
            )}
          </div>
        </div>

        {filteredData.length > visibleCount && (
          <div className="mt-10 text-center">
            <button onClick={showMore} className="w-[260px] mx-auto py-3 mt-4 rounded-md font-semibold text-white bg-purple-700 hover:bg-purple-800 transition">
              {t("show_more")}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Theatres;
