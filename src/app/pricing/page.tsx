import Pricing from "@/components/page-components/Pricing";
import { Metadata } from "next";
import { headers } from "next/headers";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname: any = heads.get("next-url");
  return {
    title: {
      absolute: "Pricing",
    },
  };
}

export default function page() {
  return (
    <div>
      <Pricing />
    </div>
  );
}
