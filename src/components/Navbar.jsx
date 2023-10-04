import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isTextMode, setIsTextMode] = useState(true); // Untuk mengelola jenis tampilan tombol (teks/gambar)
  const [darkModeText, setDarkModeText] = useState("Darkmode");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
      setDarkModeText("Darkmode");
    } else {
      setTheme("dark");
      setDarkModeText("Lightmode");
    }
  };

  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  useEffect(() => {
    // Tambahkan event listener untuk mendeteksi klik di luar nav-menu
    const handleOutsideClick = (e) => {
      const navMenu = document.getElementById("nav-menu");
      if (navMenu && !navMenu.contains(e.target)) {
        setIsHamburgerActive(false);
      }
    };

    // Daftarkan event listener ketika komponen dimount
    document.addEventListener("mousedown", handleOutsideClick);

    // Hapus event listener ketika komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const hamburgerClasses = isHamburgerActive ? "hamburger-active" : "";

  window.onscroll = function () {
    const nav = document.getElementById("nav-main");
    const fixedNav = nav ? nav.offsetTop : null;

    if (nav && fixedNav !== null) {
      if (window.scrollY > fixedNav) {
        nav.classList.add("navbar-fixed", "bg-white");
      } else {
        nav.classList.remove("navbar-fixed", "bg-white");
      }
    }
  };

  return (
    <nav
      id="nav-main"
      className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-50 justify-between px-10 py-2`}
    >
      {/* Logo */}
      <div className="flex items-center w-7/12 md:w-6/12">
        <a href="#hero" className="block dark:hidden">
          <img src="/logo-w.png" alt="logo" width={40} />
        </a>
        <a href="#hero" className="hidden dark:block">
          <img src="/logo-b.png" alt="logo" width={40} />
        </a>
      </div>

      {/* Nav MD & LG */}
      <div className="hidden md:block md:w-6/12 text-dark dark:text-light">
        <div className="w-full flex justify-around items-center font-medium">
          <a
            href="#hero"
            className="hover:text-primary transition duration-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-primary transition duration-500"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-primary transition duration-500"
          >
            Skills
          </a>
          <a
            href="#portofolio"
            className="hover:text-primary transition duration-500"
          >
            Portofolio
          </a>
          <a
            href="#contact"
            className="hover:text-white transition duration-500 px-4 py-1 bg-white text-primary rounded-full border-2 border-primary hover:bg-green-700 dark:bg-primary dark:text-light dark:border-light dark:hover:bg-slate-300 dark:hover:text-primary"
          >
            Contact
          </a>
          <div className="hover:cursor-pointer">
            {/* <img src="/icon-navbar/moon.png" alt="" width={25} /> */}
            <img
              src={
                theme === "dark"
                  ? "/icon-navbar/sun.png"
                  : "/icon-navbar/moon.png"
              }
              alt={theme === "dark" ? "Moon" : "Sun"}
              width={20}
              onClick={() => {
                if (theme === "dark") {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Button | Mobile */}
      <div className="w-5/12 flex flex-col items-end md:hidden">
        <button
          id="hamburger"
          type="button"
          className={`flex flex-col items-start gap-y-[5px] ${hamburgerClasses}`}
          onClick={toggleHamburger}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Nav-Menu | Mobile */}
        <div
          id="nav-menu"
          className={
            isHamburgerActive
              ? "bg-slate-300 dark:bg-dark3 opacity-95 min-h-screen absolute top-0 w-5/12 right-0 flex flex-col items-end"
              : "hidden"
          }
        >
          <div className="w-full min-h-screen flex flex-col items-center">
            <div className="w-full flex justify-end">
              <button
                id="hamburger-menu"
                type="button"
                className={`flex flex-col items-end w-full gap-y-[5px] ${hamburgerClasses} m-4 me-6`}
                onClick={toggleHamburger}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
            <ul className="flex flex-col items-center justify-evenly w-full">
              <li className="hover:bg-slate-500 w-10/12 text-center rounded-md py-2 flex items-center">
                <div className="flex justify-center w-full -me-7">
                  <a
                    href="#hero"
                    className="text-dark3 dark:text-white opacity-100 text-lg font-semibold w-full"
                  >
                    Home
                  </a>
                </div>
                <a href="#hero" className="me-4">
                  <img
                    src={
                      theme === "dark"
                        ? "/icon-navbar/home-w.png"
                        : "/icon-navbar/home-b.png"
                    }
                    alt={theme === "dark" ? "Moon" : "Sun"}
                    width={20}
                    onClick={() => {
                      if (theme === "dark") {
                        setTheme("light");
                      } else {
                        setTheme("dark");
                      }
                    }}
                  />
                </a>
              </li>
              <li className="hover:bg-slate-500 w-10/12 text-center rounded-md py-2 flex items-center">
                <div className="flex justify-center w-full -me-7">
                  <a
                    href="#about"
                    className="text-dark3 dark:text-white opacity-100 text-lg font-semibold w-full"
                  >
                    About
                  </a>
                </div>
                <a href="#about" className="me-4">
                  <img
                    src={
                      theme === "dark"
                        ? "/icon-navbar/about-w.png"
                        : "/icon-navbar/about-b.png"
                    }
                    alt={theme === "dark" ? "Moon" : "Sun"}
                    width={20}
                    onClick={() => {
                      if (theme === "dark") {
                        setTheme("light");
                      } else {
                        setTheme("dark");
                      }
                    }}
                  />
                </a>
              </li>
              <li className="hover:bg-slate-500 w-10/12 text-center rounded-md py-2 flex items-center">
                <div className="flex justify-center w-full -me-7">
                  <a
                    href="#skills"
                    className="text-dark3 dark:text-white opacity-100 text-lg font-semibold w-full"
                  >
                    Skills
                  </a>
                </div>
                <a href="#skills" className="me-4">
                  <img
                    src={
                      theme === "dark"
                        ? "/icon-navbar/skills-w.png"
                        : "/icon-navbar/skills-b.png"
                    }
                    alt={theme === "dark" ? "Moon" : "Sun"}
                    width={20}
                    onClick={() => {
                      if (theme === "dark") {
                        setTheme("light");
                      } else {
                        setTheme("dark");
                      }
                    }}
                  />
                </a>
              </li>
              <li className="hover:bg-slate-500 w-10/12 text-center rounded-md py-2 flex items-center">
                <div className="flex justify-center w-full -me-7">
                  <a
                    href="#portofolio"
                    className="text-dark3 me-4 dark:text-white opacity-100 text-lg font-semibold w-full"
                  >
                    Portofolio
                  </a>
                </div>
                <a href="#portofolio" className="me-4">
                  <img
                    src={
                      theme === "dark"
                        ? "/icon-navbar/portofolio-w.png"
                        : "/icon-navbar/portofolio-b.png"
                    }
                    alt={theme === "dark" ? "Moon" : "Sun"}
                    width={20}
                    onClick={() => {
                      if (theme === "dark") {
                        setTheme("light");
                      } else {
                        setTheme("dark");
                      }
                    }}
                  />
                </a>
              </li>
              <li className="hover:bg-slate-500 w-10/12 text-center rounded-md py-2 flex items-center">
                <div className="flex justify-center w-full -me-7">
                  <a
                    href="#contact"
                    className="text-dark3 dark:text-white opacity-100 text-lg font-semibold w-full"
                  >
                    Contact
                  </a>
                </div>
                <a href="#contact" className="me-4">
                  <img
                    src={
                      theme === "dark"
                        ? "/icon-navbar/contact-w.png"
                        : "/icon-navbar/contact-b.png"
                    }
                    alt={theme === "dark" ? "Moon" : "Sun"}
                    width={20}
                    onClick={() => {
                      if (theme === "dark") {
                        setTheme("light");
                      } else {
                        setTheme("dark");
                      }
                    }}
                  />
                </a>
              </li>
              <li className="hover:bg-slate-500 w-10/12 text-center rounded-md py-2 flex justify-around items-center">
                <div>
                  <h2
                    src={
                      theme === "dark"
                        ? "/icon-navbar/sun.png"
                        : "/icon-navbar/moon.png"
                    }
                    alt={theme === "dark" ? "Moon" : "Sun"}
                    className="text-dark3 dark:text-white opacity-100 text-lg font-semibold w-full"
                    width={20}
                    onClick={() => {
                      if (theme === "dark") {
                        setTheme("light");
                      } else {
                        setTheme("dark");
                      }
                    }}
                  >
                    {theme === "dark" ? "Lightmode" : "Darkmode"}
                  </h2>
                </div>
                <div className="hover:cursor-pointer">
                  <img
                    src={
                      theme === "dark"
                        ? "/icon-navbar/sun.png"
                        : "/icon-navbar/moon.png"
                    }
                    alt={theme === "dark" ? "Moon" : "Sun"}
                    width={20}
                    onClick={() => {
                      if (theme === "dark") {
                        setTheme("light");
                      } else {
                        setTheme("dark");
                      }
                    }}
                  />
                </div>
              </li>
              {/* <li>
                <div onClick={handleThemeSwitch} className="cursor-pointer">
                  {isTextMode ? (
                    <span>{darkModeText}</span>
                  ) : (
                    <img
                      src={
                        theme === "dark"
                          ? "/icon-navbar/moon.png"
                          : "/icon-navbar/sun.png"
                      }
                      alt={theme === "dark" ? "Moon" : "Sun"}
                      width={25}
                    />
                  )}
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
