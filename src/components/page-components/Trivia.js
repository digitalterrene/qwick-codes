"use client";
import React, { useEffect, useState } from "react";
import { useTriviaStore } from "@/context/store";
import TriviaCard from "../ui-components/TriviaCard";
import { servicesArray } from "@/assets/data";
import Card from "../ui-components/services/Card";
import { usePathname, useRouter } from "next/navigation";

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Trivia({ qns }) {
  const [services, setServices] = useState(shuffleArray(servicesArray));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  console.log(qns);
  const { totalCorrect } = useTriviaStore();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    import("preline");
  }, []);
  useEffect(() => {
    if (showResults && currentIndex < qns?.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setShowResults(false);
      }, 3000); // 3 seconds delay
      return () => clearTimeout(timer);
    } else if (currentIndex === qns?.length - 1) {
      // If it reaches the end of the list, calculate and show the total score
      const correctAnswers = qns?.filter(
        (qn, index) => qn.selectedAnswer === qn.correctAnswer
      );
    }
  }, [showResults, currentIndex, qns]);

  const handleSubmission = (selectedAnswer) => {
    setShowResults(true);
    if (currentIndex === qns?.length + 1) {
    }
  };

  const currentQuestion = qns?.[currentIndex];
  const shuffledAnswers = currentQuestion
    ? shuffleArray([...currentQuestion?.options])
    : [];

  return (
    <div className="text-gray-300   lg:p-10">
      <p className="text-cyan-700 dark:text-_primary  mb-6 text-center font-bold sm:text-2xl line-clamp-2">
        Trivia
      </p>
      <nav
        className="relative  md:w-2/3 w-full  flex border lg:w-1/2 mx-auto   bg-blue-500 rounded-2xl overflow-hidden dark:border-gray-700"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          onClick={() => {
            router.push(pathname + `?category=websites`);
          }}
          className="hs-tab-active:border-blue-600 hs-tab-active:bg-blue-500 hs-tab-active:text-white dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-2 md:px-4 text-gray-500 hover:text-gray-700 text-xs md:text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400 active"
          id="bar-with-underline-item-1"
          data-hs-tab="#bar-with-underline-1"
          aria-controls="bar-with-underline-1"
          role="tab"
        >
          Websites
        </button>
        <button
          type="button"
          onClick={() => {
            router.push(pathname + `?category=ecommerce`);
          }}
          className="hs-tab-active:border-blue-600 hs-tab-active:bg-blue-500 hs-tab-active:text-white dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-2 md:px-4 text-gray-500 hover:text-gray-700 text-xs md:text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
          id="bar-with-underline-item-2"
          data-hs-tab="#bar-with-underline-2"
          aria-controls="bar-with-underline-2"
          role="tab"
        >
          E-commerce
        </button>
        <button
          type="button"
          onClick={() => {
            router.push(pathname + `?category=applications`);
          }}
          className="hs-tab-active:border-blue-600 text-xs hs-tab-active:bg-blue-500 hs-tab-active:text-white dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-2 md:px-4 text-gray-500 hover:text-gray-700 md:text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
          id="bar-with-underline-item-3"
          data-hs-tab="#bar-with-underline-3"
          aria-controls="bar-with-underline-3"
          role="tab"
        >
          Web Applications
        </button>
      </nav>

      <div className="mt-3 px-6">
        <div
          id="bar-with-underline-1"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1"
        >
          <div>
            <div className="lg:grid    grid-cols-2 lg:gap-10 justify-between p-4 lg:p-8">
              <div className="pt-12 space-y-6">
                <p className="text-gray-300 dark:text-_primary ">
                  {" "}
                  Cant's see the Question? Reload page
                </p>

                {currentIndex < qns?.length && (
                  <TriviaCard
                    key={currentIndex}
                    service={services[currentIndex]}
                    trivia={currentQuestion}
                    shuffledAnswers={shuffledAnswers}
                    showResults={showResults}
                    currentIndex={currentIndex}
                    onSubmission={handleSubmission}
                  />
                )}
              </div>
              <div className="  ">
                {currentIndex === qns?.length - 1 && (
                  <div className="  text-end w-full font-bold text-lg mt-4">
                    Total Correct: {totalCorrect} out of {qns?.length}
                  </div>
                )}
                <div className=" ">
                  <Card data={services[currentIndex]} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bar-with-underline-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-2"
        >
          <div>
            <div className="lg:grid    grid-cols-2 lg:gap-10 justify-between p-4 lg:p-8">
              <div className="pt-12 space-y-6">
                <p className="text-gray-300">
                  {" "}
                  Cant's see the Question? Reload page
                </p>

                {currentIndex < qns?.length && (
                  <TriviaCard
                    key={currentIndex}
                    service={services[currentIndex]}
                    trivia={currentQuestion}
                    shuffledAnswers={shuffledAnswers}
                    showResults={showResults}
                    currentIndex={currentIndex}
                    onSubmission={handleSubmission}
                  />
                )}
              </div>
              <div className="  ">
                {currentIndex === qns?.length - 1 && (
                  <div className="  text-end w-full font-bold text-lg mt-4">
                    Total Correct: {totalCorrect} out of {qns?.length}
                  </div>
                )}
                <div className=" ">
                  <Card data={services[currentIndex]} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="bar-with-underline-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-3"
        >
          <div>
            <div className="lg:grid    grid-cols-2 lg:gap-10 justify-between p-4 lg:p-8">
              <div className="pt-12 space-y-6">
                <p className="text-gray-300">
                  {" "}
                  Cant's see the Question? Reload page
                </p>

                {currentIndex < qns?.length && (
                  <TriviaCard
                    key={currentIndex}
                    service={services[currentIndex]}
                    trivia={currentQuestion}
                    shuffledAnswers={shuffledAnswers}
                    showResults={showResults}
                    currentIndex={currentIndex}
                    onSubmission={handleSubmission}
                  />
                )}
              </div>
              <div className=" ">
                {currentIndex === qns?.length - 1 && (
                  <div className="  text-end w-full font-bold text-lg mt-4">
                    Total Correct: {totalCorrect} out of {qns?.length}
                  </div>
                )}
                <div className=" ">
                  <Card data={services[currentIndex]} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
