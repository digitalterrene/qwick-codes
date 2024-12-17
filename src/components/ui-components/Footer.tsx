"use client";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { PiInstagramLogo } from "react-icons/pi";

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
                  className="hover:opacity-75 border rounded-lg p-0.5"
                  href="https://affordableweb.africa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <BiGlobe className="text-xl" />
                </a>
                <a
                  className="hover:opacity-75 border  rounded-lg p-0.5"
                  href="https://www.instagram.com/larry_kingstone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram className="text-xl" />
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
                  <a className="hover:opacity-75" href="/cookie-policy">
                    Cookie Policy
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-800 dark:text-gray-300">
            © 2024 Qwik Codes RSA
          </p>
        </div>
      </footer>
    </div>
  );
}
