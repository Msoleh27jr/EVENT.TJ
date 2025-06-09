import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TheatresSoon = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(12);

  const soonData = [
    {
      id: 23493,
      poster: "https://s1ru1.kinoplan24.ru/673/0406060506e14a5e1b9a6ad3/23493.jpg",
      title: "Балерина",
      age: "18+",
      genres: ["action", "thriller"],
      date: "с 5 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ"],
    },
    {
      id: 23507,
      poster: "https://s1ru1.kinoplan24.ru/682/0406060506e3bc7f534555f9/23507.jpg",
      title: "Нэчжа побеждает Царя драконов",
      age: "6+",
      genres: ["cartoon"],
      date: "с 6 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ", "Для детей"],
    },
    {
      id: 22655,
      poster: "https://s2ru1.kinoplan24.ru/669/0406060506e684d820a43ea3/22655.jpg",
      title: "КАК ПРИРУЧИТЬ ДРАКОНА",
      age: "6+",
      genres: ["fantasy", "family"],
      date: "с 7 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ", "Для детей"],
    },
    {
      id: 23360,
      poster: "https://s1ru1.kinoplan24.ru/937/0406060506e3bcc6dfb856a1/23360.jpg",
      title: "МАТЕРИАЛИСТКА",
      age: "18+",
      genres: ["comedy", "romance"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23566,
      poster: "https://s2ru1.kinoplan24.ru/664/0406060506e3bcf0a43f3ceb/23566.jpg",
      title: "Синистер. Из тьмы",
      age: "18+",
      genres: ["horror", "thriller", "detective"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23572,
      poster: "https://s2ru1.kinoplan24.ru/681/0406060506e3bd430738f584/23572.jpg",
      title: "Астрал. Остров проклятых",
      age: "18+",
      genres: ["horror"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23580,
      poster: "https://s2ru1.kinoplan24.ru/952/0406060506e3d17431fe9e96/23580.jpg",
      title: "Память сердец",
      age: "18+",
      genres: ["drama"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23309,
      poster: "https://s2ru1.kinoplan24.ru/949/0406060506e2bda26d79c34e/23309.jpg",
      title: "Элио",
      age: "6+",
      genres: ["cartoon"],
      date: "с 19 июня 2025",
      badges: ["Для детей"],
    },
    {
      id: 23423,
      poster: "https://s1ru1.kinoplan24.ru/684/0406060506e79b9708adbf9c/23423.jpg",
      title: "28 лет спустя",
      age: "18+",
      genres: ["horror", "action"],
      date: "с 19 июня 2025",
      badges: [],
    },
    {
      id: 23494,
      poster: "https://s1ru1.kinoplan24.ru/665/0406060506e036f974e0e005/23494.jpg",
      title: "Кровавый урожай",
      age: "18+",
      genres: ["horror"],
      date: "с 19 июня 2025",
      badges: [],
    },
    {
      id: 23495,
      poster: "https://s2ru1.kinoplan24.ru/944/0406060506e8546838baa04a/23495.jpg",
      title: "F1",
      age: "14+",
      genres: ["drama", "sport"],
      date: "с 26 июня 2025",
      badges: [],
    },
    {
      id: 23034,
      poster: "https://s2ru1.kinoplan24.ru/684/0406060506e3bd14410b837d/23569.jpg",
      title: "М3ГАН 2.0",
      age: "18+",
      genres: ["horror", "sci-fi"],
      date: "с 26 июня 2025",
      badges: [],
    },
    {
      id: 23573,
      poster: "https://s1ru1.kinoplan24.ru/937/0406060506e3bd4a06606c92/23573.jpg",
      title: "100% тигр",
      age: "6+",
      genres: ["cartoon"],
      date: "с 26 июня 2025",
      badges: ["Для детей"],
    },
    {
      id: 23163,
      poster: "https://s2ru1.kinoplan24.ru/668/0406060506c6293d84b30fd0/23163.jpg",
      title: "Кроссы",
      age: "12+",
      genres: ["animation", "family"],
      date: "с 26 июня 2025",
      badges: [],
    },
  ];

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, soonData.length));
  };

  const isAllVisible = visibleCount >= soonData.length;

  return (
    <div className="px-2 py-8 dark:bg-gray-900">
      <div>
        <h2 className="text-2xl font-semibold text-[#2C2C2C] dark:text-white mb-6">{t("soon")}</h2>
        <div className="flex flex-wrap justify-center md:items-stretch md:justify-between gap-6 px-2 dark:bg-gray-900">
          {soonData.slice(0, visibleCount).map((e) => (
            <div key={e.id} className="flex flex-col w-full md:w-[23%] rounded-[12px] shadow-md cursor-pointer bg-[#EAE6F8] dark:bg-gray-800">
              <Link to={`/theatres/${e.id}`}>
                <div className="overflow-hidden rounded-t-[12px] relative pb-[100%]">
                  <img src={e.poster} alt={e.title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  {e.badges.includes("tickets_on_sale") && <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-xs font-bold uppercase text-white select-none bg-purple-700">{t("tickets_on_sale")}</span>}
                </div>
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 text-[#2C2C2C] dark:text-white">{e.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm mb-3 text-[#6B6B6B] dark:text-gray-300">
                  {e.age && <span className="px-3 py-1 rounded-md font-semibold select-none bg-[#f5f5f5] dark:bg-gray-700">{e.age}</span>}
                  {e.genres.map((genre) => (
                    <span key={genre} className="px-3 py-1 rounded-md select-none bg-[#f5f5f5] dark:bg-gray-700 text-sm">
                      {t(genre)}
                    </span>
                  ))}
                </div>
                {e.badges.includes("for_kids") && <div className="mb-2 text-xs font-semibold text-green-700 dark:text-green-400">{t("for_kids")}</div>}
                <div className="text-sm text-[#6B6B6B] dark:text-gray-400">{e.date}</div>
              </div>
            </div>
          ))}
        </div>

        {!isAllVisible && (
          <div className="mt-6 flex justify-center">
            <button onClick={showMore} className="max-w-[260px] w-full py-3 rounded-md font-semibold text-white bg-purple-700 hover:bg-purple-800 transition-colors duration-200" type="button">
              {t("show_more")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheatresSoon;
