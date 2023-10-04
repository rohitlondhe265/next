"use client";
import Exam from "./Exam";
import Result from "./Result";
import useQuizStore from "@/store/quizStore";

export default function page() {
  const isQuizOver = useQuizStore((state) => state.isQuizOver);
  const result = useQuizStore((state) => state.result);
  return <div>{isQuizOver ? result && <Result /> : <Exam />}</div>;
}
