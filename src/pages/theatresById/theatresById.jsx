import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";

const TheatresById = () => {
  const { t } = useTranslation();

  const releasesData = [
    {
      id: 1,
      title: "Аладдин",
      image: "/public/images/theatres/theatres(1).jpg",
      theatre: "Национальный театр Исландии (Рейкьявик)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
      description: "Яркий музыкальный спектакль по мотивам восточной сказки. Бедный, но добрый юноша находит волшебную лампу, исполняющую желания. Но на пути к счастью ему предстоит обхитрить коварного колдуна и завоевать сердце принцессы. Захватывающие приключения, волшебные превращения и важный урок о верности и честности. Премьера: 2025 г. Автор: С. Хельгасон Режиссер: А. Йоунсон",
    },
    {
      id: 2,
      title: "Необыкновенное состязание",
      image: "/public/images/theatres/theatres(2).jpg",
      theatre: "Театр Ла Скала (Милан)",
      genre: "Сказка",
      age: "3+",
      duration: 45,
      premiere: 2025,
      description: "Сказочная история о том, как зверята устроили необычное соревнование в лесу. Кто окажется самым смелым, добрым и находчивым? Маленькие герои узнают, что победа — это не всегда первое место, а помощь друзьям и умение работать в команде. Премьера: 2025 г. Автор: Л. Бруни Режиссер: Дж. Ротелли",
    },
    {
      id: 3,
      title: "Игра окончена",
      image: "/public/images/theatres/theatres(3).jpg",
      theatre: "Берлинский драматический театр (Берлинер ансамбль)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
      description: "Динамичная история о мире, где всё подчинено правилам и времени. Главный герой — ребёнок с фантазией, которую запрещено проявлять. В решающий момент он нарушает запрет, чтобы спасти воображаемого друга. Спектакль исследует темы свободы, дружбы и внутреннего сопротивления. Премьера: 2025 г. Автор: Х. Мюллер Режиссер: Ф. Кляйн",
    },
    {
      id: 4,
      title: "Моя прекрасная леди",
      image: "/public/images/theatres/theatres(4).jpg",
      theatre: "Комеди Франсез (Париж)",
      genre: "Мюзикл",
      age: "12+",
      duration: 150,
      premiere: 2025,
      description: "Современная постановка знаменитого мюзикла о девушке из простонародья, которую учат быть леди. В ярких декорациях и музыкальных номерах разворачивается история преодоления предрассудков, самоопределения и силы характера. Премьера: 2025 г. Автор: А. Лернер Режиссер: М. Бланшар",
    },
    {
      id: 5,
      title: "Книга Майны или Сказка о времени",
      image: "/public/images/theatres/theatres(5).jpg",
      theatre: "Королевский театр Ковент-Гарден (Лондон)",
      genre: "Сказка",
      age: "6+",
      duration: 55,
      premiere: 2025,
      description: "Философская сказка о девочке Майне, которая отправляется в путешествие сквозь Время, чтобы вернуть радость в своё королевство. Волшебные существа, загадки и встречи с символами прошлого и будущего делают спектакль незабываемым. Премьера: 2025 г. Автор: Д. Уитмор Режиссер: С. Нортон",
    },
    {
      id: 6,
      title: "Интервью с легендой",
      image: "/public/images/theatres/theatres(6).jpg",
      theatre: "Национальный театр Карло Феличе (Генуя, Италия)",
      genre: "Спектакль-концерт",
      age: "12+",
      duration: 100,
      premiere: 2025,
      description: "Музыкально-драматическое представление, в котором знаменитый артист делится историями своей жизни. Песни, воспоминания, сцены из прошлых ролей — всё это складывается в искренний разговор со зрителем о славе, цене успеха и времени. Премьера: 2025 г. Автор: Э. Маццини Режиссер: Р. Конти",
    },
    {
      id: 7,
      title: "Золушка",
      image: "/public/images/theatres/theatres(7).jpg",
      theatre: "МХТ имени Чехова (Москва)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
      description: "Добрая и весёлая музыкальная постановка о Золушке — девушке, которая вопреки трудностям верит в мечту. Сказочные превращения, юмор и очаровательная музыка делают спектакль интересным для всей семьи. Премьера: 2025 г. Автор: Ш. Перро Режиссер: Л. Васильев",
    },
    {
      id: 8,
      title: "Аистенок и Пугало",
      image: "/public/images/theatres/theatres(8).jpg",
      theatre: "Театр имени Вахтангова (Москва)",
      genre: "Сказка",
      age: "5+",
      duration: 50,
      premiere: 2025,
      description: "Сказка о дружбе и взаимопомощи. Маленький Аистёнок сбился с пути, а Пугало решает ему помочь. По дороге они сталкиваются с трудностями, которые помогают раскрыть их характер и показать, как важно доверие. Премьера: 2025 г. Автор: Ш. Перро Режиссер: Л. Васильев",
    },
    {
      id: 9,
      title: "Приключение Буратино",
      image: "/public/images/theatres/theatres(9).jpg",
      theatre: "Большой театр России (Москва)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
    },
    {
      id: 10,
      title: "Севильский цирюльник",
      image: "/public/images/theatres/theatres(10).jpg",
      theatre: "Театр наций (Москва)",
      genre: "Оперета",
      age: "12+",
      duration: 150,
      premiere: 2025,
    },
  ];

  const { id } = useParams();
  const obj = releasesData.find((item) => item.id === Number(id)) || soonData.find((item) => item.id === Number(id));

  if (!obj) {
    return <h2 className="text-center mt-10 text-2xl">{t("movie_not_found")}</h2>;
  }

  return (
    <section className="my-12 px-4 md:px-0 max-w-6xl mx-auto">
      <nav className="flex items-center gap-2 text-base text-gray-500 dark:text-gray-400 mb-8 select-none">
        <Link to="/" className="hover:underline hover:text-gray-700 dark:hover:text-gray-200">
          {t("home")}
        </Link>
        <span>›</span>
        <Link to="/theatres" className="hover:underline hover:text-gray-700 dark:hover:text-gray-200">
          {t("theatres")}
        </Link>
        <span>›</span>
        <span className="text-gray-800 dark:text-gray-100 font-semibold truncate max-w-xs">{obj.title}</span>
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
            <span className="inline-block px-3 py-1 rounded-md bg-gray-100 text-[#68617a] font-medium text-sm tracking-wide">{obj.genre}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">{obj.title}</h1>
          <h2 className="text-xl font-bold text-[#7F00FF] mb-6">{t("about_movie")}:</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
            <li>
              <span className="font-semibold text-gray-900 dark:text-white">{t("age_limit")}: </span>
              {obj.age}
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-white">{t("sessions")}: </span>
              {obj.duration} мин.
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-white">{t("theatres")}: </span>
              {obj.theatre}
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-white">{t("premiere")}: </span>
              {obj.premiere}
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-[70%] space-y-10 mt-10 font-medium text-gray-900 dark:text-white">
        <p>{obj.description}</p>

        <CalendarComponent />

        <div className="flex items-center dark:bg-gray-700 bg-gray-100 text-gray-900 dark:text-white rounded-[10px] py-[20px] px-[15px] gap-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9F00FF" className="size-6">
            <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
          </svg>
          <h3 className="font-bold text-[18px]">Чтобы купить билет, нажмите на сеанс.</h3>
        </div>
      </div>
    </section>
  );
};

export default TheatresById;
