"use client";
import React, { useEffect } from "react";
import Apps from "./Apps";
import Ecommerce from "./Ecommerce";
import Website from "./Website";

export default function Combined() {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <div className="mx-auto max-w-[85rem] ">
      <div className="overflow-hidden">
        <div className="relative">
          <div
            aria-hidden="true"
            className="flex absolute -top-48 start-0 -z-[1]"
          >
            <div className="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px]  "></div>
            <div className="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60"></div>
          </div>

          <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
            <div className="max-w-2xl mx-auto  space-y-8 text-gray-400 text-center mb-10">
              <p className="bg-gradient-to-r  text-3xl md:text-4xl font-bold lg:text-5xl from-[#38B6FF] dark:from-_primary dark:via-_primary dark:to-_primary via-[#F663F6] to-[#B418B4] inline-block text-transparent bg-clip-text">
                Simple, transparent pricing
              </p>
              <p className="mt-2 mb-10 lg:text-lg  dark:text-secondary ">
                Whatever your status, our offers evolve according to your needs.
                Keep in mind the prices mension are the "starts from"s
              </p>
            </div>

            {/* Tabs start here */}
            <div>
              <nav
                className="relative  md:w-2/3 w-full  flex border lg:w-1/2 mx-auto -mt-6 bg-blue-500 rounded-2xl overflow-hidden dark:border-gray-700"
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
                  className="hs-tab-active:border-blue-600 hs-tab-active:bg-blue-500 hs-tab-active:text-white dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-2 md:px-4 text-gray-500 hover:text-gray-700 text-xs md:text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
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
              <div className="mt-3 px-6">
                <div
                  id="bar-with-underline-1"
                  role="tabpanel"
                  aria-labelledby="bar-with-underline-item-1"
                >
                  <div>
                    <Website />
                  </div>
                </div>
                <div
                  id="bar-with-underline-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="bar-with-underline-item-2"
                >
                  <div>
                    <Ecommerce />
                  </div>
                </div>
                <div
                  id="bar-with-underline-3"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="bar-with-underline-item-3"
                >
                  <div>
                    <Apps />
                  </div>
                </div>
              </div>
            </div>
            {/* Tabs end here */}
          </div>
        </div>
      </div>
    </div>
  );
}
