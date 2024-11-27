import React from "react";
import {
  BsBarChart,
  BsLightningCharge,
  BsLightningChargeFill,
} from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { HiOutlineCubeTransparent } from "react-icons/hi2";

export default function Banner() {
  return (
    <div className="dark:bg-secondary pb-10 ">
      <div className="aspect-w-16 aspect-h-7">
        {/* <!-- Hero --> */}
        <div className="relative overflow-hidden">
          <div className="  mx-auto  ">
            <div className="  relative ">
              <img
                alt="wordpress banner -Qwik Codes"
                className="  object-contain w-full  bg-no-repeat bg-center bg-cover "
                src="/images/wordpress banner.jpg"
              />
            </div>
          </div>
        </div>
        {/* <!-- End Hero --> */}
      </div>

      {/* <!-- Grid --> */}
      <div className="mt-5 max-w-[80rem] mx-auto lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-3 space-y-6">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-300 dark:text-gray-200">
            Why Choose Qwik Codes WordPress Hosting?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-1">
                <BsLightningCharge className="text-blue-600 text-2xl" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-300 dark:text-white">
                  Blazing Fast Performance
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our servers are optimized specifically for WordPress, ensuring
                  lightning-fast page load times and smooth performance for your
                  website visitors.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-1">
                <GrShieldSecurity className="text-blue-600 text-2xl" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-300 dark:text-white">
                  Enhanced Security Measures
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We take security seriously. Our WordPress hosting package
                  includes robust security features such as malware scanning,
                  DDoS protection, and regular backups to keep your website safe
                  from threats.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-1">
                <BsBarChart className="text-blue-600 text-2xl" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-300 dark:text-white">
                  Scalability
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Whether you're just starting out or experiencing rapid growth,
                  our WordPress hosting solution scales with your business
                  needs. From small blogs to large e-commerce sites, we've got
                  you covered.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-1">
                <HiOutlineCubeTransparent className="text-blue-600 text-2xl" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold text-gray-300 dark:text-white">
                  Expert Support
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our team of WordPress experts is available 24/7 to assist you
                  with any questions or concerns you may have. From
                  troubleshooting technical issues to providing advice on
                  optimization, we're here to help you succeed.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold  text-gray-300 dark:text-white">
                  Industry-leading documentation
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our documentation and extensive Client libraries contain
                  everything a business needs to build a custom integration.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="grow">
                <h3 className="text-lg font-semibold  text-gray-300 dark:text-white">
                  Designing for people
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We actively pursue the right balance between functionality and
                  aesthetics, creating delightful experiences.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
