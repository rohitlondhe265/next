"use client";

import { calculateResult } from "@/store/helpers";
import useQuizStore from "@/store/quizStore";
import useResultStore from "@/store/resultStore";
import { useRouter } from "next/navigation";

export default function SubmitExam() {
  const router = useRouter();
  const setResult = useResultStore((state) => state.setResult);
  const questions = useQuizStore((state) => state.questions);
  const statusArr = useQuizStore((state) => state.statusArr);
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
  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
