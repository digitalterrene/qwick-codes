import React from "react";
import AppsFeatures from "./AppsFeatures";

export default function Apps() {
  return (
    <div>
      <div className="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
        <div className="flex flex-col bg-white border dark:bg-secondary border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
          <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
            Basic
          </h4>
          <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
            R5000<span className="text-sm">OTC</span>
          </span>
          <span className="mt-7 font-bold text-2xl text-gray-800 dark:text-gray-200">
            R1500<span className="text-sm">/pm</span>
          </span>
          <p className="mt-2 text-sm text-gray-500">
            Suitable for getting started
          </p>

          <a
            className="mt-5 hover:bg-blue-600 hover:text-white py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/getting-started?service=application&package=basic&one-time-cost=5000&monthly-cost=1500"
          >
            Get started
          </a>
        </div>

        <div className="flex flex-col bg-white dark:bg-secondary border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-violet-700">
          <p className="mb-3">
            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">
              Most popular
            </span>
          </p>
          <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
            Small Sized
          </h4>
          <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
            R7500<span className="text-sm">OTC</span>
          </span>
          <span className="mt-7 font-bold text-2xl text-gray-800 dark:text-gray-200">
            R2500<span className="text-sm">/pm</span>
          </span>
          <p className="mt-2 text-sm text-gray-500">
            Suitable for small businesses with tight budgets
          </p>

          <a
            className="mt-5 hover:bg-blue-600 hover:text-white py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/getting-started?service=application&package=small-sized&one-time-cost=7500&monthly-cost=2500"
          >
            Get started
          </a>
        </div>

        <div className="flex flex-col dark:bg-secondary bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
          <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
            Medium Sized
          </h4>
          <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
            R15000<span className="text-sm">OTC</span>
          </span>
          <span className="mt-7 font-bold text-2xl text-gray-800 dark:text-gray-200">
            R5000<span className="text-sm">/pm</span>
          </span>
          <p className="mt-2 text-sm text-gray-500">
            Suitable for medium sized business
          </p>

          <a
            className="mt-5 hover:bg-blue-600 hover:text-white py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/getting-started?service=application&package=medium-sized&one-time-cost=15000&monthly-cost=5000"
          >
            Get started
          </a>
        </div>

        <div className="flex flex-col dark:bg-secondary bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
          <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
            Enterprise
          </h4>
          <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
            R35000<span className="text-sm">OTC</span>
          </span>
          <span className="mt-7 font-bold text-2xl text-gray-800 dark:text-gray-200">
            R15000<span className="text-sm">/pm</span>
          </span>
          <p className="mt-2 text-sm text-gray-500">
            Suitable for enterprises planning to scale
          </p>
          <a
            className="mt-5 hover:bg-blue-600 hover:text-white py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/getting-started?service=application&package=enterprise&one-time-cost=35000&monthly-cost=15000"
          >
            Get started
          </a>
        </div>
      </div>
      {/* <!-- Comparison table --> */}
      <div className="lg:text-center my-10 lg:mt-40">
        <h3 className="text-2xl font-semibold dark:text-secondary text-gray-300">
          Compare plans
        </h3>
      </div>
      <div className=" border border-gray-300 mb-10 rounded-2xl ">
        <div className="h-4 rounded-t-xl w-full dark:bg-secondary bg-white"></div>

        {/* <!-- lg+ --> */}
        <AppsFeatures />
        {/* <!-- End lg+ --> */}
        <div className="h-4 rounded-b-xl w-full dark:bg-secondary bg-white"></div>
      </div>
      {/* <!-- End Comparison table --> */}
    </div>
  );
}
