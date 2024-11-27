import FAQs from "@/components/ui-components/FAQs";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { Metadata } from "next";
import { headers } from "next/headers";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname: any = heads.get("next-url");
  return {
    title: {
      absolute: "Frequently Asked Questions",
    },
  };
}
export default function page() {
  return (
    <div>
      <FAQs />
    </div>
  );
}
