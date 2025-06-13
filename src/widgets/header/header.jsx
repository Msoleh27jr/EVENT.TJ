import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router";
import tajikLogo from "./img/download (1).png";
import usaLogo from "./img/download (2).png";
import russianLogo from "./img/download.png";

const LANGUAGES = [
  { code: "tj", label: "TJ", flag: tajikLogo },
  { code: "en", label: "EN", flag: usaLogo },
  { code: "ru", label: "RU", flag: russianLogo },
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

  const [dark, setDark] = useState(false);

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

  return (
    <div>
      <section className="flex text-2xl max-w-[85%] m-auto justify-between my-5 items-center">
        <Link to="/">
          <h1 className="md:text-5xl font-bold text-[#9F00FF] cursor-pointer hover:transition hover:translate-0.5 hover:duration-500">
            EVENT.TJ
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center">
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
                onClick={() => {
                  setDark(false);
                  handleClick();
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
                onClick={() => {
                  setDark(true);
                  handleClick();
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
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
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] dark:text-gray-400
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
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] dark:text-gray-400
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
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] dark:text-gray-400
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
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] dark:text-gray-400
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
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] dark:text-gray-400
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
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] dark:text-gray-400
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
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] dark:text-gray-400
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
              `relative font-medium pb-1 text-gray-600 hover:text-[#9F00FF] dark:text-gray-400
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
