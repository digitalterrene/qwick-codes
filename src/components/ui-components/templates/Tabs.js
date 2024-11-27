"use client";
import {
  eccomerceTemplates,
  webappsTemplates,
  websitesTemplates,
} from "@/assets/data";
import React, { useEffect, useState } from "react";
import { GoDeviceDesktop } from "react-icons/go";
import {
  HiMiniDeviceTablet,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";

export default function Tabs() {
  const [viewMode, setViewMode] = useState("mobile");
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div>
      <nav
        className="relative  md:w-2/3 w-full  flex border lg:w-1/2 mx-auto -mt-6 bg-blue-500 rounded-2xl overflow-hidden dark:border-blue-700"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className="hs-tab-active:border-blue-600 hs-tab-active:bg-blue-500 hs-tab-active:text-white dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-2 md:px-4 text-gray-500 hover:text-gray-700 text-xs md:text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400 active"
          id="bar-with-underline-item-1"
          data-hs-tab="#bar-with-underline-1"
          aria-controls="bar-with-underline-1"
          role="tab"
        >
          Websites
        </button>
        <button
          type="button"
          className="hs-tab-active:border-blue-600 hs-tab-active:bg-blue-500 hs-tab-active:text-white dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-2 md:px-4 text-gray-500 hover:text-gray-700 text-xs md:text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-400"
          id="bar-with-underline-item-2"
          data-hs-tab="#bar-with-underline-2"
          aria-controls="bar-with-underline-2"
          role="tab"
        >
          E-commerce
        </button>
        <button
          type="button"
          className="hs-tab-active:border-blue-600 text-xs hs-tab-active:bg-blue-500 hs-tab-active:text-white dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-2 md:px-4 text-gray-500 hover:text-gray-700 md:text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
          id="bar-with-underline-item-3"
          data-hs-tab="#bar-with-underline-3"
          aria-controls="bar-with-underline-3"
          role="tab"
        >
          Web Applications
        </button>
      </nav>
      <div className="mx-auto flex gap-3 w-fit p-10">
        <button
          type="button"
          onClick={() => setViewMode("mobile")}
          className={`py-3 text-xl px-4 inline-flex items-center gap-x-2 font-semibold rounded-lg border border-transparent ${
            viewMode === "mobile"
              ? "bg-blue-500 text-white"
              : "bg-gray-800 text-white hover:bg-gray-900"
          } disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800`}
        >
          <HiOutlineDevicePhoneMobile />
        </button>
        <button
          type="button"
          onClick={() => setViewMode("tablet")}
          className={`py-3 text-xl px-4 inline-flex items-center gap-x-2 font-semibold rounded-lg border border-transparent ${
            viewMode === "tablet"
              ? "bg-blue-500 text-white"
              : "bg-gray-800 text-white hover:bg-gray-900"
          } disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800`}
        >
          <HiMiniDeviceTablet />
        </button>{" "}
        <button
          type="button"
          onClick={() => setViewMode("desktop")}
          className={`py-3 text-xl px-4 inline-flex items-center gap-x-2 font-semibold rounded-lg border border-transparent ${
            viewMode === "desktop"
              ? "bg-blue-500 text-white"
              : "bg-gray-800 text-white hover:bg-gray-900"
          } disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800`}
        >
          <GoDeviceDesktop />
        </button>
      </div>

      <div className="mt-3 px-6">
        <div
          id="bar-with-underline-1"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1"
        >
          <div
            className={`w-full space-y-10 md:space-y-0 ${
              viewMode === "mobile"
                ? "md:grid lg:grid-cols-4  md:grid-cols-3 md:gap-4 lg:gap-10 items-start"
                : viewMode === "tablet"
                ? "md:grid grid-cols-2   md:gap-4 lg:gap-10 items-start"
                : "md:space-y-20  "
            }  `}
          >
            {websitesTemplates?.map((url) => (
              <iframe
                className={`rounded-2xl ${
                  viewMode === "mobile"
                    ? "  h-[500px]  "
                    : viewMode === "tablet"
                    ? " h-[500px] lg:h-[700px]  "
                    : "h-[700px] md:h-[850px] lg:h-[1000px]"
                }  w-full`}
                src={`${url}`}
                frameBorder={0}
              ></iframe>
            ))}
          </div>
        </div>
        <div
          id="bar-with-underline-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-2"
        >
          <div
            className={`w-full space-y-10 md:space-y-0 ${
              viewMode === "mobile"
                ? "md:grid lg:grid-cols-4  md:grid-cols-3 md:gap-4 lg:gap-10 items-start"
                : viewMode === "tablet"
                ? "md:grid grid-cols-2   md:gap-4 lg:gap-10 items-start"
                : "md:space-y-20  "
            }  `}
          >
            {eccomerceTemplates?.map((url) => (
              <iframe
                className={`rounded-2xl ${
                  viewMode === "mobile"
                    ? "  h-[500px]  "
                    : viewMode === "tablet"
                    ? " h-[500px] lg:h-[700px]  "
                    : "h-[700px] md:h-[850px] lg:h-[1000px]"
                }  w-full`}
                src={`${url}`}
                frameBorder={0}
              ></iframe>
            ))}
          </div>
        </div>
        <div
          id="bar-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-3"
        >
          <div
            className={`w-full space-y-10 md:space-y-0 ${
              viewMode === "mobile"
                ? "md:grid lg:grid-cols-4  md:grid-cols-3 md:gap-4 lg:gap-10 items-start"
                : viewMode === "tablet"
                ? "md:grid grid-cols-2   md:gap-4 lg:gap-10 items-start"
                : "md:space-y-20  "
            }  `}
          >
            {webappsTemplates?.map((url) => (
              <iframe
                className={`rounded-2xl ${
                  viewMode === "mobile"
                    ? "  h-[500px]  "
                    : viewMode === "tablet"
                    ? " h-[500px] lg:h-[700px]  "
                    : "h-[700px] md:h-[850px] lg:h-[1000px]"
                }  w-full`}
                src={`${url}`}
                // height="100%"
                frameBorder={0}
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
