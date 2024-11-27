import React from "react";

export default function page() {
  return (
    <div className="  ">
      <div className="  max-w-[80rem] mx-auto  rounded-xl   dark:shadow-black/[.7]">
        <div className="p-4 md:p-6  overflow-x-hidden overflow-y-auto">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-400 dark:text-_primary">
            Allow the use of cookies?
          </h2>

          <p className="mt-3 text-sm text-gray-600 dark:text-_primary">
            At Qwik Codes, we value your privacy and strive to ensure a
            transparent and secure browsing experience on our website. This
            Cookie Policy outlines how we use cookies and similar tracking
            technologies and your options regarding their use.
          </p>

          <h6 className=" font-semibold mt-4 text-blue-600 dark:text-_primary">
            What Are Cookies?
          </h6>

          <p className=" text-sm text-gray-600 dark:text-_primary">
            Cookies are small text files that are stored on your device
            (computer, tablet, smartphone) when you visit a website. They
            contain information about your browsing preferences and activities
            and are used to enhance your browsing experience and provide
            personalized content and services.
          </p>

          <div className="mt-5 divide-y divide-gray-200 dark:divide-gray-700">
            {/* <!-- Collapse --> */}
            <div className="py-4 first:pt-0 last:pb-0">
              <button
                type="button"
                className="hs-collapse-toggle flex w-full text-blue-600 justify-between items-center gap-x-5 font-semibold   dark:text-_primary"
                id="hs-essential-cookie-collapse"
                data-hs-collapse="#hs-essential-cookie-collapse-heading"
              >
                Essential cookies
                <svg
                  className="hs-collapse-open:rotate-180 flex-shrink-0 size-4"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                id="hs-essential-cookie-collapse-heading"
                className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-essential-cookie-collapse"
              >
                <p className="mt-2 text-sm text-gray-600 dark:text-_primary">
                  These cookies are necessary for the operation of our website.
                  They enable core functionalities such as navigating between
                  pages, accessing secure areas of the site, and making
                  transactions. Without these cookies, our website may not
                  function properly.
                </p>
              </div>
            </div>
            {/* <!-- End Collapse --> */}

            {/* <!-- Collapse --> */}
            <div className="py-4 first:pt-0 last:pb-0">
              <button
                type="button"
                className="hs-collapse-toggle flex w-full justify-between items-center gap-x-5 font-semibold text-blue-600 dark:text-_primary"
                id="hs-optional-cookie-collapse"
                data-hs-collapse="#hs-optional-cookie-collapse-heading"
              >
                Optional cookies
                <svg
                  className="hs-collapse-open:rotate-180 flex-shrink-0 size-4"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                id="hs-optional-cookie-collapse-heading"
                className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-optional-cookie-collapse"
              >
                <p className="mt-2 text-sm text-gray-600 dark:text-_primary">
                  Optional cookies enhance your browsing experience and help us
                  improve our website by collecting information about how you
                  interact with it. These cookies include the following
                </p>

                <p className="mt-2 text-sm text-gray-600 dark:text-_primary">
                  Analytics cookies gather data about your usage of our website,
                  such as which pages you visit and how long you spend on each
                  page. This information helps us analyze website traffic,
                  identify trends, and make improvements to the user experience.
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-_primary">
                  Personalization cookies remember your preferences, such as
                  language or region settings, to provide you with a more
                  personalized browsing experience. They enable us to tailor
                  content and services to your individual needs and interests.
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-_primary">
                  Advertising cookies track your browsing habits and interests
                  to provide you with targeted advertisements that may be of
                  interest to you. These cookies are used by third-party
                  advertisers and ad networks to deliver relevant ads based on
                  your online behavior.
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-_primary">
                  Social media cookies allow you to share content from our
                  website on social media platforms and interact with embedded
                  social media features. They may also collect data about your
                  social media activity for advertising purposes.
                </p>
              </div>
            </div>
            {/* <!-- End Collapse --> */}
          </div>

          <h6 className=" font-semibold mt-4 text-blue-600 dark:text-_primary">
            Your Cookie Choices
          </h6>

          <p className=" text-sm text-gray-600 dark:text-_primary">
            You have the option to accept or decline cookies when you visit our
            website. Most web browsers automatically accept cookies, but you can
            modify your browser settings to block or delete cookies if you
            prefer. However, please note that blocking or deleting cookies may
            affect your browsing experience and limit the functionality of
            certain features on our website.
          </p>
          <h6 className=" font-semibold mt-4 text-blue-600 dark:text-_primary">
            Managing Cookies
          </h6>

          <p className=" text-sm text-gray-600 dark:text-_primary">
            You can manage your cookie preferences through your browser
            settings. Each browser provides different options for managing
            cookies, so please refer to your browser's help menu for
            instructions on how to adjust your cookie settings.
          </p>
          <h6 className=" font-semibold mt-4 text-blue-600 dark:text-_primary">
            Updates to this Policy
          </h6>

          <p className=" text-sm text-gray-600 dark:text-_primary">
            We may update this Cookie Policy periodically to reflect changes in
            our practices or in response to regulatory requirements. Any updates
            will be posted on this page, and we encourage you to review this
            policy regularly for the latest information.
          </p>
        </div>
      </div>
    </div>
  );
}
