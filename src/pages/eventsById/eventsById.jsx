import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate, useParams } from "react-router";
import CampaignIcon from "@mui/icons-material/Campaign";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CallIcon from "@mui/icons-material/Call";
import LocationPinIcon from "@mui/icons-material/LocationPin";
const EventsById = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  function eventById(id) {
    navigate(`/events/${id}`);
  }

  const eventsData = [
    {
      id: 1,
      eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWI6exsG33eBZhSmVZ8R9mYWzW451VJDKlw&s",
      eventName: "Фестивали мусиқии Шашмақом",
      eventSee: 65,
      eventDescription: "Традиционный фестиваль классической таджикской музыки Шашмаком, соберёт лучших исполнителей страны.",
      eventDescriptionInfo: "Фестивали Шашмақом як чорабинии муҳими фарҳангист, ки бо ҳадафи ҳифзу тарғиби мусиқии анъанавии тоҷикӣ — Шашмақом баргузор мешавад. Ин мусиқии классикӣ таърихи тӯлонии фарҳанги тоҷикро ифода мекунад ва иҷрои зиндаи он бо иштироки ҳофизони маъруфи кишвар ва гурӯҳҳои мусиқии анъанавӣ баргузор мегардад.",
      eventLocation: "Амфитеатр, Худжанд",
      eventDate: "2025-06-10",
      eventTime: "19:00",
      eventTag: "Музыка"
    },
    {
      id: 2,
      eventImage: "https://i.ytimg.com/vi/6p1D2QGC3p0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXY0qBa5LdtdGC9zpO7bEgtcRx3Q",
      eventName: "Мусобиқаи байналмилалии дзюдо Душанбе 2025",
      eventSee: 120,
      eventDescription: "Международный турнир по дзюдо, этап IJF World Tour.",
      eventDescriptionInfo: "Ин мусобиқа қисми расмии Ҷаҳонгардии Федератсияи байналмилалии дзюдо (IJF World Tour) мебошад. Варзишгарони варзида аз кишварҳои мухталиф барои гирифтани ҷоизаҳо ва холҳои рейтингӣ ширкат мекунанд. Рӯйдод дар муҳити рақобатнок баргузор гардида, имкони дидани дзюдои сатҳи баландро фароҳам меорад.",
      eventLocation: "Kasri Tennis, Душанбе",
      eventDate: "2025-06-12",
      eventTime: "10:00",
      eventTag: "Спорт"
    },
    {
      id: 3,
      eventImage: "https://www.un-glaciers.org/sites/default/files/2024-10/logo_iygp_dark_full%20color.png",
      eventName: "Конфронси байналмилалӣ оид ба ҳифзи пиряхҳо",
      eventSee: 80,
      eventDescription: "Конференция ООН и Таджикистана по сохранению ледников.",
      eventDescriptionInfo: "Чорабинӣ бо ташаббуси Созмони Милали Муттаҳид ва Ҳукумати Тоҷикистон барои ҷалби таваҷҷуҳи ҷаҳонӣ ба масъалаи обшавии пиряхҳо баргузор мешавад. Дар он коршиносон, экологҳо ва сиёсатмадорон ширкат варзида, роҳҳои ҳалли мушкилоти обу иқлимро муҳокима мекунанд.",
      eventLocation: "Kokhi Somon, Душанбе",
      eventDate: "2025-06-11",
      eventTime: "09:00",
      eventTag: "Экология"
    },
    {
      id: 4,
      eventImage: "https://pressa.tj/wp-content/uploads/2025/03/omodagi-ba-navruz-24.jpg",
      eventName: "Фестивали ҷаҳонии ҷавонон Наврӯз",
      eventSee: 200,
      eventDescription: "Фестиваль для молодежи с культурной и спортивной программой.",
      eventDescriptionInfo: "Дар доираи таҷлили Наврӯз — иди миллии баҳорӣ, ҷавонон аз кишварҳои гуногун ба Тоҷикистон меоянд. Барномаҳо шомили озмунҳо, намоишҳои фарҳангӣ, консерту мастер-классҳо мебошанд. Ин фестивал ба рушди дӯстии ҷавонон ва ҳамкории байналмилалӣ мусоидат мекунад.",
      eventLocation: "Душанбе + Истаравшан, Пенджикент, Худжанд",
      eventDate: "2025-06-14",
      eventTime: "12:00",
      eventTag: "Культура"
    },
    {
      id: 5,
      eventImage: "https://www.france.fi/wp-content/uploads/2025/02/francophonie-2025-1098x617.jpg",
      eventName: "Рӯзҳои фарҳанги франкофонӣ 2025",
      eventSee: 50,
      eventDescription: "Фестиваль французской культуры: кино, квизы, мастер‑классы.",
      eventDescriptionInfo: "Фестивали фарҳанги франкофонӣ имкони шиносоӣ бо забон, фарҳанг ва анъанаҳои кишварҳои франкоязычиро фароҳам меорад. Дар барнома намоиши филмҳо, викторинаҳо, дидор бо устодони забон ва ҳамкориҳои фарҳангӣ пешбинӣ шудааст.",
      eventLocation: "Vatan Cinema ва дигар ҷойҳо, Душанбе",
      eventDate: "2025-06-10",
      eventTime: "18:00",
      eventTag: "Образование"
    },
    {
      id: 6,
      eventImage: "https://asiaplustj.info/sites/default/files/articles/258058/8.JPG",
      eventName: "Фестивали тобистона: таом ва шарҳои ҳавоӣ",
      eventSee: 180,
      eventDescription: "Фестиваль национальной кухни и воздушных шаров в Душанбе.",
      eventDescriptionInfo: "Чорабинӣ бо намоиши таомҳои миллӣ ва парвози шарҳои рангоранг баргузор мешавад. Меҳмонон метавонанд аз таомҳои суннатӣ лаззат баранд ва манзараҳои зебои парвози шарҳоро аз наздик бинанд. Барои оилаҳо ва кӯдакон барномаи шавқовар пешбинӣ шудааст.",
      eventLocation: "Душанбе, калонтарин майдонча",
      eventDate: "2025-06-12",
      eventTime: "11:00",
      eventTag: "Еда"
    },
    {
      id: 7,
      eventImage: "https://asiaplustj.info/sites/default/files/articles/279644/%D0%BF%D0%BB%D0%BE%D0%B2%20%D0%90%D0%B7%D0%B8%D1%8F-%D0%9F%D0%BB%D1%8E%D1%81.jpg",
      eventName: "Фестивали байналмилалии Oш",
      eventSee: 220,
      eventDescription: "Международный фестиваль плова в парке культуры Душанбе.",
      eventDescriptionInfo: "Фестивали Oш чорабинии бузургест, ки пухтупази анъанавии таоми миллӣ — палавро ҷашн мегирад. Шеф-пухтупазҳои машҳур аз кишварҳои гуногун ширкат карда, услубҳои гуногуни палавпазиро намоиш медиҳанд. Бо озмунҳо ва мусиқии зинда.",
      eventLocation: "Парк культуры, Душанбе",
      eventDate: "2025-06-15",
      eventTime: "07:00",
      eventTag: "Еда"
    },
    {
      id: 8,
      eventImage: "https://cdn.easteast.world/uploads/post_image/5836/image/74c4d85812a3446cb38a.jpg",
      eventName: "Фестивали мусиқии «Боми Ҷаҳон»",
      eventSee: 150,
      eventDescription: "Этно‑фестиваль музыки в Хороге, Памир.",
      eventDescriptionInfo: "Ин чорабинии фарҳангӣ ҳадаф дорад мусиқии миллӣ ва этникӣ аз гӯшаву канори ҷаҳонро муаррифӣ кунад. Гурӯҳҳои мусиқии Помир ва кишварҳои ҳамсоя бо иҷроҳои зинда иштирок мекунанд. Ҷои баргузорӣ дар табиати зебои кӯҳӣ аст.",
      eventLocation: "Парк, Хорог",
      eventDate: "2025-06-13",
      eventTime: "14:00",
      eventTag: "Музыка"
    },
    {
      id: 9,
      eventImage: "https://pamirtrips.com/wp-content/uploads/chabysh-horse-festival-hd-1.jpg",
      eventName: "Фестивали аспдавонӣ Ат‑Чабиш",
      eventSee: 90,
      eventDescription: "Праздник конного спорта, бузкаши и поэзии в Мургабе.",
      eventDescriptionInfo: "Фестивали анъанавии аспдавонӣ дар ноҳияи Мурғоб баргузор гардида, аспсаворӣ, бузкашӣ ва намоиши шеъру мусиқии мардумиро дар бар мегирад. Ин чорабинӣ як таҷлили фарҳанги кӯҳӣ ва варзиши миллӣ мебошад.",
      eventLocation: "Мургаб, Памир",
      eventDate: "2025-06-12",
      eventTime: "10:00",
      eventTag: "Спорт"
    },
    {
      id: 10,
      eventImage: "https://adventuresoflilnicki.com/wp-content/uploads/2020/08/Bolshoi-Allo-Fann-Mountains-Tajikistan-8.jpg",
      eventName: "Гузаргоҳи кӯҳии Тоҷикистон",
      eventSee: 70,
      eventDescription: "6‑дневный трейл‑рейс по Фанским горам (~165 км).",
      eventDescriptionInfo: "Ин пойгаи кӯҳӣ барои дӯстдорони сайёҳӣ ва варзиши шадид ташкил шудааст. Мусофирати 6-рӯза дар манзараҳои зебои кӯҳҳои Фон иштирокчиёнро интизор аст. Чорабинӣ сатҳи баланд дошта, бо иштироки варзишгарони хориҷӣ сурат мегирад.",
      eventLocation: "Фанские горы",
      eventDate: "2025-06-16",
      eventTime: "06:00",
      eventTag: "Экстрим"
    },
    {
      id: 11,
      eventImage: "https://www.intracen.org/media/image/1839",
      eventName: "Намоишгоҳи ҳунарҳои мардумии Тоҷикистон",
      eventSee: 65,
      eventDescription: "Выставка народных ремёсел со всей страны: текстиль, керамика, украшения.",
      eventDescriptionInfo: "Намоишгоҳ намунаҳои беҳтарини ҳунарҳои дастии тоҷиконро — аз гулдӯзӣ то сафолгариву заргарӣ — ба маъраз мегузорад. Дар он ҳунармандон аз тамоми вилоятҳо иштирок мекунанд. Меҳмонон метавонанд ҳунарҳоро на танҳо тамошо кунанд, балки харидорӣ низ кунанд.",
      eventLocation: "Кохи Борбад, Душанбе",
      eventDate: "2025-06-14",
      eventTime: "10:00",
      eventTag: "Ремёсла"
    },
    {
      id: 12,
      eventImage: "https://eurasia-assembly.org/sites/default/files/styles/news_full/public/news/glavnaya_2_0.jpeg?itok=uZTJNhbU",
      eventName: "Саёҳат аз рӯи мероси Роҳи Абрешим",
      eventSee: 110,
      eventDescription: "Путешествие по древнему Шёлковому пути с остановками в Истаравшане, Пенджикенте и Худжанде.",
      eventDescriptionInfo: "Ин саёҳати таърихӣ дар доираи барномаи байналмилалии мероси Роҳи Абрешим ташкил мегардад. Мусофирон аз шаҳрҳои қадимӣ дидан мекунанд ва бо таъриху фарҳанги маҳаллӣ шинос мешаванд. Гидҳои касбӣ ва барномаи маърифатӣ пешбинӣ шудааст.",
      eventLocation: "Шёлковый путь, север Таджикистана",
      eventDate: "2025-06-16",
      eventTime: "08:00",
      eventTag: "История"
    }
  ];
  
  const recommendedEvents = [
    {
      id: 11,
      eventImage: "https://www.intracen.org/media/image/1839",
      eventName: "Намоишгоҳи ҳунарҳои мардумии Тоҷикистон",
      eventSee: 65,
      eventDescription:
        "Выставка народных ремёсел со всей страны: текстиль, керамика, украшения.",
      eventDescriptionInfo:
        "Намоишгоҳи ҳунарҳои мардумӣ бо иштироки устоҳои кандакорӣ, гулдӯзӣ, кулолгарӣ ва заргарии маҳаллӣ баргузор мегардад.",
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
      eventDescriptionInfo:
        "Намоишгоҳи ҳунарҳои мардумӣ бо иштироки устоҳои кандакорӣ, гулдӯзӣ, кулолгарӣ ва заргарии маҳаллӣ баргузор мегардад.",
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
      eventDescriptionInfo:
        "Намоишгоҳи ҳунарҳои мардумӣ бо иштироки устоҳои кандакорӣ, гулдӯзӣ, кулолгарӣ ва заргарии маҳаллӣ баргузор мегардад.",
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
      eventDescriptionInfo:
        "Намоишгоҳи ҳунарҳои мардумӣ бо иштироки устоҳои кандакорӣ, гулдӯзӣ, кулолгарӣ ва заргарии маҳаллӣ баргузор мегардад.",
      eventLocation: "Площадь Исмоили Сомони, Душанбе",
      eventDate: "20 июля 2025",
      eventTime: "16:00",
      eventTag: "Еда",
    },
  ];

  const events = eventsData.find((event) => event.id === Number(id)) || recommendedEvents.find((event) => event.id === Number(id));

  return (
    <div>
      <section>
        <nav className="flex items-center gap-2 text-base text-gray-500 dark:text-gray-400 mb-8 select-none">
          <NavLink
            to="/"
            className="hover:underline hover:text-gray-700 dark:hover:text-gray-200"
          >
            {t("home")}
          </NavLink>
          <span>›</span>
          <NavLink
            to="/events"
            className="hover:underline hover:text-gray-700 dark:hover:text-gray-200"
          >
            {t("events")}
          </NavLink>
          <span>›</span>
          <span className="text-gray-800 dark:text-gray-100 font-semibold truncate max-w-xs">
            {events.eventName}
          </span>
        </nav>
      </section>
      <div className="mt-[20px] md:mt-[50px] w-[100%] flex flex-col md:flex-row items-start justify-between gap-[30px] ">
        <div className="flex flex-col md:w-[65%] items-start gap-[15px]">
          <h1 className="font-bold md:text-[30px] ">{events.eventName}</h1>
          <div className="flex items-center gap-[20px] ">
            <div className="flex items-center gap-[5px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <h1 className="text-[18px] ">{events.eventSee}</h1>
            </div>
            <h1 className="text-[18px] ">{events.eventDate}</h1>
          </div>
          <img
            className="w-full rounded-[10px] "
            src={events.eventImage}
            alt=""
          />
          <h1>{events.eventDescriptionInfo}</h1>
          <div className="flex  flex-col gap-[20px]">
            <h1 className="font-[600] text-[#9F00FF]">
            Маълумоти иловагӣ:
            </h1>
            <div className="flex gap-[16px]">
              <CampaignIcon className="text-[#9F00FF]" />
              <p className="font-bold">{t("events")} :</p>
              <p>{events.eventName}</p>
            </div>
            <div className="flex gap-[16px]">
              <CalendarMonthIcon className="text-[#9F00FF]" />
              <p className="font-bold">Дата проведения :</p>
              <p>{events.eventDate}</p>
            </div>
            <div className="flex gap-[16px]">
              <AccessTimeFilledIcon className="text-[#9F00FF]" />
              <p className="font-bold">Время проведения :</p>
              <p>{events.eventTime}</p>
            </div>
            <div className="flex gap-[16px]">
              <CallIcon className="text-[#9F00FF]" />
              <p className="font-bold">+992 9876 543 21</p>
            </div>
            <div className="flex gap-[16px]">
              <LocationPinIcon className="text-[#9F00FF]" />
              <p className="font-bold">Локация: </p>
              <p>{events.eventLocation}</p>
            </div>
          </div>
          <NavLink to="/events">
            <button className="mt-[60px] p-[10px_20px] rounded-[5px] bg-gray-200 hover:bg-gray-400 hover:text-gray-200 transform transition duration-500 dark:text-black">
              {events.eventTag}
            </button>
          </NavLink>
        </div>
        <div className="md:w-[32%] ">
          <div>
            <h1 className="font-bold text-[22px] mb-[15px] md:text-[30px]">
              Так же вам может быть интересно
            </h1>
            <div className="flex flex-col gap-[16px]">
              {eventsData.slice(5, 9).map((e) => {
                return (
                  <div
                    onClick={() => eventById(e.id)}
                    key={e.id}
                    className="md:shadow-none shadow-[5px_5px_5px_5px] shadow-gray-200 md:border-0 md:rounded-[0px] md:mt-[20px] border-[1px] rounded-[10px] group overflow-hidden transform transition duration-600 flex items-center gap-[20px] w-full flex-col md:flex-row md:border-b border-gray-300 pb-5 "
                  >
                    <div className="md:w-[40%] overflow-hidden rounded-[10px]">
                      <img
                        className="w-full object-cover transform transition duration-700 group-hover:scale-110"
                        src={e.eventImage}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[10px] md:w-[60%] md:p-[0px] p-[5px_0px_5px_10px] ">
                      <h1 className="text-[#9F00FF] font-[500]">{e.title}</h1>
                      <h1 className="text-[22px] font-[600] transition-colors duration-500 group-hover:text-[#9F00FF]">
                        {e.eventName}
                      </h1>
                      <h1>{e.eventDate}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsById;
