import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TheatresReleases = () => {
  const { t } = useTranslation();

  const [visibleCount, setVisibleCount] = useState(8);

  const releasesData = [
    {
      id: 23333,
      title: "Каратэ-пацан: Легенды",
      poster: "https://s1ru1.kinoplan24.ru/660/0406060506da6d741244e532/23333.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "12+",
      genres: ["action", "drama", "family", "sport"],
      sessions: [
        { time: "18:30", format: "2D", priceFrom: 40, hall: "Зал 1" },
        { time: "20:15", format: "2D", priceFrom: 40, hall: "Зал 1" },
        { time: "23:50", format: "2D", priceFrom: 45, hall: "Зал 2" },
      ],
    },
    {
      id: 23500,
      title: "Последнее завтра",
      poster: "https://s1ru1.kinoplan24.ru/684/0406060506ddfb61f98a878c/23500.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "18+",
      genres: ["thriller"],
      sessions: [
        { time: "22:00", format: "2D", priceFrom: 40, hall: "Зал 1" },
        { time: "23:55", format: "2D", priceFrom: 40, hall: "Зал 1" },
      ],
    },
    {
      id: 23320,
      title: "ФИНИКИЙСКАЯ СХЕМА",
      poster: "https://s2ru1.kinoplan24.ru/941/0406060506e3c8ca3b990452/23320.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "16+",
      genres: ["action", "drama"],
      sessions: [{ time: "22:10", format: "2D", priceFrom: 55, hall: "Зал 3" }],
    },
    {
      id: 22701,
      title: "Лило и Стич",
      poster: "https://s2ru1.kinoplan24.ru/836/0406060506a4baa1ae971812/22701.jpg?mode=fit&width=1024&height=1024",
      premiere: false,
      age: "6+",
      genres: ["cartoon"],
      sessions: [
        { time: "17:40", format: "3D", priceFrom: 45, hall: "Зал 2" },
        { time: "19:40", format: "2D", priceFrom: 45, hall: "Зал 2" },
      ],
    },
    {
      id: 22652,
      title: "МИССИЯ НЕВЫПОЛНИМА: ФИНАЛЬНАЯ РАСПЛАТА",
      poster: "https://s2ru1.kinoplan24.ru/661/0406060506dbaa4d5db47e81/22652.jpg?mode=fit&width=1024&height=1024",
      premiere: false,
      age: "16+",
      genres: ["action", "adventure"],
      sessions: [
        { time: "19:00", format: "2D", priceFrom: 55, hall: "Зал 3" },
        { time: "00:00", format: "2D", priceFrom: 55, hall: "Зал 3" },
      ],
    },
    {
      id: 23451,
      title: "Соловей против Муромца",
      poster: "https://s1ru1.kinoplan24.ru/685/0406060506d8c62be77b5801/23451.jpg?mode=fit&width=1024&height=1024",
      premiere: false,
      age: "12+",
      genres: ["fantasy", "adventure"],
      sessions: [
        { time: "17:00", format: "2D", priceFrom: 50, hall: "Зал 4" },
        { time: "20:00", format: "2D", priceFrom: 55, hall: "Зал 4" },
      ],
    },
    {
      id: 22655,
      title: "КАК ПРИРУЧИТЬ ДРАКОНА",
      poster: "https://s2ru1.kinoplan24.ru/669/0406060506e684d820a43ea3/22655.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "6+",
      genres: ["fantasy", "family"],
      sessions: [
        { time: "16:30", format: "3D", priceFrom: 40, hall: "Зал 5" },
        { time: "19:30", format: "3D", priceFrom: 45, hall: "Зал 5" },
      ],
    },
    {
      id: 23507,
      title: "Нэчжа побеждает Царя драконов",
      poster: "https://s2ru1.kinoplan24.ru/682/0406060506e3bc7f534555f9/23507.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "6+",
      genres: ["cartoon"],
      sessions: [
        { time: "15:00", format: "3D", priceFrom: 40, hall: "Зал 6" },
        { time: "18:00", format: "3D", priceFrom: 45, hall: "Зал 6" },
      ],
    },
  ];

  const showMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const isAllVisible = visibleCount >= releasesData.length;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#2C2C2C] dark:text-gray-100 mb-6">{t("already_in_cinema")}</h2>
      <div className="flex flex-wrap justify-center md:items-stretch md:justify-between gap-6 px-2 dark:bg-gray-900">
        {releasesData.slice(0, visibleCount).map((movie) => (
          <article key={movie.id} className="flex flex-col w-full md:w-[260px] rounded-[12px] shadow-md bg-[#EAE6F8] dark:bg-gray-800">
            <Link to={`/theatres/${movie.id}`}>
              <div className="block overflow-hidden rounded-t-[12px]">
                <img src={movie.poster} alt={movie.title} className="w-full h-[350px] object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-[#2C2C2C] dark:text-white">{movie.title}</h3>
              <div className="flex items-center text-sm mb-3 gap-3">
                {movie.premiere && <span className="px-2 py-0.5 rounded-md text-xs uppercase font-bold select-none bg-purple-700 text-white">{t("premiere")}</span>}
                <span className="px-4 py-1 shadow-md bg-[#f5f5f5] dark:bg-gray-700 font-semibold select-none text-[#6B6B6B] dark:text-gray-300">{movie.age}</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                {movie.genres.map((genre) => (
                  <span key={genre} className="px-3 py-1 rounded-md select-none bg-[#f5f5f5] dark:bg-gray-700 text-sm">
                    {t(genre)}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2">
                {movie.sessions.map((session) => (
                  <div className="flex items-center justify-between px-3 py-1 rounded-lg bg-white dark:bg-gray-700 shadow-[0_0_6px_rgba(127,0,255,0.3)]">
                    <span className="font-semibold text-purple-700 dark:text-purple-300 min-w-[55px]">{session.time}</span>
                    <span className={`uppercase font-bold text-xs px-2 py-0.5 rounded-md text-white text-center min-w-[30px] ${session.format === "3D" ? "bg-[#FF6F61]" : "bg-purple-700"}`}>{session.format}</span>
                    <span className="text-[12px] ml-2 font-semibold text-[#2C2C2C] dark:text-white min-w-[60px]">
                      {t("from")} {session.priceFrom} c
                    </span>
                    <span className="text-sm font-semibold text-[#6B6B6B] dark:text-gray-300 min-w-[55px] text-right">{session.hall}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      {!isAllVisible && (
        <div className="flex justify-center">
          <button onClick={showMore} className="w-[260px] mx-auto py-3 mt-4 rounded-md font-semibold text-white bg-purple-700 hover:bg-purple-800 transition">
            {t("show_more")}
          </button>
        </div>
      )}
    </div>
  );
};

export default TheatresReleases;
