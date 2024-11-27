import PrivacyPolicy from "@/components/page-components/PrivacyPolicy";
import { Metadata } from "next";
import { headers } from "next/headers";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname: any = heads.get("next-url");
  return {
    title: {
      absolute: "Privacy Policy",
    },
  };
}

export default function page() {
  return (
    <div className="dark:bg-secondary">
      <PrivacyPolicy />
    </div>
  );
}
