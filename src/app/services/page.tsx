import { servicesArray } from "@/assets/data";
import Card from "@/components/ui-components/services/Card";
import { Metadata } from "next";
import { headers } from "next/headers";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname: any = heads.get("next-url");
  return {
    title: {
      absolute: "Services",
    },
  };
}

export default function page() {
  return (
    <div className=" space-y-8 p-4 lg:p-8">
      <p className=" text-cyan-700 dark:text-_primary text-center font-bold sm:text-2xl line-clamp-2">
        Services
      </p>
      <div className="lg:grid grid-cols-2 space-y-20 lg:space-y-0 lg:p-10  gap-28">
        {servicesArray?.map(({ name, description, category, sections }, i) => (
          <Card key={i} data={{ name, description, category, sections }} />
        ))}
      </div>
    </div>
  );
}
