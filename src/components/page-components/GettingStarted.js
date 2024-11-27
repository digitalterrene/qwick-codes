"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import WebsiteFeatures from "../ui-components/pricing/WebsiteFeatures";

import AppsFeatures from "../ui-components/pricing/AppsFeatures";
import EcommerceFeatures from "../ui-components/pricing/EcommerceFeatures";
import { useForm, ValidationError } from "@formspree/react";

export default function GettingStarted() {
  const searchParams = useSearchParams();
  const [service, setService] = useState(null);
  useEffect(() => {
    import("preline");
  }, []);
  const [state, handleSubmit] = useForm("xpzvqenv");

  useEffect(() => {
    // Extract the value of 'service' parameter from the URL query
    const Service = searchParams.get("service");
    const Package = searchParams.get("package");
    const OneTimeCost = searchParams.get("one-time-cost");
    const MonthlyCost = searchParams.get("monthly-cost");

    // Set the value of the hidden input field
    if (Service) {
      document.getElementById("Service").value = Service;
      setService(Service);
    }
    if (Package) {
      document.getElementById("Package").value = Package;
    }
    if (OneTimeCost) {
      document.getElementById("OneTimeCost").value = OneTimeCost;
    }
    if (MonthlyCost) {
      document.getElementById("MonthlyCost").value = MonthlyCost;
    }
  }, []);

  return (
    <div className="max-w-[75rem]    space-y-10 mx-auto">
      <div className="overflow-hidden ">
        <div className="relative">
          <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
            {" "}
            <div className="w-full h-14 pt-2 text-center     shadow overflow-hidden sm:rounded-md font-bold text-3xl text-white ">
              Getting Started
            </div>
            <div className="mt-10    md:mt-0 w-full">
              <form onSubmit={handleSubmit} className=" w-full bg-gray-40">
                <div className="shadow w-full  overflow-hidden sm:rounded-md">
                  <div className="px-2 py-80 sm:p-6">
                    <div className="w-full h-14 pt-2 text-center mb-4   text-gray-400  shadow overflow-hidden sm:rounded-md font-bold text-3xl ">
                      Package Selection
                    </div>{" "}
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number
                        >
                          <div className="w-full flex justify-between items-center gap-x-3">
                            <div>
                              <span className="block font-medium text-sm text-gray-800 dark:text-white">
                                Selected Service
                              </span>
                              <input
                                type="text"
                                disabled
                                className="text-blue-400 capitalize"
                                id="Service"
                                name="Service"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number
                        >
                          <div className="w-full flex justify-between items-center gap-x-3">
                            <div>
                              <span className="block font-medium text-sm text-gray-800 dark:text-white">
                                Selected Package
                              </span>
                              <input
                                type="text"
                                disabled
                                className="text-blue-400 capitalize"
                                id="Package"
                                name="Package"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number
                        >
                          <div className="w-full flex justify-between items-center gap-x-3">
                            <div>
                              <span className="block font-medium text-sm text-gray-800 dark:text-white">
                                One Time Cost (OTC)
                              </span>
                              <input
                                type="text"
                                disabled
                                className="text-blue-400 capitalize"
                                id="OneTimeCost"
                                name="OneTimeCost"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number
                        >
                          <div className="w-full flex justify-between items-center gap-x-3">
                            <div>
                              <span className="block font-medium text-sm text-gray-800 dark:text-white">
                                Monthly Cost
                              </span>
                              <input
                                type="text"
                                disabled
                                className="text-blue-400 capitalize"
                                id="MonthlyCost"
                                name="MonthlyCost"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow w-full   overflow-hidden sm:rounded-md">
                  <div className="max-w-4xl px-4 py-8 sm:px-6 lg:px-8   mx-auto">
                    <div className="w-full h-14 text-center pt-1 max-w-[100%] overflow-x-clip mb-5 text-gray-400  shadow overflow-hidden sm:rounded-md font-bold text-3xl ">
                      Customer Details
                    </div>{" "}
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                      <form>
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                          <div className="sm:col-span-3 items-center">
                            <label
                              htmlFor="af-account-full-name"
                              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                              Full name
                            </label>
                          </div>

                          <div className="sm:col-span-9">
                            <div className="sm:flex">
                              <input
                                id="customer-details-name"
                                type="text"
                                name="name"
                                required
                                className="p-3 pe-11 block w-full border border-gray-400 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10  focus:outline-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Name"
                              />
                              <input
                                type="text"
                                id="customer-details-surname"
                                name="surname"
                                required
                                className="p-3 pe-11 block w-full border border-gray-400 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10  focus:outline-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Surname"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="af-account-email"
                              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                              Email
                            </label>
                          </div>

                          <div className="sm:col-span-9">
                            <input
                              type="email"
                              id="customer-details-email"
                              name="email"
                              required
                              className=" p-3 pe-11 block w-full border border-gray-400 shadow-sm text-sm rounded-lg   focus:outline-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                              placeholder="example@site.com"
                            />
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="customer-details-city"
                              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                              Location
                            </label>
                          </div>

                          <div className="sm:col-span-9">
                            <div className="space-y-2">
                              <input
                                id="customer-details-city"
                                type="text"
                                name="city"
                                required
                                className="p-3 pe-11 block w-full border border-gray-400 shadow-sm rounded-lg text-sm focus:outline-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Johannesburg"
                              />
                              <input
                                type="text"
                                name="province"
                                id="customer-details-province"
                                className="p-3 pe-11 block w-full border-gray-400 border shadow-sm rounded-lg text-sm   focus:outline-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Gauteng"
                              />
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <div className="inline-block">
                              <label
                                htmlFor="customer-details-phone"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                              >
                                Phone
                              </label>
                            </div>
                          </div>

                          <div className="sm:col-span-9">
                            <div className="sm:flex">
                              <input
                                id="customer-details-phone"
                                type="text"
                                name="phone"
                                required
                                className=" p-3 pe-11 block w-full border border-gray-400 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:outline-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="xxx-xxx-xxxx"
                              />
                              <select className="py-2 px-3 pe-9 block w-full sm:w-auto border border-gray-400 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10   focus:outline-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                <option selected>Mobile</option>
                                <option>Home</option>
                                <option>Work</option>
                                <option>Fax</option>
                              </select>
                            </div>
                          </div>

                          <div className="sm:col-span-3">
                            <label
                              htmlFor="af-account-email"
                              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                              Company{" "}
                              <span className="text-xs text-gray-500">
                                (Optional)
                              </span>
                            </label>
                          </div>

                          <div className="sm:col-span-9">
                            <input
                              type="text"
                              id="customer-details-email"
                              name="email"
                              className=" p-3 pe-11 block w-full border border-gray-400 shadow-sm text-sm rounded-lg   focus:outline-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                              placeholder="Company Name"
                            />
                          </div>
                          <div className="sm:col-span-3">
                            <label
                              htmlFor="af-account-bio"
                              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                              Message
                            </label>
                          </div>

                          <div className="sm:col-span-9">
                            <textarea
                              id="af-account-bio"
                              className=" p-3 block w-full border-gray-400 rounded-lg text-sm focus:outline-green-600 border disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                              rows="6"
                              placeholder="Type your message..."
                            ></textarea>
                          </div>
                        </div>

                        <div className="mt-5 flex justify-end gap-x-2">
                          <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={state.submitting}
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </form>{" "}
              <div className="w-full border  rounded-2xl">
                <div className="bg-white rounded-t-2xl h-4" />
                {service === "application" && <AppsFeatures />}
                {service === "ecommerce" && <EcommerceFeatures />}
                {service !== "application" && service !== "ecommerce" && (
                  <WebsiteFeatures />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
