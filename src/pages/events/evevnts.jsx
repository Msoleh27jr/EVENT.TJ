<<<<<<< HEAD
import React from 'react'
const Evevnts = () => {
 return (
  <div>Events</div>
 ) 
}
=======
import React, { useState } from "react";
import Title from "../../shared/ui/custom/title/title";
>>>>>>> 5a0d6a52c0c672dcffbbb19d1ffcbb67276c8f61

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";

const Events = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <div>
      <Title parentPage="home" curentPage="events" />

      <div className="flex gap-[10px] items-center">
        <p className="font-bold text-[30px]">Все теги</p>

        {/* Используем Accordion просто как кнопку */}
        <Accordion
          expanded={false} // не раскрывается по дефолту
          onChange={handleToggle}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "transparent" }}
          >
            <Typography>{open ? "Hide" : "Show more"}</Typography>
          </AccordionSummary>
        </Accordion>
      </div>

      {/* Отображаем теги в отдельной секции */}
      {open && (
        <section className="mt-[20px]">
          <div className="flex gap-[20px] flex-wrap">
            <p>Вкусное</p>
            <p>Выставки</p>
            <p>Для детей</p>
            <p>Интеллектуальные игры</p>
            <p>Концерты</p>
            <p>Мастер-классы</p>
            <p>Спектакли</p>
            <p>Фестивали</p>
          </div>
        </section>
      )}
      <div>
        <CalendarComponent/>
      </div>
    </div>
  );
};

export default Events;
