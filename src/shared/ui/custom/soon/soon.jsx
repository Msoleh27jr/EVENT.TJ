import React, { useState } from "react";

const Soon = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const releasesData = [
    {
      id: 23493,
      href: "/167/release/23493?date=2025-06-05",
      poster: "https://s1ru1.kinoplan24.ru/673/0406060506e14a5e1b9a6ad3/23493.jpg",
      title: "Балерина",
      age: "18+",
      genres: ["боевик", "триллер"],
      date: "с 5 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ"],
    },
    {
      id: 23507,
      href: "/167/release/23507?date=2025-06-05",
      poster: "https://s1ru1.kinoplan24.ru/682/0406060506e3bc7f534555f9/23507.jpg",
      title: "Нэчжа побеждает Царя драконов",
      age: "6+",
      genres: ["мультфильм"],
      date: "с 6 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ", "Для детей"],
    },
    {
      id: 22655,
      href: "/167/release/22655?date=2025-06-05",
      poster: "https://s2ru1.kinoplan24.ru/669/0406060506e684d820a43ea3/22655.jpg",
      title: "КАК ПРИРУЧИТЬ ДРАКОНА",
      age: "6+",
      genres: ["фэнтези", "семейный"],
      date: "с 7 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ", "Для детей"],
    },
    {
      id: 23360,
      href: "/167/release/23360?date=2025-06-05",
      poster: "https://s1ru1.kinoplan24.ru/937/0406060506e3bcc6dfb856a1/23360.jpg",
      title: "МАТЕРИАЛИСТКА",
      age: "18+",
      genres: ["комедия", "мелодрама"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23566,
      href: "/167/release/23566?date=2025-06-07",
      poster: "https://s2ru1.kinoplan24.ru/664/0406060506e3bcf0a43f3ceb/23566.jpg",
      title: "Синистер. Из тьмы",
      age: "18+",
      genres: ["ужасы", "триллер", "детектив"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23572,
      href: "/167/release/23572?date=2025-06-07",
      poster: "https://s2ru1.kinoplan24.ru/681/0406060506e3bd430738f584/23572.jpg",
      title: "Астрал. Остров проклятых",
      age: "18+",
      genres: ["ужасы"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23580,
      href: "/167/release/23580?date=2025-06-07",
      poster: "https://s2ru1.kinoplan24.ru/952/0406060506e3d17431fe9e96/23580.jpg",
      title: "Память сердец",
      age: "18+",
      genres: ["драма"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23309,
      href: "/167/release/23309?date=2025-06-07",
      poster: "https://s2ru1.kinoplan24.ru/949/0406060506e2bda26d79c34e/23309.jpg",
      title: "Элио",
      age: "6+",
      genres: ["мультфильм"],
      date: "с 19 июня 2025",
      badges: ["Для детей"],
    },
    {
      id: 23423,
      href: "/167/release/23423?date=2025-06-07",
      poster: "https://s1ru1.kinoplan24.ru/684/0406060506e79b9708adbf9c/23423.jpg",
      title: "28 лет спустя",
      age: "18+",
      genres: ["ужасы", "боевик"],
      date: "с 19 июня 2025",
      badges: [],
    },
    {
      id: 23494,
      href: "/167/release/23494?date=2025-06-07",
      poster: "https://s1ru1.kinoplan24.ru/665/0406060506e036f974e0e005/23494.jpg",
      title: "Кровавый урожай",
      age: "18+",
      genres: ["ужасы"],
      date: "с 19 июня 2025",
      badges: [],
    },
    {
      id: 23495,
      href: "/167/release/23495?date=2025-06-07",
      poster: "https://s2ru1.kinoplan24.ru/944/0406060506e8546838baa04a/23495.jpg",
      title: "F1",
      age: "14+",
      genres: ["драма", "спорт"],
      date: "с 26 июня 2025",
      badges: [],
    },
    {
      id: 23034,
      href: "/167/release/23034?date=2025-06-07",
      poster: "https://s2ru1.kinoplan24.ru/684/0406060506e3bd14410b837d/23569.jpg",
      title: "М3ГАН 2.0",
      age: "18+",
      genres: ["ужасы", "фантастика"],
      date: "с 26 июня 2025",
      badges: [],
    },
    {
      id: 23573,
      href: "/167/release/23573?date=2025-06-07",
      poster: "https://s1ru1.kinoplan24.ru/937/0406060506e3bd4a06606c92/23573.jpg",
      title: "100% тигр",
      age: "6+",
      genres: ["мультфильм"],
      date: "с 26 июня 2025",
      badges: ["Для детей"],
    },
    {
      id: 23163,
      href: "/167/release/23163?date=2025-06-07",
      poster: "https://s2ru1.kinoplan24.ru/668/0406060506c6293d84b30fd0/23163.jpg",
      title: "Кроссы",
      age: "12+",
      genres: ["анимация", "семейный"],
      date: "с 26 июня 2025",
      badges: [],
    },
  ];

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, releasesData.length));
  };

  const isAllVisible = visibleCount >= releasesData.length;

  return (
    <div className="px-2 py-8" style={{ backgroundColor: "#F8F9FF" }}>
      <div>
        <h2 className="text-2xl font-semibold text-[#2C2C2C] mb-6">Скоро в кино</h2>
        <div className="flex flex-wrap justify-start gap-6">
          {releasesData.slice(0, visibleCount).map((e) => (
            <a key={e.id} href={e.href} className="flex flex-col rounded-[12px] shadow-md cursor-pointer bg-[#EAE6F8]" style={{ width: "260px" }}>
              <div className="overflow-hidden rounded-t-[12px] relative pb-[100%]">
                <img src={e.poster} alt={`Постер релиза ${e.title}`} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                {e.badges.includes("БИЛЕТЫ В ПРОДАЖЕ") && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-xs font-bold uppercase text-white select-none" style={{ backgroundColor: "#7F00FF" }}>
                    БИЛЕТЫ В ПРОДАЖЕ
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#2C2C2C" }}>
                  {e.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-sm mb-3" style={{ color: "#6B6B6B" }}>
                  {e.age && <span className="px-3 py-1 rounded-md font-semibold select-none bg-[#f5f5f5]">{e.age}</span>}
                  {e.genres.map((genre) => (
                    <span key={genre} className="px-3 py-1 rounded-md select-none bg-[#f5f5f5]" style={{ fontSize: "0.8rem" }}>
                      {genre}
                    </span>
                  ))}
                </div>
                {e.badges.includes("Для детей") && <div className="mb-2 text-xs font-semibold text-green-700">Для детей</div>}
                <div className="text-sm" style={{ color: "#6B6B6B" }}>
                  {e.date}
                </div>
              </div>
            </a>
          ))}
        </div>

        {!isAllVisible && (
          <div className="mt-6 flex justify-center">
            <button onClick={showMore} className="max-w-[260px] w-full py-3 rounded-md font-semibold text-white" style={{ backgroundColor: "#7F00FF" }} type="button">
              Показать ещё
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Soon;
