import { Metadata } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import React from "react";

const GettingStarted = dynamic(
  () => import("@/components/page-components/GettingStarted"),
  {
    ssr: false,
  }
);
export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname: any = heads.get("next-url");
  return {
    title: {
      absolute: "Getting Started",
    },
  };
}
export default function page() {
  return (
    <div>
      <GettingStarted />
    </div>
  );
}
