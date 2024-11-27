import React from "react";

export default function TemplatesHero() {
  return (
    <div className=" ">
      <div className="bg-gradient-to-b  dark:from-secondary dark:via-secondary dark:to-secondary froms-violet-600/[.15] visa-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="flex justify-center">
            <a
              className="group inline-block   bg-white/[.05] hover:bg-white/[.1] border dark:border-white/[.05] border-_primary p-1 ps-4 rounded-full shadow-md"
              href="#"
            >
              <p className="me-2 inline-block text-_primary dark:text-white text-sm">
                Dream big, the sky is the limit
              </p>
            </a>
          </div>

          <div className="max-w-6xl text-center mx-auto">
            <h1 className="block font-medium dark:text-gray-200 text-_primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Unsure of which theme and design for your website?
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-secondary dark:text-gray-400">
              We have carefully gathered a collection of templates which you can
              choose from,to bring your dream website to life
            </p>
          </div>

          <div className="text-center">
            <a
              className="inline-flex border from-[#38B6FF] via-[#F663F6] to-[#B418B4] justify-center items-center gap-x-3 text-center bg-gradient-to-l p-2 frosm-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50     dark:border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="/contact-us"
            >
              Need consultation?
              <svg
                className="flex-shrink-0 w-4 h-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
