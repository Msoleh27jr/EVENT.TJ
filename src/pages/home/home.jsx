import React, { useState } from "react";
import { News } from "../../app/providers/lazy/lazy";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import FirstSecton from "../../shared/firstSectionHomePage/firstSecton";
import TheatresSoon from "../../shared/ui/custom/soon/theatres-soon";

const eventsData = [
  {
    id: 1,
    eventImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWI6exsG33eBZhSmVZ8R9mYWzW451VJDKlw&s",
    eventName: "Shashmaqom Music Festival",
    eventSee: 65,
    eventDescription:
      "Традиционный фестиваль классической таджикской музыки Шашмаком, соберёт лучших исполнителей страны.",
    eventLocation: "Амфитеатр, Худжанд",
    eventDate: "15 июня 2025",
    eventTime: "19:00",
    eventTag: "Музыка",
  },
  {
    id: 2,
    eventImage:
      "https://i.ytimg.com/vi/6p1D2QGC3p0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXY0qBa5LdtdGC9zpO7bEgtcRx3Q",
    eventName: "Judo Grand Slam Dushanbe 2025",
    eventSee: 120,
    eventDescription: "Международный турнир по дзюдо, этап IJF World Tour.",
    eventLocation: "Kasri Tennis, Душанбе",
    eventDate: "2–4 мая 2025",
    eventTime: "10:00",
    eventTag: "Спорт",
  },
  {
    id: 3,
    eventImage:
      "https://www.un-glaciers.org/sites/default/files/2024-10/logo_iygp_dark_full%20color.png",
    eventName: "International Conference on Glaciers’ Preservation",
    eventSee: 80,
    eventDescription: "Конференция ООН и Таджикистана по сохранению ледников.",
    eventLocation: "Kokhi Somon, Душанбе",
    eventDate: "29–31 мая 2025",
    eventTime: "09:00",
    eventTag: "Экология",
  },
  {
    id: 4,
    eventImage:
      "https://pressa.tj/wp-content/uploads/2025/03/omodagi-ba-navruz-24.jpg",
    eventName: "Navruz World Youth Festival",
    eventSee: 200,
    eventDescription:
      "Фестиваль для молодежи с культурной и спортивной программой.",
    eventLocation: "Душанбе + поездки в Истаравшан, Пенджикент, Худжанд",
    eventDate: "16–21 марта 2025",
    eventTime: "12:00",
    eventTag: "Культура",
  },
  {
    id: 5,
    eventImage:
      "https://www.france.fi/wp-content/uploads/2025/02/francophonie-2025-1098x617.jpg",
    eventName: "Francophonie Days 2025",
    eventSee: 50,
    eventDescription:
      "Фестиваль французской культуры: кино, квизы, мастер‑классы.",
    eventLocation: "Vatan Cinema и другие площадки, Душанбе",
    eventDate: "21 апреля – 2 мая 2025",
    eventTime: "18:00",
    eventTag: "Образование",
  },
  {
    id: 6,
    eventImage:
      "https://asiaplustj.info/sites/default/files/articles/258058/8.JPG",
    eventName: "Summer Fest: Food & Balloon Festival",
    eventSee: 180,
    eventDescription:
      "Фестиваль национальной кухни и воздушных шаров в Душанбе.",
    eventLocation: "Душанбе, большой стадион",
    eventDate: "Сентябрь 2025",
    eventTime: "11:00",
    eventTag: "Еда",
  },
  {
    id: 7,
    eventImage:
      "https://asiaplustj.info/sites/default/files/articles/279644/%D0%BF%D0%BB%D0%BE%D0%B2%20%D0%90%D0%B7%D0%B8%D1%8F-%D0%9F%D0%BB%D1%8E%D1%81.jpg",
    eventName: "Pilaf Festival",
    eventSee: 220,
    eventDescription: "Международный фестиваль плова в парке культуры Душанбе.",
    eventLocation: "Парк культуры, Душанбе",
    eventDate: "Октябрь 2025",
    eventTime: "07:00",
    eventTag: "Еда",
  },
  {
    id: 8,
    eventImage:
      "https://cdn.easteast.world/uploads/post_image/5836/image/74c4d85812a3446cb38a.jpg",
    eventName: "Roof of the World Music Festival",
    eventSee: 150,
    eventDescription: "Этно‑фестиваль музыки в Хороге, Памир.",
    eventLocation: "Парк, Хорог",
    eventDate: "Июль 2025",
    eventTime: "14:00",
    eventTag: "Музыка",
  },
  {
    id: 9,
    eventImage:
      "https://pamirtrips.com/wp-content/uploads/chabysh-horse-festival-hd-1.jpg",
    eventName: "At‑Chabysh Horse Festival",
    eventSee: 90,
    eventDescription: "Праздник конного спорта, бузкаши и поэзии в Мургабе.",
    eventLocation: "Мургаб, Памир",
    eventDate: "Вторая неделя июля 2025",
    eventTime: "10:00",
    eventTag: "Спорт",
  },
  {
    id: 10,
    eventImage:
      "https://adventuresoflilnicki.com/wp-content/uploads/2020/08/Bolshoi-Allo-Fann-Mountains-Tajikistan-8.jpg",
    eventName: "Tajik Mountain Traverse",
    eventSee: 70,
    eventDescription: "6‑дневный трейл‑рейс по Фанским горам (~165 км).",
    eventLocation: "Фанские горы",
    eventDate: "9–17 августа 2025",
    eventTime: "06:00",
    eventTag: "Экстрим",
  },
  {
    id: 11,
    eventImage:
      "https://eurasianeconomic.org/files/29990/side-pic-NYBklFsQE2IMWX5b1Ip6bc7niTHHAAB1.jpg",
    eventName: "Tajik Film Festival",
    eventSee: 140,
    eventDescription:
      "Фестиваль таджикского кино с показами фильмов, встречами с режиссёрами и мастер‑классами.",
    eventLocation: "Кинотеатр «Ватан», Душанбе",
    eventDate: "12–15 октября 2025",
    eventTime: "17:00",
    eventTag: "Кино",
  },
  {
    id: 12,
    eventImage:
      "https://eurasia-assembly.org/sites/default/files/styles/news_full/public/news/glavnaya_2_0.jpeg?itok=uZTJNhbU",
    eventName: "Silk Road Heritage Tour",
    eventSee: 110,
    eventDescription:
      "Путешествие по древнему Шёлковому пути с остановками в Истаравшане, Пенджикенте и Худжанде.",
    eventLocation: "Шёлковый путь, север Таджикистана",
    eventDate: "1–7 сентября 2025",
    eventTime: "08:00",
    eventTag: "История",
  },
];

const Home = () => {
  const { t } = useTranslation();

  let [data] = useState([
    {
      id: 1,
      image: "https://www.kino-teatr.ru/movie/posters/big/4/0/176904.jpg",
      name: "Каратэ-пацан: Легенды",
      cinema: "kayhon",
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
  ]);
  const [modal, setModal] = useState(false);
  return (
    <div>
      <FirstSecton />
      {/* ////////////// events */}
      <hr className="my-5" />
      <h2 className="text-4xl font-bold">{t("events")}</h2>
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {eventsData.slice(0, 9).map((event) => (
          <div
            key={event.id}
            class="max-w-sm rounded-2xl shadow-lg overflow-hidden transform transition duration-600 group cursor-pointer dark:shadow-[#bababaae]"
          >
            <Link to={`events/${event.id}`}>
              <img
                class="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110"
                src={event.eventImage}
                alt="{event.eventName}"
              />
              <div class="p-4">
                <p class="text-sm text-gray-500 mb-1">
                  <span>{event.eventDate}</span> ·
                  <span class="text-purple-600 font-medium">
                    {event.eventTag}
                  </span>
                </p>
                <h2 class="text-lg font-bold mb-1 group-hover:text-[#9F00FF] transition-all duration-500 text-[19px]">
                  {event.eventName}
                </h2>
                <p class="text-sm text-gray-700">{event.eventDescription}</p>
              </div>
            </Link>
          </div>
        ))}
        {modal &&
          eventsData.slice(9).map((event) => (
            <div
              key={event.id}
              class="max-w-sm rounded-2xl  shadow-lg bg-white overflow-hidden transform transition duration-600 group cursor-pointer"
            >
              <img
                class="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110"
                src={event.eventImage}
                alt="{event.eventName}"
              />
              <div class="p-4">
                <p class="text-sm text-gray-500 mb-1">
                  <span>{event.eventDate}</span> ·
                  <span class="text-purple-600 font-medium">
                    {event.eventTag}
                  </span>
                </p>
                <h2 class="text-lg font-bold mb-1 group-hover:text-[#9F00FF] transition-all duration-500 text-[19px]">
                  {event.eventName}
                </h2>
                <p class="text-sm text-gray-700">{event.eventDescription}</p>
              </div>
            </div>
          ))}

        {!modal && (
          <button
            className="p-[10px_30px] text-white rounded-[10px] hover:bg-blue-600 bg-[#9F00FF] transform transition duration-600"
            onClick={() => setModal(true)}
          >
            Показать еще
          </button>
        )}
      </section>
      {/* ....... movie */}
      <hr className="my-6" />
      <h2 className="text-4xl font-bold">{t("movie")}</h2>
      <section className="flex gap-[5%] my-5 overflow-x-scroll md:overflow-auto">
        {data.map((e) => {
          return (
            <Link key={e.id} to={`movie/${e.id}`}>
              <div className="w-[215px] m-auto md:m-0 h-[550px] overflow-hidden transform transition duration-600 group cursor-pointer">
                <div className="overflow-hidden rounded-[10px] mb-[20px] relative">
                  <img
                    src={e.image}
                    className="w-full h-[325px] object-cover transform transition duration-700 group-hover:scale-110 rounded-[10px]"
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
      </section>
      <hr />
      <h2 className="my-5 font-bold text-4xl">{t("theatres")}</h2>
      <TheatresSoon />
      <hr />
      <News />
    </div>
  );
};

export default Home;
