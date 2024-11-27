"use client";
import { useTriviaStore } from "@/context/store";
import React, { useState, useEffect } from "react";
export default function TriviaCard({
  trivia,
  shuffledAnswers,
  showResults,
  service,
  currentIndex,
  onSubmission,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { incrementTotalCorrect } = useTriviaStore();
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };
  useEffect(() => {}, [currentIndex]);
  useEffect(() => {
    setSelectedAnswer(null); // Reset selected answer when moving to the next card
  }, [currentIndex]);

  const isCorrect = selectedAnswer === trivia?.correctAnswer;

  return (
    <div className="  text-gray-300 dark:text-_primary rounded-md overflow-hidden  ">
      <div className="relative">
        <img
          className="w-full  rounded-2xl h-96 object-center object-cover"
          src={
            service?.image ||
            "https://img.freepik.com/free-vector/hand-drawn-question-mark-pattern_23-2149410462.jpg?size=626&ext=jpg&ga=GA1.1.153410477.1706677651&semt=sph"
          }
          alt="Product Image"
        />
        <a
          href="/contact-us"
          className="absolute  top-0 right-0  bg-gradient-to-r from-[#38B6FF] via-[#F663F6] to-[#B418B4] text-white px-2 py-1 m-2 rounded-md text-sm font-medium"
        >
          Get this Service
        </a>
      </div>
      <div className="lg:p-4 lg:px-0  ">
        {" "}
        <h3 className="text-lg font-medium mt-6 mb-2">
          Question {currentIndex + 1}
        </h3>
        <p
          className="text-gray-600 dark:text-secondary  text-sm mb-4"
          dangerouslySetInnerHTML={{ __html: trivia?.question }}
        ></p>
        {shuffledAnswers?.map((answer, index) => (
          <div
            key={index}
            onClick={() => handleAnswerSelection(answer)}
            className={`flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer ${
              selectedAnswer === answer ? "border-blue-500" : "border-white/10"
            } rounded-xl ${
              showResults && isCorrect && selectedAnswer === answer
                ? "bg-green-500/20"
                : ""
            } ${
              showResults && !isCorrect && answer === trivia?.correctAanswer
                ? "bg-red-500/20"
                : ""
            }`}
          >
            <input
              type="radio"
              value={answer}
              name={answer.toString()}
              className="w-6 h-6 bg-black"
              checked={selectedAnswer === answer}
              readOnly
            />
            <p
              className="ml-6 text-white dark:text-secondary "
              dangerouslySetInnerHTML={{ __html: answer }}
            ></p>
            {showResults && isCorrect && selectedAnswer === answer && (
              <span className="ml-auto text-green-500">✔</span>
            )}
            {showResults && !isCorrect && answer === trivia?.correctAnswer && (
              <span className="ml-auto text-red-500">✗</span>
            )}
          </div>
        ))}
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">Previous</span>
          {currentIndex === 9 && showResults ? (
            <a
              href="/quick-fun?category=websites"
              className="bg-blue-500 hover:bg-blue-600  font-bold py-2 px-4 rounded"
              disabled={showResults} // Disable the button during the results phase
            >
              Start Over
            </a>
          ) : (
            <button
              onClick={() => {
                onSubmission();
                if (isCorrect) {
                  incrementTotalCorrect();
                }
              }}
              className="bg-blue-500 hover:bg-blue-600  font-bold py-2 px-4 rounded"
              disabled={showResults} // Disable the button during the results phase
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
