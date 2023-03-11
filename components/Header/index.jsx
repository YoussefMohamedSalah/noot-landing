/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Box, Stack } from "@mui/material";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex h-[6rem] w-full items-center bg-white  dark:!bg-black  ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <img
          src="/images/hero/Group_19898.png"
          alt="clip image"
          className="z-[-9] w-[45%] lg:w-[25%]"
          style={{ position: "absolute", left: "25%" }}
        />
        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", top: "7rem" }}
        >
          <div className="center w-[90%]">
            <div className="relative -mx-4 flex items-center justify-between">
              <div className="w-60 max-w-full px-1 xl:mr-4">
                <Link
                  href="/"
                  className={`header-logo block w-full ${
                    sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
                >
                  <Image
                    src="/images/hero/logo.png"
                    alt="logo"
                    width={120}
                    height={25}
                    className="w-full dark:hidden"
                  />
                  <Image
                    src="/images/hero/logo.png"
                    alt="logo"
                    width={120}
                    height={25}
                    className="hidden w-full dark:block"
                  />
                </Link>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? "opacity-0 " : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                        navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                    />
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                      navbarOpen
                        ? "visibility top-full opacity-100"
                        : "invisible top-[120%] opacity-0"
                    }`}
                  >
                    <ul className="block lg:flex lg:space-x-12">
                      {menuData.map((menuItem, index) => (
                        <li key={menuItem.id} className="group relative">
                          {menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-base text-[22px] font-[400]  text-primary group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <></>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="flex items-center justify-end pr-16 lg:pr-0">
                  <Link
                    href="/signin"
                    className="hidden py-3 px-7 text-[25px] text-base font-[400] text-primary hover:opacity-70  md:block"
                  >
                    LOGIN
                  </Link>
                  <Link
                    href="/signup"
                    className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base text-[20px] font-[400] text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                  >
                    GET STARTED
                  </Link>
                  <div>
                    <ThemeToggler />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </header>
    </>
  );
};

export default Header;
