"use client";

import { calculateResult } from "@/store/helpers";
import useQuizStore from "@/store/quizStore";
import useResultStore from "@/store/resultStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Timer() {
  const router = useRouter();
  const setResult = useResultStore((state) => state.setResult);
  const timer = useQuizStore((state) => state.timer);
  const questions = useQuizStore((state) => state.questions);
  const statusArr = useQuizStore((state) => state.statusArr);
  const [time, setTime] = useState(timer);

  const handleSubmit = () => {
    const result = calculateResult(questions, statusArr);
    const newScore = result.score;
    const newPercentage = result.percentage;
    const newTotalQuestions = result.totalQuestions;
    const newAttemptedQuestions = result.attemptedQuestions;
    const newAnswers = result.answers;
    const newIsQuizOver = true;
    setResult(
      newScore,
      newPercentage,
      newTotalQuestions,
      newAttemptedQuestions,
      newAnswers,
      newIsQuizOver
    );
    console.log(result);
    router.push("/examination/live/result");
  };
  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timerInterval);
      handleSubmit();
    }, timer * 1000);
  };
  useEffect(() => {
    startTimer();
  }, []);
  return (
    <div>
      <p>Time Left : {time}</p>
    </div>
  );
}
