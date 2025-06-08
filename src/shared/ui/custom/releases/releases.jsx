import React, { useState } from "react";
import { Link } from "react-router-dom";

const TheatresReleases = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const releasesData = [
    {
      id: 23333,
      href: "/167/release/23333?date=2025-06-04",
      title: "Каратэ-пацан: Легенды",
      poster: "https://s1ru1.kinoplan24.ru/660/0406060506da6d741244e532/23333.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "12+",
      genres: ["боевик", "драма", "семейный", "спорт"],
      sessions: [
        { time: "18:30", format: "2D", priceFrom: 40, hall: "Зал 1" },
        { time: "20:15", format: "2D", priceFrom: 40, hall: "Зал 1" },
        { time: "23:50", format: "2D", priceFrom: 45, hall: "Зал 2" },
      ],
    },
    {
      id: 23500,
      href: "/167/release/23500?date=2025-06-04",
      title: "Последнее завтра",
      poster: "https://s1ru1.kinoplan24.ru/684/0406060506ddfb61f98a878c/23500.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "18+",
      genres: ["триллер"],
      sessions: [
        { time: "22:00", format: "2D", priceFrom: 40, hall: "Зал 1" },
        { time: "23:55", format: "2D", priceFrom: 40, hall: "Зал 1" },
      ],
    },
    {
      id: 23320,
      href: "/167/release/23320?date=2025-06-04",
      title: "ФИНИКИЙСКАЯ СХЕМА",
      poster: "https://s2ru1.kinoplan24.ru/941/0406060506e3c8ca3b990452/23320.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "16+",
      genres: ["боевик", "драма"],
      sessions: [{ time: "22:10", format: "2D", priceFrom: 55, hall: "Зал 3" }],
    },
    {
      id: 22701,
      href: "/167/release/22701?date=2025-06-04",
      title: "Лило и Стич",
      poster: "https://s2ru1.kinoplan24.ru/836/0406060506a4baa1ae971812/22701.jpg?mode=fit&width=1024&height=1024",
      premiere: false,
      age: "6+",
      genres: ["мультфильм"],
      sessions: [
        { time: "17:40", format: "3D", priceFrom: 45, hall: "Зал 2" },
        { time: "19:40", format: "2D", priceFrom: 45, hall: "Зал 2" },
      ],
    },
    {
      id: 22652,
      href: "/167/release/22652?date=2025-06-04",
      title: "МИССИЯ НЕВЫПОЛНИМА: ФИНАЛЬНАЯ РАСПЛАТА",
      poster: "https://s2ru1.kinoplan24.ru/661/0406060506dbaa4d5db47e81/22652.jpg?mode=fit&width=1024&height=1024",
      premiere: false,
      age: "16+",
      genres: ["боевик", "приключения"],
      sessions: [
        { time: "19:00", format: "2D", priceFrom: 55, hall: "Зал 3" },
        { time: "00:00", format: "2D", priceFrom: 55, hall: "Зал 3" },
      ],
    },
    {
      id: 23451,
      href: "/167/release/23451?date=2025-06-07",
      title: "Соловей против Муромца",
      poster: "https://s1ru1.kinoplan24.ru/685/0406060506d8c62be77b5801/23451.jpg?mode=fit&width=1024&height=1024",
      premiere: false,
      age: "12+",
      genres: ["фэнтези", "приключения"],
      sessions: [
        { time: "17:00", format: "2D", priceFrom: 50, hall: "Зал 4" },
        { time: "20:00", format: "2D", priceFrom: 55, hall: "Зал 4" },
      ],
    },
    {
      id: 22655,
      href: "/167/release/22655?date=2025-06-07",
      title: "КАК ПРИРУЧИТЬ ДРАКОНА",
      poster: "https://s2ru1.kinoplan24.ru/669/0406060506e684d820a43ea3/22655.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "6+",
      genres: ["фэнтези", "семейный"],
      sessions: [
        { time: "16:30", format: "3D", priceFrom: 40, hall: "Зал 5" },
        { time: "19:30", format: "3D", priceFrom: 45, hall: "Зал 5" },
      ],
    },
    {
      id: 23507,
      href: "/167/release/23507?date=2025-06-06",
      title: "Нэчжа побеждает Царя драконов",
      poster: "https://s2ru1.kinoplan24.ru/682/0406060506e3bc7f534555f9/23507.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "6+",
      genres: ["мультфильм"],
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
      <h2 className="text-2xl font-semibold text-[#2C2C2C] mb-6">Уже в кино</h2>
      <div className="flex flex-wrap justify-start gap-6 px-2" style={{ backgroundColor: "#F8F9FF" }}>
        {releasesData.slice(0, visibleCount).map((movie) => (
          <Link to={`/theatres/${movie.id}`}>
            <article key={movie.id} className="flex flex-col rounded-[12px] shadow-md cursor-pointer" style={{ backgroundColor: "#EAE6F8", width: "260px" }}>
              <div className="block overflow-hidden rounded-t-[12px]">
                <img src={movie.poster} alt={movie.title} className="w-full h-[350px] object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#2C2C2C" }}>
                  {movie.title}
                </h3>
                <div className="flex items-center text-sm mb-3 gap-3">
                  {movie.premiere && (
                    <span className="px-2 py-0.5 rounded-md text-xs uppercase font-bold select-none" style={{ backgroundColor: "#7F00FF", color: "white" }}>
                      Премьера
                    </span>
                  )}
                  <span className="px-4 py-1 shadow md bg-[#f5f5f5] font-semibold select-none" style={{ color: "#6B6B6B" }}>
                    {movie.age}
                  </span>
                </div>
                <p className="text-sm mb-4" style={{ color: "#6B6B6B", minHeight: "36px" }}>
                  {movie.genres.join(", ")}
                </p>
                <div className="mt-auto flex flex-col gap-2">
                  {movie.sessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-3 py-1 rounded-lg"
                      style={{
                        backgroundColor: "white",
                        boxShadow: "0 0 6px rgba(127,0,255,0.3)",
                      }}
                    >
                      <span className="font-semibold" style={{ color: "#7F00FF", minWidth: "55px" }}>
                        {session.time}
                      </span>
                      <span
                        className="uppercase font-bold text-xs px-2 py-0.5 rounded-md"
                        style={{
                          backgroundColor: session.format === "3D" ? "#FF6F61" : "#7F00FF",
                          color: "white",
                          minWidth: "30px",
                          textAlign: "center",
                        }}
                      >
                        {session.format}
                      </span>
                      <span className="text-base ml-2 font-semibold" style={{ color: "#2C2C2C", minWidth: "60px" }}>
                        от {session.priceFrom} c
                      </span>
                      <span className="text-sm font-semibold" style={{ color: "#6B6B6B", minWidth: "55px", textAlign: "right" }}>
                        {session.hall}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}

        {!isAllVisible && (
          <button onClick={showMore} className="w-full mx-auto max-w-[260px] py-3 mt-4 rounded-md font-semibold text-white" style={{ backgroundColor: "#7F00FF" }}>
            Показать ещё
          </button>
        )}
      </div>
    </div>
  );
};

export default TheatresReleases;
