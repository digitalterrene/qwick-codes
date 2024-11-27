"use client";
import React, { useState } from "react";
import Banner from "../ui-components/wordpress-hosting/Banner";
import Image from "next/image";
import { BsGlobe, BsPlug, BsShopWindow } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { AiOutlineBlock } from "react-icons/ai";
import {
  MdManageAccounts,
  MdOutlineMailOutline,
  MdOutlineOndemandVideo,
  MdOutlinePayment,
} from "react-icons/md";
import {
  IoCalendarClearOutline,
  IoLanguageOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { LiaToolsSolid } from "react-icons/lia";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

export default function WordpressHosting() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <Banner />
      {/* <!-- Icon Blocks --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-300 dark:text-_primary">
          Integrations
          {/* <span className="text-blue-500">Our Promise</span> */}
        </h1>
        <div className="grid sm:grid-cols-2 mt-10 lg:grid-cols-3 items-start gap-2">
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <BsPlug className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                {" "}
                Custom Plugin Creation
              </h3>
              <p className="mt-1 text-gray-600 dar dark:hover:text-white dark:text-secondary">
                Qwik Codes offers the option to create custom plugins tailored
                to the specific needs and requirements of clients' WordPress
                websites, enabling them to add unique features and
                functionalities.
              </p>
              {/* <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
                Learn more
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span> */}
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <FiDatabase className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                External Database Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Integrate external databases seamlessly with WordPress websites,
                allowing for the storage and retrieval of data from external
                sources, enhancing flexibility and scalability.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <BsGlobe className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                External Webapp/Website Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Incorporate external web applications or websites into WordPress
                websites, enabling seamless integration and interaction between
                different platforms.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <RiRobot2Line className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                AI Chatbot Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Integrate AI-powered chatbots into WordPress websites to provide
                instant customer support, answer queries, and enhance user
                engagement and satisfaction.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <AiOutlineBlock className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                AI Web Builder Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Integrate AI-driven website builders to automate and streamline
                the website development process, enabling clients to create
                professional-looking websites with minimal effort.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */} {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <MdOutlineMailOutline className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                Email Marketing Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Integrate email marketing services like Mailchimp, Constant
                Contact, or Sendinblue to manage and grow subscriber lists, send
                targeted email campaigns, and track performance directly from
                the WordPress dashboard.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <BsShopWindow className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                E-commerce Platforms Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Seamlessly integrate popular e-commerce platforms such as
                WooCommerce, Shopify, or Magento into WordPress websites,
                enabling online selling capabilities and streamlined management
                of products and orders.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <IoShareSocialOutline className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                Social Media Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Connect WordPress websites with social media platforms such as
                Facebook, Twitter, Instagram, and LinkedIn to facilitate content
                sharing, increase social engagement, and expand online presence.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <MdManageAccounts className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                CRM Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Integrate CRM systems like HubSpot, Salesforce, or Zoho CRM to
                manage leads, contacts, and customer interactions efficiently,
                enabling personalized communication and relationship-building
                efforts.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <MdOutlinePayment className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                Payment Gateway Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Enable secure online transactions by integrating popular payment
                gateways such as PayPal, Stripe, or Authorize.Net, allowing
                clients to accept payments for products or services on their
                WordPress websites.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <LiaToolsSolid className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                SEO Tools Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Integrate SEO tools like Yoast SEO, SEMrush, or Moz to optimize
                WordPress websites for search engines, improve organic traffic,
                and enhance online visibility through keyword analysis, on-page
                optimization, and performance tracking.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <TbBrandGoogleAnalytics className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                Analytics Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Connect WordPress websites with analytics platforms such as
                Google Analytics, Adobe Analytics, or Matomo (formerly Piwik) to
                track visitor behavior, monitor website performance, and gain
                valuable insights into audience demographics and preferences.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <MdOutlineOndemandVideo className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                Video Hosting Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Integrate with video hosting platforms like YouTube, Vimeo, or
                Wistia to embed videos seamlessly into WordPress websites,
                enhancing multimedia content and engaging users with visual
                storytelling.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <IoCalendarClearOutline className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                Calendar Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Sync WordPress websites with calendar platforms such as Google
                Calendar, Outlook Calendar, or Apple Calendar to display events,
                appointments, or schedules directly on the site, facilitating
                organization and communication with visitors.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
          {/* <!-- Icon Block --> */}
          <a
            className="group flex flex-col justify-center hover:bg-gray-50 dark:hover:bg-secondary dark:hover:text-gray-300 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <IoLanguageOutline className="text-white text-2xl" />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-400 dark:text-_primary dark:group-hover:text-gray-400">
                Multi-language Integration
              </h3>
              <p className="mt-1 text-gray-600 dark:hover:text-white dark:text-secondary">
                Integrate multi-language plugins like WPML (WordPress
                Multilingual Plugin) or Polylang to create multilingual websites
                and cater to a global audience effectively, enabling seamless
                translation and localization of content for different language
                speakers.
              </p>
            </div>
          </a>
          {/* <!-- End Icon Block --> */}
        </div>
      </div>
      {/* <!-- End Icon Blocks --> */}
      <div className="overflow-hidden  ">
        <div className="max-w-[85rem] lg:flex mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mx-auto mb-10 lg:mb-0 w-fit">
            <Image
              alt="Wordpress Dashboard -Qwik Codes"
              width={500}
              height={300}
              className="rounded-xl"
              src={"/images/Wordpress Dashboard -Qwik Codes.png"}
            />
          </div>
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            {/* <!-- Title --> */}
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-_primary">
                Small business solutions
              </p>
              <h1 className="text-3xl text-gray-500 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-_primary">
                The word's best <br />
                <span className="text-blue-500">CMS</span>
              </h1>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Avatar Group --> */}
            <div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
              <div className="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
                {/* <!-- Avatar Group --> */}
                <div className="flex justify-center -space-x-3">
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <span className="inline-flex items-center justify-center size-8 rounded-full ring-2 ring-white bg-gray-800 dark:bg-gray-900 dark:ring-gray-800">
                    <span className="text-xs font-medium leading-none text-white uppercase">
                      7k+
                    </span>
                  </span>
                </div>
                {/* <!-- End Avatar Group --> */}
              </div>

              <div className="border-t sm:border-t-0 sm:border-s border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0"></div>

              <div className="pt-5 sm:pt-0 sm:ps-5">
                <div className="text-lg font-semibold text-gray-400 dark:text-_primary">
                  Trust pilot
                </div>
                <div className="text-sm text-gray-500">
                  3.5 Stars 37k reviews
                </div>
              </div>
            </div>
            {/* <!-- End Avatar Group --> */}

            {/* <!-- Form --> */}
            <form>
              <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                  <label
                    htmlFor="hs-hero-name-1"
                    className="block text-sm font-medium dark:text-_primary"
                  >
                    <span className="sr-only">Your name</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="hs-hero-name-1"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:hover:text-white dark:text-secondary dark:focus:ring-gray-600"
                    placeholder="Your name"
                  />
                </div>
                <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s sm:flex-[1_0_0%] dark:border-gray-700">
                  <label
                    htmlFor="hs-hero-email-1"
                    className="block text-sm font-medium dark:text-_primary"
                  >
                    <span className="sr-only">Your email address</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="hs-hero-email-1"
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:hover:text-white dark:text-secondary dark:focus:ring-gray-600"
                    placeholder="Your email"
                  />
                </div>
                <div className="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
                  <a
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href={`/contact-us?name=${name}&email=${email}`}
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
