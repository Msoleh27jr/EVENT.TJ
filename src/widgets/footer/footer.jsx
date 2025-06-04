import React from "react";
import facebook from "./img/15707884.png";
import telegram from "./img/telegram-6896827_1280.webp";
import instagram from "./img/instagram-6338393_1280.webp";
import youtube from "./img/15707874.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[100%] bg-gray-800 py-8 my-5">
      <footer className="max-w-[85%] m-auto">
        <section className="flex items-center justify-between md:flex-row flex-col">
          <div className="flex items-center md:gap-20 md:flex-row flex-col justify-center">
            <h1 className="text-2xl font-bold cursor-pointer text-white">
              EVENT.TJ
            </h1>
            <ul className="flex md:gap-7 gap-4 justify-center md:justify-start md:my-0 my-5 text-[16px] md:flex-nowrap flex-wrap font-bold cursor-pointer text-white">
              <li>{t("aboutProject")}</li>
              <li>{t("UseOfMaterials")}</li>
              <li>{t("Advertising")}</li>
              <li>{t("Feedback")}</li>
              <li>{t("theatres")}</li>
            </ul>
          </div>
          <div className="flex gap-5">
            <img
              className="w-[40px] rounded-xl cursor-pointer"
              src={facebook}
              alt=""
            />
            <img
              className="w-[40px] rounded-xl cursor-pointer"
              src={telegram}
              alt=""
            />
            <img
              className="w-[40px] rounded-xl cursor-pointer"
              src={instagram}
              alt=""
            />
            <img
              className="w-[40px] rounded-xl cursor-pointer"
              src={youtube}
              alt=""
            />
          </div>
        </section>
        <section className="flex justify-between my-5 md:flex-row flex-col">
          <div className="md:text-start text-center">
            <p className="text-[18px] text-gray-400">{t("Certificate")}</p>
            <p className="text-[18px] text-gray-400">{t("Incorporator")}</p>
            <p className="text-[18px] text-gray-400">{t("email")}</p>
          </div>
          <p className="underline cursor-pointer text-gray-300 md:text-start text-center my-3">{t("Privacy")}</p>
        </section>
        <section className="my-5">
          <p className="text-[18px] text-gray-400">© 2025 — 20&&. {t("reserved")}</p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
