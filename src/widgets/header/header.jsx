import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";

const Header = () => {
  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <section className="flex text-2xl max-w-[85%] m-auto justify-between my-5 items-center">
        <Link to="/">
          <h1 className="md:text-5xl font-bold text-[#9F00FF] cursor-pointer">
            EVENT.TJ
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={handleClick}
            className="px-4 md:py-3 py-1 border-[2px] text-[12px] border-[#9F00FF] text-[#9F00FF] bg-white rounded hover:bg-[#9F00FF] hover:text-white transition"
          >
            Dark
          </button>
          <select
            className="md:text-[25px] text-[12px] px-3 md:py-1 py-[0.6px] border-[4px] border-[#9F00FF] text-[#9F00FF] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#9F00FF]"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="tj">tj</option>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
          <button className="px-4 py-3 md:border-[2px] text-[12px] border-[#9F00FF] text-white bg-[#9F00FF] rounded hover:opacity-90 transition">
            {t("login")}
          </button>
        </div>
      </section>
      <hr className="max-w-[85%] m-auto shadow-2xl border-0.5" />
      <nav>
        <ul className="my-5 max-w-[85%] m-auto flex justify-between text-xl md:overflow-auto overflow-x-scroll md:gap-0 gap-7">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
     before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
     before:bg-[#9F00FF] before:transition-all before:duration-300 
     ${
       isActive
         ? "before:w-full text-[#9F00FF]"
         : "before:w-0 hover:before:w-full"
     }`
            }
          >
            <li>{t("home")}</li>
          </NavLink>

          <NavLink
            to={"theatres"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
     before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
     before:bg-[#9F00FF] before:transition-all before:duration-300 
     ${
       isActive
         ? "before:w-full text-[#9F00FF]"
         : "before:w-0 hover:before:w-full"
     }`
            }
          >
            <li>{t("theatres")}</li>
          </NavLink>

          <NavLink
            to={"movie"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
     before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
     before:bg-[#9F00FF] before:transition-all before:duration-300 
     ${
       isActive
         ? "before:w-full text-[#9F00FF]"
         : "before:w-0 hover:before:w-full"
     }`
            }
          >
            <li>{t("movie")}</li>
          </NavLink>

          <NavLink
            to={"pictures"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
     before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
     before:bg-[#9F00FF] before:transition-all before:duration-300 
     ${
       isActive
         ? "before:w-full text-[#9F00FF]"
         : "before:w-0 hover:before:w-full"
     }`
            }
          >
            <li>{t("pictures")}</li>
          </NavLink>

          <NavLink
            to={"digets"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
     before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
     before:bg-[#9F00FF] before:transition-all before:duration-300 
     ${
       isActive
         ? "before:w-full text-[#9F00FF]"
         : "before:w-0 hover:before:w-full"
     }`
            }
          >
            <li>{t("digets")}</li>
          </NavLink>

          <NavLink
            to={"video"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
     before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
     before:bg-[#9F00FF] before:transition-all before:duration-300 
     ${
       isActive
         ? "before:w-full text-[#9F00FF]"
         : "before:w-0 hover:before:w-full"
     }`
            }
          >
            <li>{t("video")}</li>
          </NavLink>

          <NavLink
            to={"news"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
     before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
     before:bg-[#9F00FF] before:transition-all before:duration-300 
     ${
       isActive
         ? "before:w-full text-[#9F00FF]"
         : "before:w-0 hover:before:w-full"
     }`
            }
          >
            <li>{t("news")}</li>
          </NavLink>

          <NavLink
            to={"events"}
            className={({ isActive }) =>
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF]
     before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 
     before:bg-[#9F00FF] before:transition-all before:duration-300 
     ${
       isActive
         ? "before:w-full text-[#9F00FF]"
         : "before:w-0 hover:before:w-full"
     }`
            }
          >
            <li>{t("events")}</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
