import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import { useTranslation } from "react-i18next";
import { data } from "../../../../pages/movie/movie";
import { Link } from "react-router";

export default function CalendarComponent3({ onFilterChange }) {
  const { t } = useTranslation();

  // Выбранная дата
  const [selectedDate, setSelectedDate] = useState(null);
  // Текущая дата для отображаемого периода
  const [currentDate, setCurrentDate] = useState(new Date());
  // Анимация переключения периода
  const [isAnimating, setIsAnimating] = useState(false);
  // Кол-во видимых дней, зависит от ширины контейнера
  const [visibleDays, setVisibleDays] = useState(7);

  // Рефы для контейнера и карточки дня, чтобы рассчитывать размеры
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  // Локализация дней недели и месяцев
  const dayAbbreviations = [
    t("day_mon"),
    t("day_tue"),
    t("day_wed"),
    t("day_thu"),
    t("day_fri"),
    t("day_sat"),
    t("day_sun"),
  ];
  const monthNames = [
    t("month_jan"),
    t("month_feb"),
    t("month_mar"),
    t("month_apr"),
    t("month_may"),
    t("month_jun"),
    t("month_jul"),
    t("month_aug"),
    t("month_sep"),
    t("month_oct"),
    t("month_nov"),
    t("month_dec"),
  ];

  // Рассчитываем сколько дней поместится по ширине
  useEffect(() => {
    const calculateVisibleDays = () => {
      if (containerRef.current && cardRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const buttonWidth = 40; // ширина кнопок вперед/назад
        const gap = 12; // gap между карточками
        const cardWidth = cardRef.current.offsetWidth;
        const availableWidth = containerWidth - buttonWidth * 2 - gap * 2;
        let days = Math.floor((availableWidth + gap) / (cardWidth + gap));
        days = Math.max(5, Math.min(days, 21)); // минимум 5, максимум 21 день
        setVisibleDays(days);
      }
    };
    calculateVisibleDays();
    window.addEventListener("resize", calculateVisibleDays);
    return () => window.removeEventListener("resize", calculateVisibleDays);
  }, []);

  // Получить массив объектов дней для текущего периода
  const getCurrentPeriodDates = (date, numDays) => {
    // Находим понедельник недели, в которой находится date
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - start.getDay() + 1); // startDay = Monday (день 1)
    const result = [];
    for (let i = 0; i < numDays; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      result.push({
        date: d.getDate(),
        fullDate: new Date(d),
        dayIndex: d.getDay() === 0 ? 6 : d.getDay() - 1, // понедельник = 0
        isPast: d < new Date(new Date().setHours(0, 0, 0, 0)),
      });
    }
    return result;
  };

  // Текущий массив дней, отображаемый в календаре
  const periodDates = getCurrentPeriodDates(currentDate, visibleDays);

  // Обработчики переключения периода назад и вперёд
  const handlePrevPeriod = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() - visibleDays);
      setCurrentDate(newDate);
      setIsAnimating(false);
    }, 300);
  };

  const handleNextPeriod = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + visibleDays);
      setCurrentDate(newDate);
      setIsAnimating(false);
    }, 300);
  };

  // Выбор даты (запрет выбора прошедших дат)
  const handleDateSelect = (dateObj) => {
    if (dateObj.isPast) return;
    setSelectedDate(dateObj.fullDate);
  };

  // Название месяца для текущей даты
  const currentMonth = monthNames[currentDate.getMonth()];

  // Проверка, можно ли переключить период назад/вперед (если уходит в другой месяц - блокируем)
  const isPrevDisabled = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - visibleDays);
    return newDate.getMonth() !== currentDate.getMonth();
  };

  const isNextDisabled = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + visibleDays);
    return newDate.getMonth() !== currentDate.getMonth();
  };

  // Фильтрация событий по выбранной дате
  const filteredEvents = useMemo(() => {
    if (!selectedDate) return [];
    return data.filter((event) => {
      const eventDate = new Date(event.eventDate);
      return (
        eventDate.getFullYear() === selectedDate.getFullYear() &&
        eventDate.getMonth() === selectedDate.getMonth() &&
        eventDate.getDate() === selectedDate.getDate()
      );
    });
  }, [selectedDate]);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filteredEvents);
    }
  }, [filteredEvents, onFilterChange]);
  return (
    <div className="flex flex-col items-center bg-transparent mx-auto rounded-2xl m-4 sm:m-6 lg:m-10 p-4 sm:p-6 w-full max-w-6xl">
      {/* Заголовок */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {currentMonth}
        </h2>
      </div>

      {/* Контейнер с датами */}
      <div ref={containerRef} className="flex items-center w-full gap-3 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevPeriod}
          disabled={isAnimating || isPrevDisabled()}
          className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800 transition-all flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Button>

        <div className="flex gap-3 flex-1 justify-center overflow-x-auto scrollbar-hide transition-all duration-300 ease-in-out">
          {periodDates.map((dateObj, index) => {
            const isSelected =
              selectedDate?.toDateString() === dateObj.fullDate.toDateString();
            const isInactive = dateObj.isPast && !isSelected;
            return (
              <Card
                ref={index === 0 ? cardRef : null}
                key={`${dateObj.fullDate.toISOString()}-${index}`}
                onClick={() => handleDateSelect(dateObj)}
                className={`flex flex-col items-center justify-center p-2 cursor-pointer rounded-xl border flex-shrink-0 transition-all duration-300
                  ${
                    isSelected
                      ? "bg-purple-600 text-white border-purple-600 shadow-md"
                      : isInactive
                      ? "text-gray-400 opacity-40 bg-white dark:bg-gray-800 dark:text-gray-500 border-gray-200 dark:border-gray-600"
                      : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }
                  w-[48px] sm:w-[56px] md:w-[64px] lg:w-[72px] h-[72px] sm:h-[80px] md:h-[90px]`}
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                <div className="text-xs font-medium mb-1">
                  {dayAbbreviations[dateObj.dayIndex]}
                </div>
                <div className="text-lg font-semibold">{dateObj.date}</div>
              </Card>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextPeriod}
          disabled={isAnimating || isNextDisabled()}
          className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800 transition-all flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </div>

      {/* Список событий на выбранную дату */}
      {selectedDate && (
        <div className="w-full mt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
            {t("Филмҳо барои рузи")} {selectedDate.toLocaleDateString()}
          </h3>
          {filteredEvents.length > 0 ? (
            <div className="flex items-start justify-center md:justify-start gap-[18px] flex-wrap">
              {filteredEvents.map((e) => (
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
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("Дар ин руз ягон филм нест")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
