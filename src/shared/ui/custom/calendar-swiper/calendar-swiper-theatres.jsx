import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import { useTranslation } from "react-i18next";
import { data } from "/src/pages/theatres/theatres";
import { Link } from "react-router-dom";

export default function CalendarComponentTheatre({ onFilterChange }) {
  const { t } = useTranslation();

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleDays, setVisibleDays] = useState(7);

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const dayAbbreviations = [t("day_mon"), t("day_tue"), t("day_wed"), t("day_thu"), t("day_fri"), t("day_sat"), t("day_sun")];
  const monthNames = [t("month_jan"), t("month_feb"), t("month_mar"), t("month_apr"), t("month_may"), t("month_jun"), t("month_jul"), t("month_aug"), t("month_sep"), t("month_oct"), t("month_nov"), t("month_dec")];

  // Автоматически рассчитываем количество видимых дней
  useEffect(() => {
    function calculateVisibleDays() {
      if (!containerRef.current || !cardRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const buttonWidth = 40; // ширина кнопок
      const gap = 12; // промежуток между элементами
      const cardWidth = cardRef.current.offsetWidth;
      const availableWidth = containerWidth - buttonWidth * 2 - gap * 2;

      let daysCount = Math.floor((availableWidth + gap) / (cardWidth + gap));
      daysCount = Math.min(Math.max(daysCount, 5), 21);
      setVisibleDays(daysCount);
    }

    calculateVisibleDays();

    window.addEventListener("resize", calculateVisibleDays);
    return () => window.removeEventListener("resize", calculateVisibleDays);
  }, []);

  // Получаем массив дней текущего периода, начиная с currentDate
  const getCurrentPeriodDates = (date, daysCount) => {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    // Найти понедельник текущей недели (если сегодня понедельник — стартуем с него)
    const day = start.getDay();
    const diff = day === 0 ? -6 : 1 - day; // Если воскресенье — сместить назад на 6 дней, иначе на (1 - день)
    start.setDate(start.getDate() + diff);

    return Array.from({ length: daysCount }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return {
        date: d.getDate(),
        fullDate: d,
        dayIndex: d.getDay() === 0 ? 6 : d.getDay() - 1,
        isPast: d < new Date(new Date().setHours(0, 0, 0, 0)),
      };
    });
  };

  const periodDates = getCurrentPeriodDates(currentDate, visibleDays);

  // Переход на предыдущий период
  const handlePrevPeriod = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setDate(newDate.getDate() - visibleDays);
        return newDate;
      });
      setIsAnimating(false);
    }, 300);
  };

  // Переход на следующий период
  const handleNextPeriod = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setDate(newDate.getDate() + visibleDays);
        return newDate;
      });
      setIsAnimating(false);
    }, 300);
  };

  const handleDateSelect = (dateObj) => {
    if (dateObj.isPast) return;
    setSelectedDate(dateObj.fullDate);
  };

  // Название месяца для текущей даты
  const currentMonth = monthNames[currentDate.getMonth()];

  // Блокировка кнопок если переход выйдет за пределы месяца
  const isPrevDisabled = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - visibleDays);
    return newDate.getMonth() !== currentDate.getMonth();
  };

  const isNextDisabled = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + visibleDays);
    return newDate.getMonth() !== currentDate.getMonth();
  };

  // Фильтрация событий по выбранной дате
  const filteredEvents = useMemo(() => {
    if (!selectedDate) return [];
    const selectedString = selectedDate.toISOString().split("T")[0];
    return data.filter((event) => event.date === selectedString);
  }, [selectedDate]);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filteredEvents);
    }
  }, [filteredEvents, onFilterChange]);

  const isSameDay = (d1, d2) => d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

  return (
    <>
      <div className="flex flex-col items-center h-[200px] bg-transparent mx-auto rounded-2xl w-full max-w-6xl">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{currentMonth}</h2>
        </div>

        <div ref={containerRef} className="flex items-center w-full gap-3">
          <Button variant="ghost" size="icon" onClick={handlePrevPeriod} disabled={isAnimating || isPrevDisabled()} className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800 transition-all flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </Button>

          <div className="flex gap-3 flex-1 justify-center overflow-x-auto scrollbar-hide transition-all duration-300 ease-in-out">
            {periodDates.map((dateObj, index) => {
              const isSelected = isSameDay(selectedDate, dateObj.fullDate);
              const isInactive = dateObj.isPast && !isSelected;

              return (
                <Card
                  ref={index === 0 ? cardRef : null}
                  key={`${dateObj.fullDate.toISOString()}-${index}`}
                  onClick={() => handleDateSelect(dateObj)}
                  className={`flex flex-col items-center justify-center p-2 cursor-pointer rounded-xl border flex-shrink-0 transition-all duration-300
                    ${isSelected ? "bg-purple-600 text-white border-purple-600 shadow-md" : isInactive ? "text-gray-400 opacity-40 bg-white dark:bg-gray-800 dark:text-gray-500 border-gray-200 dark:border-gray-600" : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600"}
                    w-[48px] sm:w-[56px] md:w-[64px] lg:w-[72px] h-[72px] sm:h-[80px] md:h-[90px]`}
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  <div className="text-xs font-medium mb-1">{dayAbbreviations[dateObj.dayIndex]}</div>
                  <div className="text-lg font-semibold">{dateObj.date}</div>
                </Card>
              );
            })}
          </div>

          <Button variant="ghost" size="icon" onClick={handleNextPeriod} disabled={isAnimating || isNextDisabled()} className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800 transition-all flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Button>
        </div>
      </div>

      <div>
        {filteredEvents.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-[#2C2C2C] dark:text-white mb-4">{t("performances_for_selected_period")}</h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredEvents.map((e) => (
                <article key={e.id} className="group flex flex-col overflow-hidden cursor-pointer">
                  <Link to={`/theatres/${e.id}`} className="block rounded-2xl overflow-hidden shadow-md">
                    <img src={e.image} alt={t(e.title)} className="w-full h-[333px] object-cover transition-transform duration-900 ease-in-out group-hover:scale-105" />
                  </Link>
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-[#2C2C2C] dark:text-white mb-1 transition-colors duration-900 ease-in-out group-hover:text-[#7F00FF]">{t(e.title)}</h3>
                    <p className="text-base text-[#7F00FF] font-semibold mb-2">{t(e.theatre)}</p>
                    <div className="text-sm font-semibold space-y-1">
                      <p className="inline-block p-2 rounded-[6px] bg-gray-100 dark:bg-gray-800 text-[#68617a] dark:text-white transition-colors duration-900 ease-in-out group-hover:bg-[#7F00FF] group-hover:text-white tracking-normal">{t(e.genre)}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {selectedDate && filteredEvents.length === 0 && <h3 className="text-center text-gray-500 dark:text-gray-400 col-span-full">{t("no_events_for_selected_date")}</h3>}
      </div>
    </>
  );
}
