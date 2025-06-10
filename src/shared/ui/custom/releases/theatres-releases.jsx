import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TheatresReleases = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(10);

  const releasesData = [
    {
      id: 1,
      title: "Аладдин",
      image: "/src/shared/images/theatres/theatres(1).jpg",
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
      image: "/src/shared/images/theatres/theatres(2).jpg",
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
      image: "/src/shared/images/theatres/theatres(3).jpg",
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
      image: "/src/shared/images/theatres/theatres(4).jpg",
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
      image: "/src/shared/images/theatres/theatres(5).jpg",
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
      image: "/src/shared/images/theatres/theatres(6).jpg",
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
      image: "/src/shared/images/theatres/theatres(7).jpg",
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
      image: "/src/shared/images/theatres/theatres(8).jpg",
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
      image: "/src/shared/images/theatres/theatres(9).jpg",
      theatre: "Большой театр России (Москва)",
      genre: "Музыкальная сказка",
      age: "3+",
      duration: 50,
      premiere: 2025,
    },
    {
      id: 10,
      title: "Севильский цирюльник",
      image: "/src/shared/images/theatres/theatres(10).jpg",
      theatre: "Театр наций (Москва)",
      genre: "Оперета",
      age: "12+",
      duration: 150,
      premiere: 2025,
    },
  ];

  const showMore = () => setVisibleCount((prev) => prev + 4);
  const isAllVisible = visibleCount >= releasesData.length;

  return (
    <section className="py-10 px-4">
      <h2 className="text-4xl font-semibold text-[#2C2C2C] dark:text-white mb-8 text-center md:text-start">{t("theatres")}</h2>

      <div className="flex flex-wrap justify-center md:justify-start gap-6 max-w-7xl mx-auto">
        {releasesData.slice(0, visibleCount).map((e) => (
          <article key={e.id} className="group flex flex-col w-full max-w-[230px] overflow-hidden cursor-pointer">
            <Link to={`/theatres/${e.id}`} aria-label={`Перейти к спектаклю ${e.title}`} className="block rounded-2xl overflow-hidden shadow-md">
              <img src={e.image} alt={e.title} className="w-full h-[350px] object-cover transition-transform duration-900 ease-in-out group-hover:scale-105" />
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
  );
};

export default TheatresReleases;
