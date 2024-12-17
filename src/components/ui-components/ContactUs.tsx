"use client";
import { FaInstagram } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { TbCurrentLocation } from "react-icons/tb";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xpzvqenv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className=" text-white max-w-[90rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14  mx-auto">
      <div className="  mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-400 sm:text-4xl dark:text-_primary">
            Contact us
          </h1>
          <p className="mt-1 text-gray-300 dark:text-secondary">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center  lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col  bg-white/10 rounded-xl p-4 sm:p-6 lg:p-8 dark:bg-secondary dark:border-gray-700">
            <h2 className="mb-8 text-xl font-semibold  text-white">
              Fill in the form
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid  gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      id="name"
                      name="name"
                      className="py-3 text-gray-200 px-4 block w-full bg-white/10 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-800 dark:focus:ring-gray-600"
                      placeholder="First Name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label htmlFor="surname" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      id="surname"
                      name="surname"
                      className="py-3 text-gray-200 px-4 block w-full bg-white/10 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-800 dark:focus:ring-gray-600"
                      placeholder="Last Name"
                    />
                  </div>
                  <ValidationError
                    prefix="Surname"
                    field="surname"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    className="py-3 text-gray-200 px-4 block w-full bg-white/10 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-800 dark:focus:ring-gray-600"
                    placeholder="Email"
                  />{" "}
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="phone number" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    id="phone number"
                    name="phone number"
                    className="py-3 text-gray-200 px-4 block w-full bg-white/10 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-800 dark:focus:ring-gray-600"
                    placeholder="Phone Number"
                  />{" "}
                  <ValidationError
                    prefix="Phone Number"
                    field="phone number"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    id="subject"
                    name="subject"
                    className="py-3 text-gray-200 px-4 block w-full bg-white/10 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-800 dark:focus:ring-gray-600"
                    placeholder="Subject"
                  />{" "}
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={8}
                    className="py-3 px-4 text-gray-200 block bg-white/10 w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-800 dark:focus:ring-gray-600"
                    placeholder="Message"
                  ></textarea>{" "}
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Send inquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm dark:text-secondary text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            <div className="flex gap-x-7 py-6">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-_primary"
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
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-400 dark:text-_primary">
                  Email
                </h3>
                <p className="mt-1 text-sm dark:text-secondary text-gray-500 dark:text-secondary">
                  Use your enquiry as the subject
                </p>
                <a
                  className="mt-2 inline-flex items-center text-blue-500 gap-x-2 text-sm font-medium      dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  info@larrykingstone.com
                </a>
              </div>
            </div>

            <div className="flex gap-x-7 py-6">
              <LuPhoneCall className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-_primary" />
              <div className="grow">
                <h3 className="font-semibold text-gray-400 dark:text-_primary">
                  Phone Number
                </h3>
                <p className="mt-1 text-sm dark:text-secondary text-gray-500">
                  This contact is also avalable on WhatsApp
                </p>
                <a
                  className="mt-2 text-blue-500 inline-flex items-center gap-x-2 text-sm font-medium   hover:text-gray-800 dark:text-blue-800 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  +27 683 379 3865
                </a>
              </div>
            </div>

            <div className=" flex gap-x-7 py-6">
              <FaInstagram className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-_primary" />

              <div className="grow">
                <h3 className="font-semibold text-gray-400 dark:text-_primary">
                  Instagram
                </h3>
                <p className="mt-1 text-sm dark:text-secondary text-gray-500">
                  This is our name and instagram handle
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-blue-500 hover:text-gray-800 dark:text-blue-800 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  https://www.instagram.com/larry_kingstone
                </a>
              </div>
            </div>

            <div className=" flex gap-x-7 py-6">
              <TbCurrentLocation className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-_primary" />
              <div className="grow">
                <h3 className="font-semibold text-gray-400 dark:text-_primary">
                  Location
                </h3>
                <p className="mt-1 text-sm dark:text-secondary text-gray-500">
                  Contact us via phone for exact address{" "}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-blue-500 hover:text-gray-800 dark:text-blue-800 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Johannesburg, Gauteng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
