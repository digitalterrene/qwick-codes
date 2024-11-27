"use client";
import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <div>
      <Carousel aria-label="Next" transition={{ duration: 2 }} className=" ">
        <div
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1963481539.1704550986&semt=ais')`,
          }}
          className="md:h-[550px] h-[800px]  bg-cover bg-no-repeat flex items-center justify-center opacity-90 bg-_primary w-full object-cover"
        >
          <div className="flex  items-center justify-center">
            <div className="relative flex w-full md:max-w-[48rem] flex-row ssrounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/5 shrink-0 overflow-hidden ssrounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1963481539.1704550986&semt=sph"
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h6 className="mb-4 block  text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 ">
                  Web Development
                </h6>
                <h4 className="mb-2 block  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900  ">
                  Web Design & Development
                </h4>
                <p className="mb-8 block   text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Accelerate Your Online Presence: Qwik Codes offers Rapid
                  Website Development, propelling your brand with lightning-fast
                  websites. Our experts prioritize speed without compromising
                  quality, ensuring a swift and impactful online debut.
                </p>
                <a className="inline-block" href="#">
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/composing-email-digital-device_53876-163286.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1963481539.1704550986&semt=ais')`,
          }}
          className="md:h-[550px] h-[800px]  bg-cover bg-no-repeat flex items-center justify-center opacity-90  w-full object-cover"
        >
          <div className="flexv items-center justify-center">
            <div className="relative flex w-full md:max-w-[48rem] flex-row ssrounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/5 shrink-0 overflow-hidden ssrounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src="https://img.freepik.com/free-vector/inbox-cleanup-illustration-concept_114360-963.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1963481539.1704550986&semt=sph"
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h6 className="mb-4 block  text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 ">
                  Email services
                </h6>
                <h4 className="mb-2 block  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900  ">
                  Email Setup & Hosting
                </h4>
                <p className="mb-8 block   text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Effortless Communication: Simplify your communication needs
                  with Qwik Codes. Our Qwik Email Setup ensures swift, reliable,
                  and hassle-free email configuration for seamless connection
                  with clients and partners.Instant Setup. Tailored to You
                </p>
                <a className="inline-block" href="#">
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLiinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
        <div
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/website-hosting-concept-with-search-bar_23-2149406771.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1963481539.1704550986&semt=ais')`,
          }}
          className="md:h-[550px] h-[800px]   bg-cover bg-no-repeat flex items-center justify-center opacity-90 bg-_primary w-full object-cover"
        >
          <div className="flex  items-center justify-center">
            <div className="relative flex w-full md:max-w-[48rem] flex-row ssrounded-xl bg-white  bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/5 shrink-0    overflow-hidden ssrounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src="https://img.freepik.com/free-vector/www-concept-illustration_114360-2181.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1963481539.1704550986&semt=sph"
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 ">
                <h6 className="mb-4 block  text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 ">
                  Domains
                </h6>
                <h4 className="mb-2 block  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900  ">
                  Domain Setup & Management
                </h4>
                <p className="mb-8 block   text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Secure Global Recognition: Qwik Codes Speaking provides Domain
                  Registration services for global recognition. Establish your
                  online identity with a domain that reflects the essence of
                  your brand.Integrated Solutions. Strategic Advantage
                </p>
                <a className="inline-block" href="#">
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLiinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </Carousel>
    </div>
  );
}
