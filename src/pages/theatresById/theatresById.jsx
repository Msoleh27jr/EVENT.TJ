import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";

const TheatresById = () => {
  const data = [
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
      description: "aladdin_description",
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
      description: "extraordinary_competition_description",
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
      description: "game_over_description",
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
      description: "my_fair_lady_description",
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
      description: "book_of_maina_description",
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
      description: "interview_with_legend_description",
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
      description: "cinderella_description",
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
      description: "stork_and_scarecrow_description",
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
    },
  ];

  const { t } = useTranslation();
  const { id } = useParams();
  const obj = data.find((item) => item.id === Number(id));

  if (!obj) {
    return <h2 className="text-center mt-10 text-2xl">{t("movie_not_found")}</h2>;
  }

  return (
    <section className="my-12 px-4 md:px-0 max-w-6xl">
      <nav className="flex items-center gap-2 text-base text-gray-500 dark:text-gray-400 mb-8 select-none">
        <Link to="/" className="hover:underline hover:text-gray-700 dark:hover:text-gray-200">
          {t("home")}
        </Link>
        <span>›</span>
        <Link to="/theatres" className="hover:underline hover:text-gray-700 dark:hover:text-gray-200">
          {t("theatres")}
        </Link>
        <span>›</span>
        <span className="text-gray-800 dark:text-gray-100 font-semibold truncate max-w-xs">{t(obj.title)}</span>
      </nav>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-80 shrink-0 relative">
          <img src={obj.image} alt={obj.title} className="rounded-xl shadow-lg object-cover w-full h-[475px]" />
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1 rounded-full text-white font-semibold text-xs uppercase shadow-lg select-none hover:brightness-110 transition">{obj.premiere}</div>
          <div className="w-full flex justify-center">
            <button className="w-full py-3 mt-4 rounded-md font-semibold bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200">{t("buy_ticket")}</button>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-md bg-gray-100 text-[#68617a] font-medium text-sm tracking-wide">{t(obj.genre)}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">{t(obj.title)}</h1>
          <h2 className="text-xl font-bold text-[#7F00FF] mb-6">{t("about_movie")}:</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
            <li>
              <span className="font-semibold text-gray-900 dark:text-white">{t("age_limit")}: </span>
              {obj.age}
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-white">{t("sessions")}: </span>
              {obj.duration}
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-white">{t("theatres")}: </span>
              {t(obj.theatre)}
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-white">{t("premiere")}: </span>
              {t(obj.premiere)}
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-[70%] space-y-10 mt-10 font-medium text-gray-900 dark:text-white">
        <p>{t(obj.description)}</p>
        <CalendarComponent />
        <div className="flex items-center dark:bg-gray-700 bg-gray-100 text-gray-900 dark:text-white rounded-[10px] py-[20px] px-[15px] gap-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9F00FF" className="size-6">
            <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
          </svg>
          <h3 className="font-bold text-[18px]">{t("select_session_tip")}</h3>
        </div>
      </div>
    </section>
  );
};

export default TheatresById;
