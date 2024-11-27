"use client";
import React from "react";

export default function Card({ data }: any) {
  const { name, description, category, sections } = data;
  return (
    <div className=" lg:px-6 py-10  space-y-20  lg:py-14 lg:mx-auto">
      <div
        className={` flex flex-wrap space-y-6 lg:space-y-0 w-full md:gap-0 lg:gap-12   `}
      >
        <div className="     h-fit text-start w-full">
          <h2 className="text-3xl  text-gray-300 font-bold lg:text-4xl dark:text-_primary">
            {name}
          </h2>
          <p className="mt-3  text-gray-600 dark:text-secondary">
            {description}
          </p>
          <p className="lg:mt-5">
            <a
              className="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500"
              href="#"
            >
              Pick this service
              <svg
                className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </p>
        </div>

        <div className="space-y-6 bg-white/10  dark:bg-secondary p-3 lg:p-10 rounded-xl lg:space-y-10">
          {sections?.map(({ icon, heading, text }: any, i: any) => (
            <div key={i} className="flex">
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                {icon}
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-400 dark:text-gray-200">
                  {heading}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
