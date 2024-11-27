"use client";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="">
      {" "}
      <footer className="bg-gradient-to-r text-_primary  w-full dark:from-_primary   mx-auto from-gray-100 via-[#bce1ff] dark:via-_primary dark:to-_primary  to-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <a href="/" className="flex items-center  ">
                <img src="/logo.png" className="mr-5 h-6 sm:h-9" alt="logo" />
                <p className="max-w-xs  dark:text-gray-300 text-_primary">
                  Qwik Codes
                </p>
              </a>
              <p className="max-w-xs mt-4 text-sm text-gray-600">
                Empowering Digital Aspirations with Precision Craftsmanship –
                Your Imagination, Our Web Solutions.
              </p>
              <div className="flex mt-8 items-center space-x-6 text-gray-600">
                <a
                  className="hover:opacity-75"
                  href="https://www.facebook.com/profile.php?id=61555908306546"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://www.instagram.com/quick_codes_sa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75 bg-gray-600 w-5 text-gray-300 justify-center flex items-center h-5 rounded"
                  href="https://www.tiktok.com/@qwik.codes.sa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Tiktok </span>
                  <FaTiktok />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-medium dark:text-gray-300">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/services">
                    Website Development
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    App Development
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    Email Setup & Hosting
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    Web Hosting
                  </a>
                  <a className="hover:opacity-75" href="/services">
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium dark:text-gray-300">Helpful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/contact-us">
                    {" "}
                    Contact{" "}
                  </a>
                  <a
                    className="hover:opacity-75"
                    href="/frequently-asked-questions"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                  <a className="hover:opacity-75" href="/quick-fun">
                    Play Trivia
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium dark:text-gray-300">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/privacy-policy">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  <a className="hover:opacity-75" href="/terms-and-conditions">
                    {" "}
                    Terms &amp; Conditions{" "}
                  </a>
                  <a className="hover:opacity-75" href="/returns-policy">
                    {" "}
                    Returns Policy{" "}
                  </a>
                  {/* <a className="hover:opacity-75" href="/accessibility">
                  {" "}
                  Accessibility{" "}
                </a> */}
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-800 dark:text-gray-300">
            © 2024 Qwik Codes RSA
          </p>
        </div>
        <div
          id="ab-full-width-with-dismiss-button-on-blue-bg"
          className="p-4 sm:p-6 bg-_primary   border-gray-200 shadow-sm dark:bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 dark:border-gray-700"
        >
          <div className="max-w-[85rem] mx-auto">
            <div className="grid lg:grid-cols-4 xl:grid-cols-5 gap-5 items-center">
              {/* <!-- End Col --> */}

              <div className="lg:col-span-3">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-_primary">
                  We use cookies
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-800">
                  We use cookies to personalise content and ads, to provide
                  social media features and to analyse our traffic. We also
                  share information about your use of our site with our social
                  media, advertising and analytics partners who may combine it
                  with other information that you’ve provided to them or that
                  they’ve collected from your use of their services.
                </p>
                <div className="mt-5 grid md:flex md:items-center gap-3">
                  <div className="flex items-center justify-between md:justify-start w-full">
                    <label
                      htmlFor="hs-cookies-necessary"
                      className="md:order-2 text-sm text-gray-500 md:ms-3 dark:text-gray-800"
                    >
                      Necessary
                    </label>
                    <input
                      type="checkbox"
                      id="hs-cookies-necessary"
                      className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none  dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

              before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                      checked
                    />
                  </div>

                  <div className="flex items-center justify-between md:justify-start w-full">
                    <label
                      htmlFor="hs-cookies-preferences"
                      className="md:order-2 text-sm text-gray-500 md:ms-3 dark:text-gray-800"
                    >
                      Preferences
                    </label>
                    <input
                      type="checkbox"
                      id="hs-cookies-preferences"
                      className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none  dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

              before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                    />
                  </div>

                  <div className="flex items-center justify-between md:justify-start w-full">
                    <label
                      htmlFor="hs-cookies-statistics"
                      className="md:order-2 text-sm text-gray-500 md:ms-3 dark:text-gray-800"
                    >
                      Statistics
                    </label>
                    <input
                      type="checkbox"
                      id="hs-cookies-statistics"
                      className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none  dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

              before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                    />
                  </div>

                  <div className="flex items-center justify-between md:justify-start w-full">
                    <label
                      htmlFor="hs-cookies-marketing"
                      className="md:order-2 text-sm text-gray-500 md:ms-3 dark:text-gray-900"
                    >
                      Marketing
                    </label>
                    <input
                      type="checkbox"
                      id="hs-cookies-marketing"
                      className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none  dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

              before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- End Col --> */}

              <div className="col-span-full col-start-2 xl:col-start-5 xl:col-span-1">
                <button
                  type="button"
                  data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg"
                  className=" rounded-lg p-1.5  h-8 mb-6 text-white dark:text-_primary ml-auto dark:border flex items-center justify-center  w-8 focus:outline-none focus:ring-2 dark:border-_primary focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
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
                <div className="grid sm:grid-cols-3 xl:grid-cols-1 gap-y-2 sm:gap-y-0 sm:gap-x-5 xl:gap-y-2 xl:gap-x-0">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white dark:bg-_primary dark:hover:bg-secondary hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Allow all
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex justify-center dark:border_primary dark:text-_primary dark:border-_primary items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:hover:text-white dark:hover:bg-secondary   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Allow selection
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex dark:text-_primary dark:border-_primary justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900   dark:hover:text-white dark:hover:bg-secondary dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <Link href="/cookie-policy">Learn More</Link>{" "}
                  </button>
                </div>
              </div>
              {/* <!-- End Col --> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
