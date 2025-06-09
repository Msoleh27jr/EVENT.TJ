import React from "react";
import theatresImg from "./img/unnamed (3).jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";


const FirstSecton = () => {
    const {t} = useTranslation()
  return (
    <section className="my-10">
      <Link to={"theatres"}>
        <div className="w-[48%] group transition translate-1 duration-500 overflow-hidden rounded-[6px] cursor-pointer">
          <img
            className="w-[100%] transition translate-1 duration-500 group-hover:scale-110 rounded-[6px]"
            src={theatresImg}
            alt=""
          />
          <div className="absolute z-10 bottom-5 left-5">
            <p className="bg-[#9F00FF] w-[100px] text-center rounded-[5px] text-white font-bold">
              {t("theatres")}
            </p>
            <h2 className="text-2xl font-bold text-white">
              Сафорати Тоҷикистон аввалин Ҷашнвораи филмҳои Тоҷикистонро дар
              Малайзия баргузор намуд.
            </h2>
          </div>
        </div>
      </Link>
      <aside></aside>
    </section>
  );
};

export default FirstSecton;
