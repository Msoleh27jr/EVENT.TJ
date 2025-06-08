import React, { useState } from "react";
import Title from "../../shared/ui/custom/title/title";


import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";
import StarIcon from '@mui/icons-material/Star';


const eventsData = [
  {
    id:1,
    eventImage:"https://anons.uz/storage/uploads/2025/6/5/1749101380_photo_2025-06-05_10.29.23___AM_crop.jpg",
    eventName:"Milliy Bog’ приглашает на семейное приключение с Машей и Медведем",
    eventSee:30,
    eventDescription:"8 июня на детской площадке парка пройдёт весёлый праздник с участием любимых героев – Маши и Медведя.Детей ждёт вечер с играми, танцами и множеством сюрпризов. Маша и Медведь подготовили настоящий праздник с озорным настроением, весёлой атмосферой и яркими эмоциями.",
    eventLocation:"Ул. Сеул, 16",
    eventDate:"8 июня",
    eventTime:"18:00",  
  }
]


const Events = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="">
      <Title parentPage="home" curentPage="events"/>

      <div className="flex gap-[10px] items-center">
        <p className="font-bold text-[30px]">Все теги</p>

        <Accordion
          expanded={false}
          onChange={handleToggle}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-[#9F00FF]"/>}
            sx={{ backgroundColor: "transparent" }}
          >
            <Typography className="text-[#9F00FF]">{open ? "Hide" : "Show more"}</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      <div>
        <div className="flex gap-[16px] items-center mt-[40px]">
          <StarIcon className="text-yellow-300"/>
        <p>Popular</p>
        </div>
      <div className="flex gap-[20px] flex-wrap mt-[20px]">
        <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Вкусное</p>
        <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Выставки</p>
        <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Для детей</p>
        <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Интеллектуальные игры</p>
        <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Концерты</p>
        <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Мастер-классы</p>
        <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Спектакли</p>
        <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Фестивали</p>
      </div>
      </div>
      {open && (
        <section className="mt-[50px]">
          <div className="flex gap-[20px] flex-wrap">
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Все</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">«Головоломка»</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Disney</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Instagram</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">iPhone 16 Pro</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Lego</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Marvel</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">PlayStation</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Вкусное</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Выставки</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Для детей</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Интеллектуальные игры</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Концерты</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Мастер-классы</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Спектакли</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Фестивали</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Выставки</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Для детей</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Интеллектуальные игры</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Концерты</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Мастер-классы</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Спектакли</p>
            <p className="bg-[#d7d4d439] p-[5px_10px] rounded-[5px] hover:bg-[#aeadad91] transition-all duration-500 cursor-pointer">Фестивали</p>
          </div>
        </section>
      )}
      <div className="">
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Events;
