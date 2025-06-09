import React from "react";
import theatresImg from "./img/unnamed (3).jpg";
import movieImg from "./img/Главная.jpg";
import eventsImg from "./img/1030931590.jpg";
import picturesImg from "./img/Scan0012.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const FirstSecton = () => {
  const { t } = useTranslation();
  return (
    <section className="md:my-20 my-10 md:gap-0 gap-5 flex md:flex-row flex-col items-center md:h-[540px] justify-between">
      <div className="md:w-[50%] h-[100%] group transition translate-1 duration-500 overflow-hidden rounded-[6px] cursor-pointer">
        <Link to={"theatres"}>
          <img
            className="w-[100%] h-[100%] transition translate-1 duration-500 group-hover:scale-110 rounded-[6px]"
            src={theatresImg}
            alt=""
          />
          <div className="absolute z-10 bottom-5 left-5">
            <p className="bg-[#9F00FF] w-[100px] text-center rounded-[5px] text-white font-bold">
              {t("theatres")}
            </p>
            <h2 className="md:text-2xl font-bold text-white">
              Сафорати Тоҷикистон аввалин Ҷашнвораи филмҳои Тоҷикистонро дар
              Малайзия баргузор намуд.
            </h2>
          </div>
        </Link>
      </div>
      <aside className="h-[530px] md:w-[48%]">
        <section className="flex justify-between">
          <div className="w-[48%] h-[260px] group transition translate-1 duration-500 overflow-hidden rounded-[6px] cursor-pointer">
            <Link to={"events"}>
              <img
                className="w-[100%] h-[100%] transition translate-1 duration-500 group-hover:scale-110 rounded-[6px]"
                src={movieImg}
                alt=""
              />
              <div className="absolute z-10 bottom-5 left-5">
                <p className="bg-[#9F00FF] w-[100px] text-center rounded-[5px] text-white font-bold">
                  {t("events")}
                </p>
                <h2 className="md:text-2xl font-bold text-white">
                  Навру́з, также Новруз, Нооруз и Наурыз
                </h2>
              </div>
            </Link>
          </div>
          <div className="w-[48%] h-[260px] group transition translate-1 duration-500 overflow-hidden rounded-[6px] cursor-pointer">
            <Link to={"news"}>
              <img
                className="w-[100%] h-[100%] transition translate-1 duration-500 group-hover:scale-110 rounded-[6px]"
                src={eventsImg}
                alt=""
              />
              <div className="absolute z-10 bottom-5 left-5">
                <p className="bg-[#9F00FF] w-[100px] text-center rounded-[5px] text-white font-bold">
                  {t("news")}
                </p>
                <h2 className="md:text-2xl font-bold text-white">
                  Бо ташаббуси Пешвои муаззами миллат,
                </h2>
              </div>
            </Link>
          </div>
        </section>
        {/* ///////////////////// */}
        <section className="flex justify-between mt-5">
          <div className="w-[48%] h-[260px] group transition translate-1 duration-500 overflow-hidden rounded-[6px] cursor-pointer">
            <Link to={"pictures"}>
              <img
                className="w-[100%] h-[100%] transition translate-1 duration-500 group-hover:scale-110 rounded-[6px]"
                src={picturesImg}
                alt=""
              />
              <div className="absolute z-10 bottom-5 left-5">
                <p className="bg-[#9F00FF] w-[100px] text-center rounded-[5px] text-white font-bold">
                  {t("pictures")}
                </p>
                <h2 className="md:text-2xl font-bold text-white">
                  Навру́з, также Новруз, Нооруз и Наурыз
                </h2>
              </div>
            </Link>
          </div>
          <div className="w-[48%] h-[260px] group transition translate-1 duration-500 overflow-hidden rounded-[6px] cursor-pointer">
            <Link to={"theatres"}>
              <img
                className="w-[100%] h-[100%] transition translate-1 duration-500 group-hover:scale-110 rounded-[6px]"
                src={theatresImg}
                alt=""
              />
              <div className="absolute z-10 bottom-5 left-5">
                <p className="bg-[#9F00FF] w-[100px] text-center rounded-[5px] text-white font-bold">
                  {t("theatres")}
                </p>
                <h2 className="md:text-2xl font-bold text-white">
                  Бо ташаббуси Пешвои муаззами миллат,
                </h2>
              </div>
            </Link>
          </div>
        </section>
      </aside>
    </section>
  );
};

export default FirstSecton;
