import React, { useState } from "react";
import Title from "../../shared/ui/custom/title/title";

import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AccordionSummary from "@mui/material/AccordionSummary";

import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";
import StarIcon from "@mui/icons-material/Star";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const eventsData = [
  {
    id: 1,
    eventImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWI6exsG33eBZhSmVZ8R9mYWzW451VJDKlw&s",
    eventName: "Фестивали мусиқии Шашмақом",
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
    eventName: "Мусобиқаи байналмилалии дзюдо Душанбе 2025",
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
    eventName: "Конфронси байналмилалӣ оид ба ҳифзи пиряхҳо",
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
    eventName: "Фестивали ҷаҳонии ҷавонон Наврӯз",
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
    eventName: "Рӯзҳои фарҳанги франкофонӣ 2025",
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
    eventName: "Фестивали тобистона: таом ва шарҳои ҳавоӣ",
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
    eventName: "Фестивали байналмилалии Oш",
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
    eventName: "Фестивали мусиқии «Боми Ҷаҳон»",
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
    eventName: "Фестивали аспдавонӣ Ат‑Чабиш",
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
    eventName: "Гузаргоҳи кӯҳии Тоҷикистон",
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
    eventName: "Фестивали синамои тоҷикӣ",
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
    eventName: "Саёҳат аз рӯи мероси Роҳи Абрешим",
    eventSee: 110,
    eventDescription:
      "Путешествие по древнему Шёлковому пути с остановками в Истаравшане, Пенджикенте и Худжанде.",
    eventLocation: "Шёлковый путь, север Таджикистана",
    eventDate: "1–7 сентября 2025",
    eventTime: "08:00",
    eventTag: "История",
  },
];
const recommendedEvents = [
  {
    id: 11,
    eventImage: "https://www.intracen.org/media/image/1839",
    eventName: "Намоишгоҳи ҳунарҳои мардумии Тоҷикистон",
    eventSee: 65,
    eventDescription:
      "Выставка народных ремёсел со всей страны: текстиль, керамика, украшения.",
    eventLocation: "Кохи Борбад, Душанбе",
    eventDate: "5–7 октября 2025",
    eventTime: "10:00",
    eventTag: "Ремёсла",
  },
  {
    id: 12,
    eventImage:
      "https://www.osce.org/files/imagecache/10_large_gallery/f/images/hires/b/3/427703.JPG?1565680561",
    eventName: "Форуми экологӣ дар Помир",
    eventSee: 40,
    eventDescription:
      "Форум по устойчивому развитию и экотуризму в Горном Бадахшане.",
    eventLocation: "Хорог, Памир",
    eventDate: "15–17 августа 2025",
    eventTime: "09:30",
    eventTag: "Экология",
  },
  {
    id: 13,
    eventImage:
      "https://avesta.tj/wp-content/uploads/2025/05/FB_IMG_1748060587518.jpg",
    eventName: "Паради фарҳангии ҷавонон",
    eventSee: 110,
    eventDescription:
      "Парад молодежи в национальных костюмах, танцы, фольклор и музыка.",
    eventLocation: "Площадь Филармонии, Душанбе",
    eventDate: "12 сентября 2025",
    eventTime: "17:00",
    eventTag: "Культура",
  },
  {
    id: 15,
    eventImage:
      "https://trektajikistan.com/wp-content/uploads/2023/10/shakarob.webp",
    eventName: "Маззаи Тоҷикистон",
    eventSee: 130,
    eventDescription:
      "Гастрономический фестиваль традиционных блюд и мастер‑классы от шефов.",
    eventLocation: "Площадь Исмоили Сомони, Душанбе",
    eventDate: "20 июля 2025",
    eventTime: "16:00",
    eventTag: "Еда",
  },
];

const Events = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const { t } = useTranslation();

  const navigate = useNavigate();
  function eventById(id) {
    navigate(`/events/${id}`);
  }

  return (
    <div className="">
      <Title parentPage="home" curentPage="events" />

      <div className="flex gap-[10px] items-center">
        <p className="font-bold text-[30px]">Хама тeгхо</p>

        <Accordion
          expanded={false}
          onChange={handleToggle}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-[#9F00FF]" />}
            sx={{ backgroundColor: "transparent" }}
          >
            <Typography className="text-[#9F00FF]">
              {open ? "Пинҳон кардан" : "Намоиши бештар"}
            
            </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      <div>
        <div className="flex gap-[16px] items-center mt-[40px]">
          <StarIcon className="text-yellow-300" />
          <p>Машҳур</p>
        </div>
        <div className="flex gap-[20px] flex-wrap mt-[20px]">
          <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
            Вкусное
          </p>
          <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
            Выставки
          </p>
          <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
            Для детей
          </p>
          <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
            Интеллектуальные игры
          </p>
          <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
            Концерты
          </p>
          <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
            Мастер-классы
          </p>
          <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
            Спектакли
          </p>
          <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
            Фестивали
          </p>
        </div>
      </div>
      {open && (
        <section className="mt-[50px]">
          <div className="flex gap-[20px] flex-wrap">
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Все
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              «Головоломка»
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Disney
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Instagram
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              iPhone 16 Pro
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Lego
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Marvel
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              PlayStation
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Вкусное
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Выставки
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Для детей
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Интеллектуальные игры
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Концерты
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Мастер-классы
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Спектакли
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Фестивали
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Выставки
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Для детей
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Интеллектуальные игры
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Концерты
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Мастер-классы
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Спектакли
            </p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">
              Фестивали
            </p>
          </div>
        </section>
      )}
      <div className="">
        <CalendarComponent />
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-[16px]">
        <h1 className="font-bold text-[30px]">{t("events")}</h1>
        <div className="flex gap-[16px] font-bold">
          <p>{t("soon")}</p>
          <p>{t("today")}</p>
          <p>{t("tomorrow")}</p>
        </div>
      </div>
      {
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventsData.slice(0, 9).map((event) => (
            <div
              onClick={() => eventById(event.id)}
              key={event.id}
              class="max-w-sm rounded-2xl  shadow-lg bg-white overflow-hidden transform transition duration-600 group cursor-pointer dark:bg-[#222]"
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
                <p class="text-sm text-gray-700 dark:text-[#e9e8e8af]">{event.eventDescription}</p>
              </div>
            </div>
          ))}
          {modal &&
            eventsData.slice(9).map((event) => (
              <div
                onClick={() => eventById(event.id)}
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
        </div>
      }
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-6">Рекомендации</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendedEvents.map((event) => (
            <div key={event.id}  onClick={() => eventById(event.id)} className="relative rounded-xl overflow-hidden group cursor-pointer">
            <img
              src={event.eventImage}
              alt={event.eventName}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            <div className="absolute bottom-4 left-4 z-20">
              <div className="mb-1 inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {event.eventTag}
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">
                {event.eventName}
              </h3>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
