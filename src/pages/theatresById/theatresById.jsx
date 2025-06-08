// pages/TheatresById/index.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";

const TheatresById = () => {
  const releasesData = [
    {
      id: 23333,
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
      title: "ФИНИКИЙСКАЯ СХЕМА",
      poster: "https://s2ru1.kinoplan24.ru/941/0406060506e3c8ca3b990452/23320.jpg?mode=fit&width=1024&height=1024",
      premiere: true,
      age: "16+",
      genres: ["боевик", "драма"],
      sessions: [{ time: "22:10", format: "2D", priceFrom: 55, hall: "Зал 3" }],
    },
    {
      id: 22701,
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

  const soonData = [
    {
      id: 23493,
      poster: "https://s1ru1.kinoplan24.ru/673/0406060506e14a5e1b9a6ad3/23493.jpg",
      title: "Балерина",
      age: "18+",
      genres: ["боевик", "триллер"],
      date: "с 5 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ"],
    },
    {
      id: 23507,
      poster: "https://s1ru1.kinoplan24.ru/682/0406060506e3bc7f534555f9/23507.jpg",
      title: "Нэчжа побеждает Царя драконов",
      age: "6+",
      genres: ["мультфильм"],
      date: "с 6 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ", "Для детей"],
    },
    {
      id: 22655,
      poster: "https://s2ru1.kinoplan24.ru/669/0406060506e684d820a43ea3/22655.jpg",
      title: "КАК ПРИРУЧИТЬ ДРАКОНА",
      age: "6+",
      genres: ["фэнтези", "семейный"],
      date: "с 7 июня 2025",
      badges: ["БИЛЕТЫ В ПРОДАЖЕ", "Для детей"],
    },
    {
      id: 23360,
      poster: "https://s1ru1.kinoplan24.ru/937/0406060506e3bcc6dfb856a1/23360.jpg",
      title: "МАТЕРИАЛИСТКА",
      age: "18+",
      genres: ["комедия", "мелодрама"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23566,
      poster: "https://s2ru1.kinoplan24.ru/664/0406060506e3bcf0a43f3ceb/23566.jpg",
      title: "Синистер. Из тьмы",
      age: "18+",
      genres: ["ужасы", "триллер", "детектив"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23572,
      poster: "https://s2ru1.kinoplan24.ru/681/0406060506e3bd430738f584/23572.jpg",
      title: "Астрал. Остров проклятых",
      age: "18+",
      genres: ["ужасы"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23580,
      poster: "https://s2ru1.kinoplan24.ru/952/0406060506e3d17431fe9e96/23580.jpg",
      title: "Память сердец",
      age: "18+",
      genres: ["драма"],
      date: "с 12 июня 2025",
      badges: [],
    },
    {
      id: 23309,
      poster: "https://s2ru1.kinoplan24.ru/949/0406060506e2bda26d79c34e/23309.jpg",
      title: "Элио",
      age: "6+",
      genres: ["мультфильм"],
      date: "с 19 июня 2025",
      badges: ["Для детей"],
    },
    {
      id: 23423,
      poster: "https://s1ru1.kinoplan24.ru/684/0406060506e79b9708adbf9c/23423.jpg",
      title: "28 лет спустя",
      age: "18+",
      genres: ["ужасы", "боевик"],
      date: "с 19 июня 2025",
      badges: [],
    },
    {
      id: 23494,
      poster: "https://s1ru1.kinoplan24.ru/665/0406060506e036f974e0e005/23494.jpg",
      title: "Кровавый урожай",
      age: "18+",
      genres: ["ужасы"],
      date: "с 19 июня 2025",
      badges: [],
    },
    {
      id: 23495,
      poster: "https://s2ru1.kinoplan24.ru/944/0406060506e8546838baa04a/23495.jpg",
      title: "F1",
      age: "14+",
      genres: ["драма", "спорт"],
      date: "с 26 июня 2025",
      badges: [],
    },
    {
      id: 23034,
      poster: "https://s2ru1.kinoplan24.ru/684/0406060506e3bd14410b837d/23569.jpg",
      title: "М3ГАН 2.0",
      age: "18+",
      genres: ["ужасы", "фантастика"],
      date: "с 26 июня 2025",
      badges: [],
    },
    {
      id: 23573,
      poster: "https://s1ru1.kinoplan24.ru/937/0406060506e3bd4a06606c92/23573.jpg",
      title: "100% тигр",
      age: "6+",
      genres: ["мультфильм"],
      date: "с 26 июня 2025",
      badges: ["Для детей"],
    },
    {
      id: 23163,
      poster: "https://s2ru1.kinoplan24.ru/668/0406060506c6293d84b30fd0/23163.jpg",
      title: "Кроссы",
      age: "12+",
      genres: ["анимация", "семейный"],
      date: "с 26 июня 2025",
      badges: [],
    },
  ];

  const { id } = useParams();
  const movie = releasesData.find((item) => item.id === Number(id)) || soonData.find((item) => item.id === Number(id));

  if (!movie) {
    return <h2 className="text-center mt-10 text-2xl">Фильм не найден</h2>;
  }

  const isRelease = !!movie.sessions;

  return (
    <section className="my-12 px-4 md:px-0 max-w-6xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 select-none">
        <Link to="/" className="hover:underline hover:text-gray-700">
          Главная
        </Link>
        <span>›</span>
        <Link to="/theatres" className="hover:underline hover:text-gray-700">
          Театры
        </Link>
        <span>›</span>
        <span className="text-gray-800 font-semibold truncate max-w-xs">{movie.title}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-80 shrink-0 relative">
          <img src={movie.poster} alt={movie.title} className="rounded-xl shadow-lg object-cover w-full h-[475px]" />

          {isRelease && movie.premiere && <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1 rounded-full text-white font-semibold text-xs uppercase shadow-lg select-none hover:brightness-110 transition">Премьера</div>}

          <div className="mt-6 flex flex-wrap gap-3">
            {movie.genres.map((g, i) => (
              <span key={i} className="bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full select-none cursor-default">
                {g}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{movie.title}</h1>

          <ul className="space-y-6 text-gray-700 text-lg">
            <li>
              <span className="font-semibold text-gray-900">Возрастное ограничение: </span>
              {movie.age}
            </li>

            {isRelease ? (
              <li>
                <span className="font-semibold text-gray-900">Сеансы:</span>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {movie.sessions.map((session, idx) => (
                    <button key={idx} className="flex justify-between items-center bg-white shadow-md rounded-lg px-5 py-3 border border-gray-200 hover:border-indigo-600 transition cursor-pointer select-none">
                      <div className="flex items-center gap-3 text-gray-800 font-semibold">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{session.time}</span>
                      </div>

                      <div className="text-gray-500 font-medium">{session.format}</div>

                      <div className="text-gray-500 font-medium">{session.hall}</div>

                      <div className="text-indigo-600 font-bold">{session.priceFrom} ₽</div>
                    </button>
                  ))}
                </div>
              </li>
            ) : (
              <li>
                <span className="font-semibold text-gray-900">Дата выхода: </span>
                {movie.date}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TheatresById;
