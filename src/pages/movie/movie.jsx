import React, { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import CalendarComponent3 from "../../shared/ui/custom/calendar-swiper/calendar-swiper-movie";

export const data = [
  {
    id: 1,
    image: "https://www.kino-teatr.ru/movie/posters/big/4/0/176904.jpg",
    name: "Каратэ-пацан: Легенды",
    cinema: "kayhon",
    eventDate: "2025-06-12",
    genres: [
      {
        genre: "Семейный",
        id: 1,
      },
      {
        genre: "Спорт",
        id: 2,
      },
      {
        genre: "Драма",
        id: 3,
      },
      {
        genre: "Боевик",
        id: 5,
      },
      {
        genre: "Анимадок",
        id: 4,
      },
    ],
    age: 12,
    time: "1 ч. 58 минут",
    country: "США",
    rating: 6.6,
    year: 2025,
    description:
      "Продолжение истории об американском мальчишке, победившем в соревнованиях по кунг-фу, и пожилом мастере, помогавшем ему в этом непростом деле.",
    role: "Джеки Чан, Джошуа Джексон, Арамис Найт, Ральф Маччио, Мин-На Вэнь, Шонетт Рене Уилсон, Сэди Стэнли, Уайатт Олефф, Бен Ван, Jennifer-Lynn Christie",
    video: "https://www.youtube.com/embed/55qOCxcLj6o&feature=youtu.be",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/1/19/Mission-_Impossible_%E2%80%93_The_Final_Reckoning.jpg/330px-Mission-_Impossible_%E2%80%93_The_Final_Reckoning.jpg",
    name: "Миссия невыполнима: Финальная расплата",
    cinema: "navruz",
    eventDate: "2025-06-14",
    genres: [
      {
        genre: "Боевик",
        id: 1,
      },
      {
        genre: "Триллер",
        id: 2,
      },
      {
        genre: "Приключения",
        id: 3,
      },
    ],
    age: 16,
    time: "2ч 49мин",
    country: "США, Великобритания",
    rating: 7.6,
    year: 2025,
    description:
      "Итан Хант пытается разыскать инновационный искусственный интеллект, угрожающий существованию всего мира.",
    role: "Том Круз, Анджела Бассетт, Джанет МакТир, Ребекка Фергюсон, Ванесса Кирби, Шей Уигэм, Хейли Этвелл, Трэмелл Тиллман, Ханна Уэддингхэм, Кэти М. О’Брайан",
    video: "https://www.youtube.com/embed/1bsBFEr9_Ag",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSU13E6WdhYqkaVtEbYqIRZkoyik7J4iMMhdULtdwMmjSMuM07x",
    name: "Лило и Стич",
    cinema: "siema",
    eventDate: "2025-06-14",
    genres: [
      {
        genre: "Семейный",
        id: 1,
      },
      {
        genre: "Анимация",
        id: 2,
      },
    ],
    age: 6,
    time: "1 ч. 25 минут",
    country: "США",
    rating: 7.2,
    year: 2025,
    description:
      "О дружбе, возникшей между девочкой по имени Лило и похожим на собаку/коалу пришельцем по имени Стич, который создан для создания хаоса и разрушений…",
    role: "Джейсон Скотт Ли, Зак Галифианакис, Кортни Б. Вэнс, Крис Сандерс, Тиа Каррере, Билли Магнуссен, Ханна Уэддингхэм, Sofia Lone, Сидни Агудонг, Maia Kealoha",
    video: "https://www.youtube.com/embed/5WXweoj_1Z0",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDkrEcx5SHpSuj2i6xBiFtFTbpe4tPEmWqg&s",
    name: "Игры возмездия",
    cinema: "vatan",
    eventDate: "2025-06-15",
    genres: [
      {
        genre: "Боевик",
        id: 1,
      },
      {
        genre: "Триллер",
        id: 2,
      },
    ],
    age: 18,
    time: "1 ч. 26 минут",
    country: "Великобритания, США",
    rating: 3.4,
    year: "29 мая 2025",
    description:
      "Бокуши строит неприступную крепость, собирает в ней целый арсенал оружия и преданных ему ветеранов боевых действий. Правительство пытается проникнуть в организацию, чтобы узнать его планы. После нескольких неудачных попыток власти вербуют Нэша Кавано, бывшего спецназовца, который когда-то был учеником Бокуши. Наконец-то у Нэша появляется возможность отомстить человеку, который отнял у него все, включая любовь всей его жизни.",
    role: "Лоуренс Мэйсон, Роберт Де Ниро, Джон Легуизамо, Саид Тагмауи, Джейми Фокс, Скотт Иствуд, Рита Ора, Нора Арнезедер, Шамир Андерсон, Джои Бикиччи",
    video: "https://www.youtube.com/embed/3m3MjEQh0qE",
  },
  {
    id: 5,
    image:
      "https://resizing.flixster.com/wAle06E2Nc307UwCCbqPeVIJ2fE=/206x305/v2/https://resizing.flixster.com/idSqXXW1SHplGNnq6W67KnkK-_s=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQyMWQ0OTJhLThkYjYtNDY0MS1hMDNhLTU4NDk3YWExMDllMy5qcGc=",
    name: "Как приручить дракона",
    cinema: "vatan",
    eventDate: "2025-06-15",
    genres: [
      {
        genre: "Фэнтези",
        id: 1,
      },
      {
        genre: "Приключения",
        id: 2,
      },
      {
        genre: "Семейный",
        id: 3,
      },
      {
        genre: "Анимация",
        id: 4,
      },
      {
        genre: "Комедия",
        id: 5,
      },
    ],
    age: 0,
    time: "2 ч. 5 минут",
    country: "США, Великобритания",
    rating: 0,
    year: "7 июня 2025",
    description:
      "Подростку Иккингу не слишком близки традиции его героического племени, много лет ведущего войну с драконами. Парень неожиданно заводит дружбу с драконом Беззубиком, который поможет ему и другим викингам увидеть мир с совершенно другой стороны.",
    role: "Ник Фрост, Джерард Батлер, Нико Паркер, Джулиан Деннисон, Мэйсон Темз, Бронвин Джеймс, Рут Кодд, Gabriel Howell, Гарри Тревальдвин, Мюррэй МакАртур",
    video: "https://www.youtube.com/embed/5QrRs2-o6Qs",
  },
  {
    id: 6,
    image: "https://www.kino-teatr.ru/movie/posters/big/2/5/168152.jpg",
    name: "Балерина",
    cinema: "kayhon",
    eventDate: "2025-06-16",
    genres: [
      {
        genre: "Боевик",
        id: 1,
      },
      {
        genre: "Триллер",
        id: 2,
      },
    ],
    age: 18,
    time: "2 ч. 5 минут",
    country: "США",
    rating: 7.3,
    year: "2025",
    description:
      "Опытная наемница и по совместительству профессиональная балерина охотится на убийц своей семьи.",
    role: "Киану Ривз, Гэбриел Бирн, Анжелика Хьюстон, Норман Ридус, Иэн МакШейн, Лэнс Реддик, Ана де Армас, Каталина Сандино Морено, Анн Парийо, Шэрон Дункан-Брюстер",
    video: "https://www.youtube.com/embed/I07NgjmlnSI",
  },
];

const Movie = () => {
  const [cinema, setCinema] = useState("all");
  const { t } = useTranslation();
  const [filterDate, setFilterDate] = useState([]);
  return (
    <>
      <section>
        <div className="flex items-center gap-[20px]">
          <Link to={"/"}>
            <h3>{t("home")}</h3>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <h3>{t("movie")}</h3>
        </div>
        <div className="flex md:items-center md:flex-row flex-col my-[20px] gap-[15px]">
          <h2 className="text-[30px] font-bold">{t("movie")}</h2>
          <select
            value={cinema}
            onChange={(e) => setCinema(e.target.value)}
            className="p-2 bg-gray-200 w-[250px] dark:bg-gray-700 text-black dark:text-white rounded-[8px]"
          >
            <option value="all">{t("theatres")}</option>
            <option value="kayhon">Кайхон</option>
            <option value="navruz">3D Кинотеатр Навруз</option>
            <option value="siema">Кинотеатр "Премьер Зал Душанбе"</option>
            <option value="vatan">Кинотеатр "Ватан"</option>
          </select>
        </div>

        <CalendarComponent3 onFilterChange={setFilterDate} />

        <div className="my-[50px]">
          <h2 className="text-[30px] my-[20px] font-bold">{t("movie")}</h2>
          <div className="flex items-start justify-center md:justify-start gap-[18px] flex-wrap">
            {(filterDate.length > 0
              ? filterDate
              : data.filter((e) => cinema == "all" || e.cinema == cinema)
            ).map((e) => {
              return (
                <Link key={e.id} to={`${e.id}`} className="max-md:w-[45%]">
                  <div className="md:w-[215px] m-auto md:m-0 md:h-[560px] overflow-hidden transform transition duration-600 group cursor-pointer">
                    <div className="overflow-hidden rounded-[10px] mb-[20px] relative">
                      <img
                        src={e.image}
                        className="w-full h-[250px] md:h-[325px] object-cover transform transition duration-700 group-hover:scale-110 rounded-[10px]"
                        alt="image"
                      />
                      <div
                        style={{
                          backgroundColor:
                            e.rating < 5
                              ? "red"
                              : e.rating < 7
                              ? "#db8f00"
                              : "#43c443",
                          display: e.rating == 0 ? "none" : "flex",
                        }}
                        className="absolute top-[15px] right-[15px] w-[30px] h-[20px] rounded-[4px] flex items-center justify-center text-[#FAFAFA]"
                      >
                        {e.rating}
                      </div>
                    </div>
                    <h3 className="font-bold group-hover:text-[#9F00FF] transition-all duration-500 text-[19px]">
                      {e.name}
                    </h3>
                    <h4 className="my-[15px] text-[18px] text-[#9F00FF]">
                      Расписание
                    </h4>
                    <div className="flex flex-wrap items-center gap-[5px]">
                      {e.genres.map((e) => {
                        return (
                          <h3
                            key={e.id}
                            className="h-[30px] flex items-center justify-center group-hover:text-[#FAFAFA] transition-all duration-500 px-[5px] group-hover:bg-[#9F00FF] rounded-[8px] text-[14px]"
                          >
                            {e.genre}
                          </h3>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
