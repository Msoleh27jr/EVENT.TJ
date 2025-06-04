import React, { useEffect } from "react";
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
  useEffect(()=> {
    handleClick()
  } , [])
  return (
    <div>
      <section className="flex text-2xl max-w-[85%] m-auto justify-between my-5 items-center">
        <Link to="/">
          <h1 className="md:text-5xl font-bold text-[#9F00FF] cursor-pointer">
            EVENT.TJ
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              id="react-option"
              value=""
              class="hidden peer"
              required=""
              onClick={handleClick}
            />
            <label
              for="react-option"
              class="flex z-10 items-center peer relative justify-center w-14 h-14 shadow-lg duration-300 [box-shadow:1px_1px_0px_1px_#eab92d] border-2 border-gray-800 peer-checked:border-2 peer-checked:border-gray-800 rounded-xl cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_1px_#075985] peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]"
            ></label>
            <svg
              class="absolute stroke-sky-800 w-12 h-23 duration-300 peer-checked:opacity-100 opacity-0"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                class="svg-stroke-primary"
                d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></path>
            </svg>
            <svg
              class="absolute stroke-yellow-500 w-12 h-23 duration-300 peer-checked:opacity-0 opacity-100"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                class="svg-stroke-primary"
                d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              ></path>
            </svg>
          </div>
          <select
            className="md:text-[25px] text-[12px] px-3 md:py-1 py-[0.6px] border-[4px] border-[#9F00FF] text-[#9F00FF] rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#9F00FF]"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="tj">tj</option>
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
          <button className="px-4 py-3 md:border-[2px] text-[12px] text-white bg-[#9F00FF] rounded hover:opacity-90 transition">
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
