"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleDays, setVisibleDays] = useState(7);
  const containerRef = useRef(null);

  const dayAbbreviations = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  useEffect(() => {
    const calculateVisibleDays = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const buttonWidth = 32;
        const gap = 12;
        const availableWidth = containerWidth - buttonWidth * 2 - gap * 2;
        const dayWidth = 80;
        const gapWidth = 12;

        let days = Math.floor((availableWidth + gapWidth) / (dayWidth + gapWidth));
        days = Math.max(5, Math.min(days, 21));
        setVisibleDays(days);
      }
    };

    calculateVisibleDays();
    window.addEventListener("resize", calculateVisibleDays);
    return () => window.removeEventListener("resize", calculateVisibleDays);
  }, []);

  const getCurrentPeriodDates = (date, numDays) => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    const periodDates = [];
    for (let i = 0; i < numDays; i++) {
      const periodDate = new Date(startOfWeek);
      periodDate.setDate(startOfWeek.getDate() + i);
      periodDates.push({
        date: periodDate.getDate(),
        fullDate: new Date(periodDate),
        dayIndex: periodDate.getDay() === 0 ? 6 : periodDate.getDay() - 1,
        isPast: periodDate < new Date(new Date().setHours(0, 0, 0, 0)),
      });
    }
    return periodDates;
  };

  const periodDates = getCurrentPeriodDates(currentDate, visibleDays);

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

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <div className="flex flex-col items-start h-[200px] bg-transparent mx-auto rounded-2xl m-10 p-6 w-full max-w-6xl">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">{currentMonth}</h2>
      </div>

      {/* Calendar Navigation */}
      <div ref={containerRef} className="flex items-center w-full gap-3">
        {/* Previous Button */}
        <Button variant="ghost" size="icon" onClick={handlePrevPeriod} disabled={isAnimating} className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Button>

        {/* Days */}
        <div className="flex gap-3 flex-1 justify-center overflow-hidden transition-all duration-300 ease-in-out">
          {periodDates.map((dateObj, index) => {
            const isSelected = selectedDate === dateObj.date;
            const isInactive = dateObj.isPast && !isSelected;

            return (
              <Card
                key={`${dateObj.fullDate.toISOString()}-${index}`}
                onClick={() => handleDateSelect(dateObj.date)}
                className={`flex flex-col items-center justify-center p-2 w-[64px] h-[90px] cursor-pointer rounded-xl border transition-all duration-300
                  ${isSelected ? "bg-purple-600 text-white border-purple-600 shadow-md" : isInactive ? "text-gray-400 opacity-40 bg-white border-gray-200" : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"}
                `}
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                <div className="text-xs font-medium mb-1">{dayAbbreviations[dateObj.dayIndex]}</div>
                <div className="text-lg font-semibold">{dateObj.date}</div>
              </Card>
            );
          })}
        </div>

        {/* Next Button */}
        <Button variant="ghost" size="icon" onClick={handleNextPeriod} disabled={isAnimating} className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Button>
      </div>

      {/* Selected Date Info */}
      {selectedDate && (
        <div className="mt-6 text-sm text-gray-600">
          Интихобшуда:{" "}
          <span className="font-medium">
            {selectedDate} {currentMonth} {currentYear}
          </span>
        </div>
      )}
    </div>
  );
}
