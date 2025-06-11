import React from "react";
import Title from "../../shared/ui/custom/title/title";
import CalendarComponent from "../../shared/ui/custom/calendar-swiper/calendar-swiper";
import TheatresReleases from "../../shared/ui/custom/releases/theatres-releases";
import TheatreSelect from "../../shared/ui/custom/theatres-select/theatres-select";

const TheatresTomorrow = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-5">
        <Title parentPage="home" curentPage="theatres" titlePage="theatres" />
        <TheatreSelect />
      </div>
      <div className="flex mt-20 flex-col items-center md:items-start">
        <CalendarComponent />
        <TheatresReleases button={false} count="4" />
      </div>
    </div>
  );
};

export default TheatresTomorrow;