import React from "react";

export default function WebsiteFeatures() {
  return (
    <div className=" w-full dark:bg-secondary overflow-x-auto block">
      <table className="w-full h-px dark:bg-secondary">
        <thead className="sticky rounded-t-2xl top-0 inset-x-0 bg-white dark:bg-secondary">
          <tr className=" ">
            <th
              className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
              scope="col"
            >
              <span className="sr-only">Feature by</span>
              <span className="dark:text-gray-300">Package Features</span>
            </th>

            <th
              className="w-1/4 py-4 px-6 text-lg leading-6 font-medium dark:text-gray-300 text-gray-800 text-center "
              scope="col"
            >
              Basic
            </th>
            <th
              className="w-1/4 py-4 px-6 text-lg leading-6 dark:text-gray-300 font-medium text-gray-800 text-center "
              scope="col"
            >
              Startup
            </th>
            <th
              className="w-1/4 py-4 px-6 text-lg leading-6 dark:text-gray-300 font-medium text-gray-800 text-center "
              scope="col"
            >
              Team
            </th>
            <th
              className="w-1/4 py-4 px-6 text-lg leading-6 dark:text-gray-300 font-medium text-gray-800 text-center "
              scope="col"
            >
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-200 divide-y divide-gray-200 dark:bg-secondary dark:border-gray-700 dark:divide-gray-700">
          <tr>
            <th
              className="py-3 ps-6 bg-gray-50 dark:text-gray-200 font-bold text-gray-800 text-start dark:bg-slate-800  dark:bg-secondary"
              colSpan={5}
              scope="colgroup"
            >
              Webiste
            </th>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Consultation and project planning
            </th>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              24/7 Customer support
            </th>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Setup
            </th>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Template design
            </th>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Custom design
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Theme support
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included </span>
            </td>
            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included </span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Form Integration
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Monthly hosting
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Chatbot Integration
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Live Chat Integration
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-3 ps-6 dark:text-gray-200 dark:bg-secondary bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 "
              colSpan={5}
              scope="colgroup"
            >
              Domain
            </th>
          </tr>

          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Setup
            </th>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Management
            </th>
            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Not Included</span>
            </td>
            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Not included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              SSL maintenance
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not included </span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Not Included</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-3 ps-6 dark:bg-secondary dark:text-gray-100 bg-gray-50 font-bold text-gray-800 text-start dark:bg-slate-800 "
              colSpan={5}
              scope="colgroup"
            >
              Professional Email
            </th>
          </tr>

          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Setup
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not Included </span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>
            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Monthly Hosting
            </th>

            <td className="py-5 px-6">
              {/* <!-- Minus --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- Minus --> */}
              <span className="sr-only">Not Included </span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>
            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Spam protection
            </th>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Free</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Team</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th
              className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap dark:text-gray-400"
              scope="row"
            >
              Email marketing
            </th>
            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Not Included</span>
            </td>
            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-600"
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
                <path d="M5 12h14" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Not Included</span>
            </td>
            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Startup</span>
            </td>

            <td className="py-5 px-6">
              {/* <!-- Check --> */}
              <svg
                className="mx-auto flex-shrink-0 h-5 w-5 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* <!-- End Solid Check --> */}
              <span className="sr-only">Included in Enterprise</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
