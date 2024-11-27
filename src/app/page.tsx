import React from "react";
import FAQs from "@/components/ui-components/FAQs";
import Vision from "@/components/ui-components/home/Vision";

import ServiceDescription from "@/components/ui-components/services/ServiceDescription";
import Values from "@/components/ui-components/home/Values";
import ContactUs from "@/components/ui-components/ContactUs";
import { CarouselTransition } from "@/components/ui-components/home/Carousel";
import { Metadata } from "next";
import { headers } from "next/headers";

// export const metadata: Metadata = {
//   // title:'Home'
//   title: {
//     absolute: "Home",
//   },
// };

export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname = heads.get("next-url");
  return {
    title: {
      absolute: pathname || "Home",
    },
  };
}
export default function page() {
  return (
    <div className="w-full relative">
      <div
        // style={{ backgroundImage: `url(${bg.src})` }}
        className="relative space-y-10 w-full bg-contain"
      >
        <div className="  mx-auto">
          <CarouselTransition />
        </div>

        {/* <ServicesCatalogue /> */}
        <div className="relative  ">
          <div className="  smt-28 ">
            <ServiceDescription />
          </div>
          <div className="lg:flex">
            <Vision />
            <Values />
          </div>
          <FAQs />
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
