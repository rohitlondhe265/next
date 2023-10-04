"use client";

import { useEffect } from "react";
import { MoveNextQuestion, MovePrevQuestion } from "@/lib/hooks/FetchQuestion";

import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Questions from "@/components/Questions";
import Timer4 from "@/components/Time";

export default function Content() {
  const router = useRouter();

  const isSubmited = useSelector((state) => state.result.isSubmited);
  const trace = useSelector((state) => state.questions.trace);
  const dispatch = useDispatch();

  function onNext() {
    dispatch(MoveNextQuestion(true));
  }

  function onPrev() {
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  }

  useEffect(() => {
    console.log(isSubmited);
    if (isSubmited) {
      return router.push("/examination/result");
    }
  }, [isSubmited]);

  return (
    <div className="w-full h-full rounded border-dashed border-2 border-gray-300 p-2 md:p-6">
      <main>
        <div className="w-full flex justify-between uppercase">
          <div>Section: 1_General Knoledge</div>
          <Timer4 seconds={60 * 2} />
        </div>
        <Questions />
      </main>

      <div className="flex justify-between text-skin-btn-text">
        <button
          className="bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8"
          onClick={onPrev}
        >
          Prev
        </button>

        <button
          className="bg-skin-button-accent hover:bg-opacity-70 shadow-sm flex items-center justify-center px-4 py-3 border border-transparent font-medium rounded-md sm:px-8"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
