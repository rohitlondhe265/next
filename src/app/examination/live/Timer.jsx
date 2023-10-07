"use client";
import { submitExam } from "@/store/actions";
import useQuizStore from "@/store/quizStore";
import useResultStore from "@/store/resultStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Timer() {
  const router = useRouter();
  const timer = useQuizStore((state) => state.timer);
  const [time, setTime] = useState(timer);

  useEffect(() => {
    let timerInterval; // Define the timerInterval variable here

    const startTimer = () => {
      timerInterval = setInterval(() => {
        setTime((prev) => prev - 1); // Decrease time by 1 second
      }, 1000);

      setTimeout(() => {
        clearInterval(timerInterval);
        submitExam(router);
      }, timer * 1000);
    };

    startTimer();

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <p>Time Left : {time}</p>
    </div>
  );
}
