import React from 'react'
import { data } from "./dataBase"
import { NavLink, useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next';

const Digets = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className='mb-[100px]'>
      <div className='flex justify-between md:flex-row flex-col items-center mb-[30px]'>
        <h1 className='font-[700] text-[42px]'>{t("digets")}</h1>
        <menu className='flex flex-row gap-[30px]'>
          <NavLink className="relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-[#9F00FF] before:transition-all before:duration-300">
            {t("recomended")}
          </NavLink>
          <NavLink className="relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-[#9F00FF] before:transition-all before:duration-300">
            {t("latest")}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] 
              before:content-[''] before:absolute before:left-0 before:bottom-0 
              before:h-0.5 before:bg-[#9F00FF] before:transition-all before:duration-300 
              ${isActive ? 'before:w-full text-[#9F00FF]' : 'before:w-0 hover:before:w-full'}`
            }
          >
            {t("all")}
          </NavLink>
        </menu>
        <i className='w-[30%]'></i>
        <h1 className='font-[700] top-[27vh] text-center right-[5%] text-[42px] md:fixed left-[70%]'>{t("popularTages")}</h1>
      </div>
      {data &&
        data.map((el, i) => (
          <div key={i} className="flex w-[100%] md:w-[65%] gap-[50px] items-center">
            <p className="text-[52px] text-[#9F00FF] font-[700]">{i + 1}</p>
            <div
              className="py-[20px] w-[100%]"
              style={{
                borderBottom: i != data.length - 1 ? "1px solid #ccc" : "none",
              }}
            >
              <h1 className="text-[#9F00FF] text-[18px] font-[600]">
                {t(el.category)}
              </h1>
              <p
                onClick={() => navigate(`/digets/${i}`)}
                className="text-[22px] font-[700] cursor-pointer hover:text-[#9F00FF]"
              >
                {t(el.name)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Digets;

