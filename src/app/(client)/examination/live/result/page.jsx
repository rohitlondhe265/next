"use client";
import useQuizStore from "@/store/quizStore";
import Result from "./Result";
import useResultStore from "@/store/resultStore";

export default function page() {
  const q = useQuizStore()
  const r = useResultStore()
  console.log(q)
  console.log(r)
  return (
    <div>
      <Result />
    </div>
  );
}
