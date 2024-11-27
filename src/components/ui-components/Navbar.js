"use client";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import Switch from "react-switch";

export default function Navbar() {
  let { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    import("preline");
  }, []);
  // const [checked, setChecked] = useState(theme === "light" ? true : false);

  // const handleChange = (isChecked) => {
  //   // setChecked(isChecked);
  //   console.log(theme);
  //   if (theme === "dark") {
  //     return setTheme("light");
  //   }
  //   return setTheme("dark");
  // };
  const handleChange = (isChecked) => {
    console.log(theme); // Check if theme is correctly updated
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      {/* <!-- Announcement Banner --> */}

      {/* {pathname === "/wordpress-hosting" && (
        <div
          id="ab-full-width-with-dismiss-button-on-blue-bg"
          className="hs-removing:-translate-y-full bg-blue-600/20"
        >
          <div className="max-w-[85rem] px-1 py-1    mx-auto">
            <div className="flex justify-between itemse-center ">
              <div className="lg:flex items-center">
                <div>
                  <a
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
                    href="#"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Watch Video
                  </a>
                  <span className="inline-block border-e border-white/[.3] w-px h-5 mx-2"></span>
                </div>
                <a
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm"
                  href="#"
                >
                  How we can help you grow
                </a>{" "}
                <p className="text-white   lg:ml-40 text-center">
                  Would you like a free
                  <a
                    className="decoration-2 ml-3  border p-1 rounded-lg font-medium hover:text-white/[.8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="../figma.html"
                  >
                    Domain Name
                  </a>
                </p>
              </div>

              <div className="ps-3 ms-auto">
                <button
                  type="button"
                  className="inline-flex rounded-lg p-1.5 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                  data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
      {/* <!-- End Announcement Banner --> */}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full dark:text-_primary  text-sm py-4 ">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center   gap-4">
              <img
                src={`/${theme === "light" ? "logo" : "logodark"}.png`}
                alt="logo"
                className="flex-none text-xl w-10 font-semibold dark:text-white"
              />
              <p className="bg-gradient-to-r w-60 dark:text-_primary text-xl  from-[#38B6FF] via-[#F663F6] to-[#B418B4] inline-block text-transparent bg-clip-text">
                Qwik Codes
              </p>
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-image-2"
                aria-controls="navbar-image-2"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-image-2"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a
                className={`font-medium ${
                  pathname === "/" ? "text-blue-500" : "text-gray-600"
                } dark:focus:outline-none dark:focus:ring-1 dark:text-_primary  dark:focus:ring-gray-600`}
                href="/"
                aria-current="page"
              >
                Home
              </a>{" "}
              <a
                className={`font-medium ${
                  pathname === "/wordpress-hosting"
                    ? "text-blue-500"
                    : "text-gray-600"
                } dark:focus:outline-none border dark:text-_primary dark:border-_primary p-2 rounded-lg hover:border-blue-500 hover:text-blue-500 dark:focus:ring-1 dark:focus:ring-gray-600`}
                href="/wordpress-hosting"
                aria-current="page"
              >
                WordPress Hosting
              </a>
              <a
                className={`font-medium ${
                  pathname === "/templates" ? "text-blue-500" : "text-gray-600"
                } dark:focus:outline-none hover:text-blue-500 dark:text-_primary dark:focus:ring-1 dark:focus:ring-gray-600`}
                href="/templates"
              >
                Templates
              </a>
              <a
                className={`font-medium ${
                  pathname === "/services" ? "text-blue-500" : "text-gray-600"
                } dark:focus:outline-none hover:text-blue-500 dark:text-_primary dark:focus:ring-1 dark:focus:ring-gray-600`}
                href="/services"
              >
                Services
              </a>
              <a
                className={`font-medium ${
                  pathname === "/live-chat" ? "text-blue-500" : "text-gray-600"
                } dark:focus:outline-none hover:text-blue-500 dark:text-_primary dark:focus:ring-1 dark:focus:ring-gray-600`}
                href="/pricing"
              >
                Pricing
              </a>
              <a
                className={`font-medium ${
                  pathname === "/live-chat" ? "text-blue-500" : "text-gray-600"
                } dark:focus:outline-none dark:focus:ring-1 dark:text-_primary hover:text-blue-500  dark:focus:ring-gray-600`}
                href="/quick-fun?category=websites"
              >
                Qwik Fun
              </a>
              {/* <!-- Switch/Toggle --> */}
              <label>
                <Switch
                  offColor="#0ea5e9"
                  disabled={false}
                  onColor="#facc15"
                  className="flex items-center  "
                  uncheckedIcon={
                    <div className="p-1">
                      <FaRegMoon className="text-xl text-white " />
                    </div>
                  }
                  checkedIcon={
                    <div className="p-1">
                      <MdOutlineWbSunny className="text-xl text-white  " />
                    </div>
                  }
                  onChange={handleChange}
                  checked={theme === "dark" ? true : false}
                  // checked={checked}
                />
              </label>
              {/* <!-- End Switch/Toggle --> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
