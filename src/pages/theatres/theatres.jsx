import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Title from "../../shared/ui/custom/title/title";
import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";

const Theatres = () => {
  const data = [
    {
      id: 1,
      title: "Аладдин",
      image: "/images/theatres/theatres-1.jpg",
      theatre: "Комеди Франсез (Париж)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
      date: "this_week",
      description: "Яркий музыкальный спектакль по мотивам восточной сказки. Бедный, но добрый юноша находит волшебную лампу, исполняющую желания. Но на пути к счастью ему предстоит обхитрить коварного колдуна и завоевать сердце принцессы. Захватывающие приключения, волшебные превращения и важный урок о верности и честности. Премьера: 2025 г. Автор: С. Хельгасон Режиссер: А. Йоунсон",
    },
    {
      id: 2,
      title: "Необыкновенное состязание",
      image: "/images/theatres/theatres-2.jpg",
      theatre: "Театр Ла Скала (Милан)",
      genre: "Сказка",
      age: "3+",
      duration: 45,
      premiere: 2025,
      date: "today",
      description: "Сказочная история о том, как зверята устроили необычное соревнование в лесу. Кто окажется самым смелым, добрым и находчивым? Маленькие герои узнают, что победа — это не всегда первое место, а помощь друзьям и умение работать в команде. Премьера: 2025 г. Автор: Л. Бруни Режиссер: Дж. Ротелли",
    },
    {
      id: 3,
      title: "Игра окончена",
      image: "/images/theatres/theatres-3.jpg",
      theatre: "Комеди Франсез (Париж)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
      date: "tomorrow",
      description: "Динамичная история о мире, где всё подчинено правилам и времени. Главный герой — ребёнок с фантазией, которую запрещено проявлять. В решающий момент он нарушает запрет, чтобы спасти воображаемого друга. Спектакль исследует темы свободы, дружбы и внутреннего сопротивления. Премьера: 2025 г. Автор: Х. Мюллер Режиссер: Ф. Кляйн",
    },
    {
      id: 4,
      title: "Моя прекрасная леди",
      image: "/images/theatres/theatres-4.jpg",
      theatre: "Комеди Франсез (Париж)",
      genre: "Мюзикл",
      age: "12+",
      duration: 150,
      premiere: 2025,
      date: "today",
      description: "Современная постановка знаменитого мюзикла о девушке из простонародья, которую учат быть леди. В ярких декорациях и музыкальных номерах разворачивается история преодоления предрассудков, самоопределения и силы характера. Премьера: 2025 г. Автор: А. Лернер Режиссер: М. Бланшар",
    },
    {
      id: 5,
      title: "Книга Майны или Сказка о времени",
      image: "/images/theatres/theatres-5.jpg",
      theatre: "МХТ имени Чехова (Москва)",
      genre: "Сказка",
      age: "6+",
      duration: 55,
      premiere: 2025,
      date: "this_week",
      description: "Философская сказка о девочке Майне, которая отправляется в путешествие сквозь Время, чтобы вернуть радость в своё королевство. Волшебные существа, загадки и встречи с символами прошлого и будущего делают спектакль незабываемым. Премьера: 2025 г. Автор: Д. Уитмор Режиссер: С. Нортон",
    },
    {
      id: 6,
      title: "Интервью с легендой",
      image: "/images/theatres/theatres-6.jpg",
      theatre: "Театр Ла Скала (Милан)",
      genre: "Спектакль-концерт",
      age: "12+",
      duration: 100,
      premiere: 2025,
      date: "tomorrow",
      description: "Музыкально-драматическое представление, в котором знаменитый артист делится историями своей жизни. Песни, воспоминания, сцены из прошлых ролей — всё это складывается в искренний разговор со зрителем о славе, цене успеха и времени. Премьера: 2025 г. Автор: Э. Маццини Режиссер: Р. Конти",
    },
    {
      id: 7,
      title: "Золушка",
      image: "/images/theatres/theatres-7.jpg",
      theatre: "МХТ имени Чехова (Москва)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
      date: "today",
      description: "Добрая и весёлая музыкальная постановка о Золушке — девушке, которая вопреки трудностям верит в мечту. Сказочные превращения, юмор и очаровательная музыка делают спектакль интересным для всей семьи. Премьера: 2025 г. Автор: Ш. Перро Режиссер: Л. Васильев",
    },
    {
      id: 8,
      title: "Аистенок и Пугало",
      image: "/images/theatres/theatres-8.jpg",
      theatre: "Театр Ла Скала (Милан)",
      genre: "Сказка",
      age: "5+",
      duration: 50,
      premiere: 2025,
      date: "tomorrow",
      description: "Сказка о дружбе и взаимопомощи. Маленький Аистёнок сбился с пути, а Пугало решает ему помочь. По дороге они сталкиваются с трудностями, которые помогают раскрыть их характер и показать, как важно доверие. Премьера: 2025 г. Автор: Ш. Перро Режиссер: Л. Васильев",
    },
    {
      id: 9,
      title: "Приключение Буратино",
      image: "/images/theatres/theatres-9.jpg",
      theatre: "МХТ имени Чехова (Москва)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
      date: "this_week",
    },
    {
      id: 10,
      title: "Севильский цирюльник",
      image: "/images/theatres/theatres-10.jpg",
      theatre: "Театр Ла Скала (Милан)",
      genre: "Оперета",
      age: "12+",
      duration: 150,
      premiere: 2025,
      date: "today",
    },
  ];

  const theatres = [
    {
      id: 1,
      name: "Театр Ла Скала (Милан)",
    },
    {
      id: 2,
      name: "МХТ имени Чехова (Москва)",
    },
    {
      id: 3,
      name: "Комеди Франсез (Париж)",
    },
  ];

  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectTheatre, setSelectTheatre] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const showMore = () => setVisibleCount((prev) => prev + 4);
  const isAllVisible = visibleCount >= data.length;

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-5">
        <Title parentPage="home" curentPage="theatres" titlePage="theatres" />
        <div className="w-full relative bottom-[5px] flex flex-col md:flex-row items-center gap-5 md:items-baseline justify-between">
          <select value={selectTheatre} onChange={(e) => setSelectTheatre(e.target.value)} className="w-[80%] md:w-auto p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-[8px]">
            <option value="all">{t("theatres")}</option>
            {theatres.map((e) => (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 font-semibold text-gray-900 dark:text-white mt-6">
            <button onClick={() => setDateFilter("today")} className={`relative font-medium pb-1 transition-colors duration-300 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5  before:bg-[#9F00FF] before:transition-all before:duration-300 ${dateFilter === "today" ? "before:w-full text-[#9F00FF]" : "before:w-0 hover:before:w-full"}`}>
              {t("today")}
            </button>
            <button onClick={() => setDateFilter("tomorrow")} className={`relative font-medium pb-1 transition-colors duration-300 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5  before:bg-[#9F00FF] before:transition-all before:duration-300 ${dateFilter === "tomorrow" ? "before:w-full text-[#9F00FF]" : "before:w-0 hover:before:w-full"}`}>
              {t("tomorrow")}
            </button>
            <button onClick={() => setDateFilter("this_week")} className={`relative font-medium pb-1 transition-colors duration-300 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5  before:bg-[#9F00FF] before:transition-all before:duration-300 ${dateFilter === "this_week" ? "before:w-full text-[#9F00FF]" : "before:w-0 hover:before:w-full"}`}>
              {t("this_week")}
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-20 flex-col items-center md:items-start">
        <CalendarComponent />
        <section className="py-10 px-4">
          <h2 className="text-4xl font-semibold text-[#2C2C2C] dark:text-white mb-8 text-center md:text-start">{t("theatres")}</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {data
              .filter((e) => (selectTheatre == "all" || e.theatre == selectTheatre) && (dateFilter == "all" || e.date == dateFilter))
              .slice(0, visibleCount)
              .map((e) => (
                <article key={e.id} className="group flex flex-col w-full md:w-[19%] overflow-hidden cursor-pointer">
                  <Link to={`/theatres/${e.id}`} aria-label={`Перейти к спектаклю ${e.title}`} className="block rounded-2xl overflow-hidden shadow-md">
                    <img src={e.image} alt={e.title} className="w-full h-[333px] object-cover transition-transform duration-900 ease-in-out group-hover:scale-105" />
                  </Link>
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-1 transition-colors duration-900 ease-in-out group-hover:text-[#7F00FF]">{e.title}</h3>
                    <p className="text-base text-[#7F00FF] font-semibold mb-2">{e.theatre}</p>
                    <div className="text-sm font-semibold space-y-1">
                      <p className="inline-block p-2 rounded-[6px] bg-gray-100 dark:bg-gray-800 text-[#68617a] dark:text-white transition-colors duration-900 ease-in-out group-hover:bg-[#7F00FF] group-hover:text-white tracking-normal">{e.genre}</p>
                    </div>
                  </div>
                </article>
              ))}
          </div>
          {!isAllVisible && (
            <div className="mt-10 text-center">
              <button onClick={showMore} className="w-[260px] mx-auto py-3 mt-4 rounded-md font-semibold text-white bg-purple-700 hover:bg-purple-800 transition">
                {t("show_more")}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Theatres;
