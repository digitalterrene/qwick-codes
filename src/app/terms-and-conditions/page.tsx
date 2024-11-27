import TermsAndConditions from "@/components/page-components/TermsAndConditions";
import { Metadata } from "next";
import { headers } from "next/headers";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname: any = heads.get("next-url");
  return {
    title: {
      absolute: "Terms and Conditions",
    },
  };
}

export default function page() {
  return (
    <div className="dark:bg-secondary">
      <TermsAndConditions />
    </div>
  );
}
