import React from "react";
import { useTranslation } from "react-i18next";

const Title = ({ parentPage, curentPage, titlePage }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-auto flex flex-col gap-6 mt-[15px]">
        <div className="flex gap-4 items-baseline text-base">
          {t(parentPage)}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {t(curentPage)}
        </div>
        <h1 className="text-[38px] font-bold">{t(titlePage)}</h1>
      </div>
    </>
  );
};

export default Title;
