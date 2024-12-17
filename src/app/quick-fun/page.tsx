import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import React from "react";

const Trivia = dynamic(() => import("@/components/page-components/Trivia"), {
  ssr: false,
});

export async function generateMetadata(): Promise<Metadata> {
  const heads = headers();
  const pathname: any = heads.get("next-url");
  return {
    title: {
      absolute: "Qwik Fun With Trivia ",
    },
  };
}

export default async function page({ searchParams }: any) {
  const category = searchParams.category;
  const qns = await fetchTrivia(category);
  return (
    <div>
      <Trivia qns={qns?.qns} />
    </div>
  );
}

async function fetchTrivia(category: string) {
  try {
    const apiUrl = `https://qwick-codes.vercel.app/api/trivia/${category}`;
    const response = await fetch(apiUrl, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });

    if (response.ok) {
      try {
        const text = await response.text();
        const json = text ? JSON.parse(text) : null;
        return { qns: json?.message };
      } catch (jsonError) {
        console.log("Error parsing JSON:", jsonError);
        return { qns: null };
      }
    }
  } catch (error: any) {
    console.log(error.message);
    return {};
  }
}
