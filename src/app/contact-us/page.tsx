import ContactUs from "@/components/ui-components/ContactUs";
import { Metadata } from "next";
import { headers } from "next/headers";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname: any = heads.get("next-url");
  return {
    title: {
      absolute: "Contact Us",
    },
  };
}
export default function page() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}
