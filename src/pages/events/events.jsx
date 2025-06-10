import React, { useState } from "react";
import Title from "../../shared/ui/custom/title/title";

import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AccordionSummary from "@mui/material/AccordionSummary";

import StarIcon from "@mui/icons-material/Star";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router";
import CalendarComponent2 from "../../shared/ui/custom/calendar-swiper/calendarevents";


export const eventsData = [
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


const Events = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);


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
        <CalendarComponent2 onFilterChange={setFilteredEvents}/>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-[16px]">
        <h1 className="font-bold text-[30px]">{t("events")}</h1>
        <div className="flex items-center gap-[20px]">
          <NavLink
            to={"/events"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
                before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
                before:bg-[#9F00FF] before:transition-all before:duration-300 
                ${
                  isActive
                    ? "before:w-full text-[#9F00FF]"
                    : "before:w-0 hover:before:w-full"
                }`
            }
          >
            <h3>Сегодня</h3>
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
                before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
                before:bg-[#9F00FF] before:transition-all before:duration-300 
                ${
                  isActive
                    ? "before:w-full text-[#9F00FF]"
                    : "before:w-0 hover:before:w-full"
                }`
            }
          >
            <h3>Завтра</h3>
          </NavLink>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
                before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
                before:bg-[#9F00FF] before:transition-all before:duration-300 
                ${
                  isActive
                    ? "before:w-full text-[#9F00FF]"
                    : "before:w-0 hover:before:w-full"
                }`
            }
          >
            <h3>На этой неделе</h3>
          </NavLink>
        </div>
      </div>
      {
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {(filteredEvents.length > 0 ? filteredEvents : eventsData).map((event) => (
            <div
              onClick={() => eventById(event.id)}
              key={event.id}
              class="max-w-sm rounded-2xl  shadow-lg bg-white overflow-hidden transform transition duration-600 group cursor-pointer dark:bg-gray-800"
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
                <p class="text-sm text-gray-700 dark:text-[#e9e8e8af]">
                  {event.eventDescription}
                </p>
              </div>
            </div>
          ))}
          {modal &&
            eventsData.slice(9).map((event) => (
              <div
                onClick={() => eventById(event.id)}
                key={event.id}
                class="max-w-sm dark:bg-gray-800 rounded-2xl  shadow-lg bg-white overflow-hidden transform transition duration-600 group cursor-pointer"
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

        
        </div>
        
      }
      <div className="flex justify-center items-center mt-[50px]">
      {!modal && (
            <button
              className="p-[10px_30px] text-white rounded-[10px] hover:bg-blue-600 bg-[#9F00FF] transform transition duration-600"
              onClick={() => setModal(true)}
            >
              Нишон додани бештар
            </button>
          )}
      </div>
      <div className="my-30 ">
        <h2 className="text-3xl font-bold mb-6">Тавсияҳо</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendedEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => eventById(event.id)}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
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
