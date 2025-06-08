import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";
import tajikLogo from "./img/download (1).png";
import usaLogo from "./img/download (2).png";
import russianLogo from "./img/download.png";

const LANGUAGES = [
  { code: "tj", label: "TJK", flag: tajikLogo },
  { code: "en", label: "ENG", flag: usaLogo },
  { code: "ru", label: "RUS", flag: russianLogo },
];

const Header = () => {
  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <section className="flex text-2xl max-w-[85%] m-auto justify-between my-5 items-center">
        <Link to="/">
          <h1 className="md:text-5xl font-bold text-[#9F00FF] cursor-pointer hover:transition hover:translate-0.5 hover:duration-500">
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
              className="hidden peer"
              required=""
              onClick={handleClick}
            />
            <label
              htmlFor="react-option"
              className="flex z-10 items-center peer relative justify-center w-14 h-14 shadow-lg duration-300 [box-shadow:1px_1px_0px_1px_#eab92d] border-2 border-gray-800 peer-checked:border-2 peer-checked:border-gray-800 rounded-xl cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_1px_#075985] peer-checked:hover:[box-shadow:1px_1px_0px_1px_#1e1e1e] hover:[box-shadow:1px_1px_0px_1px_#1e1e1e]"
            ></label>
            <svg
              className="absolute stroke-sky-800 w-12 h-23 duration-300 peer-checked:opacity-100 opacity-0"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                className="svg-stroke-primary"
                d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              ></path>
            </svg>
            <svg
              className="absolute stroke-yellow-500 w-12 h-23 duration-300 peer-checked:opacity-0 opacity-100"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path
                className="svg-stroke-primary"
                d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              ></path>
            </svg>
          </div>
          <div>
            <section className="flex text-2xl max-w-[85%] m-auto justify-between my-5 items-center dark:bg-gray-800">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 border-2 border-[#9F00FF] rounded bg-white dark:bg-gray-800 px-3 py-1 cursor-pointer"
                >
                  <img
                    src={currentLang.flag}
                    alt={currentLang.label}
                    className="w-6 h-4 object-cover"
                  />
                  <span>{currentLang.label}</span>
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {open && (
                  <ul className="absolute right-0 mt-1 bg-white border border-gray-300 rounded shadow-md z-10 w-36">
                    {LANGUAGES.map(({ code, label, flag }) => (
                      <li
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className="flex items-center dark:bg-gray-800 gap-2 px-3 py-2 hover:bg-[#9F00FF] hover:text-white cursor-pointer"
                      >
                        <img
                          src={flag}
                          alt={label}
                          className="w-6 h-4 object-cover"
                        />
                        {label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </div>
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
