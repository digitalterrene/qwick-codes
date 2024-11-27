"use client";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Banner() {
  const [location, setLocation] = useState("south africa");
  const [phoneNumber, setPhoneNumber] = useState("+27 683 379 3865");
  const pathname = usePathname();
  const updateContactInfo = () => {
    switch (location) {
      case "United States":
        setPhoneNumber("+1 202 555 1234");
        break;

      default:
        setPhoneNumber("+27 683 379 3865");
        break;
    }
  };
  useEffect(() => {
    updateContactInfo();
  }, [location]);
  return (
    <>
      {pathname === "/" && (
        <div
          id="ab-full-width-with-dismiss-button-on-blue-bg"
          className="hs-removing:-translate-y-full bg-blue-600/20 dark:bg-[#082040]"
        >
          <div className="max-w-[85rem] px-1 py-1    mx-auto">
            <div className="flex justify-between itemse-center ">
              <div className="lg:flex items-center">
                <p className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg font-medium text-white   focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm">
                  Location
                </p>
                <span className="inline-block border-e border-white/[.3] w-px h-5 mx-2"></span>
                <Menu>
                  <MenuHandler>
                    <Button
                      className="py-2 font-primary text-sm font-medium capitalize bg-transparent shadow-none"
                      placeholder={"location"}
                    >
                      {location}
                    </Button>
                  </MenuHandler>
                  <MenuList
                    className="font-primary font-medium"
                    placeholder="location-options"
                  >
                    <MenuItem
                      onClick={() => setLocation("South Africa")}
                      placeholder={"location"}
                    >
                      South Africa
                    </MenuItem>

                    <MenuItem
                      onClick={() => setLocation("United States")}
                      placeholder={"location"}
                    >
                      United States
                    </MenuItem>
                    <MenuItem
                      onClick={() => setLocation("Other")}
                      placeholder={"location"}
                    >
                      Other
                    </MenuItem>
                  </MenuList>
                </Menu>
                <div className="lg:flex lg:ml-10 ml-2 text-sm items-center gap-10">
                  <p className="text-blue-50 flex items-center gap-2  text-center">
                    <FaPhoneAlt className="text-green-300" />
                    {phoneNumber}
                  </p>
                  <p className="text-blue-50 flex items-center gap-2  text-center">
                    <MdEmail className="text-lg text-green-300" />
                    {`sales.${location.replace(" ", "")}@qcodes.com`}
                  </p>
                </div>
              </div>

              <div className="ps-3 ms-auto">
                <button
                  type="button"
                  className="inline-flex rounded-lg p-1.5 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                  data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg"
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
