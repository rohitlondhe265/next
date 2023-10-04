"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/** Custom Hook */
import { PushAnswer, updateResult } from "../lib/hooks/setResult";
import { updateStatusAction } from "@/lib/redux/question_reducer";
import { useFetchQuestion } from "@/lib/hooks/FetchQuestion";

export default function Questions() {
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const [clicked, setClicked] = useState(undefined);
  const [givenans, setGivenans] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);

  // Current Question
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  const [options, setOptions] = useState();
  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions?.correct_answer,
          ...questions?.incorrect_answers,
        ])
    );
  }, [trace, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    dispatch(updateResult({ trace, givenans }));
  }, [givenans]);

  useEffect(() => {
    setClicked(undefined);
  }, [trace]);

  const handleChange = () => {
    if (result[trace]) {
      console.log("update");
      dispatch(updateResult({ trace, givenans }));
    }
    console.log("new");
    console.log(result)
    setClicked(res);
    setGivenans(res);
    dispatch(updateStatusAction(trace));
    dispatch(PushAnswer(givenans));
  };

  if (serverError) return <h1>Server Error</h1>;

  return (
    <div className="w-full flex flex-col items-center mt-6 space-y-6">
      <h2 className="text-muted text-lg font-semibold">
        <span className="text-primary">{trace + 1}. </span>
        {questions?.question}
      </h2>

      <ul className="space-y-3" key={questions?._id}>
        {options?.map((q, i) => {
          return (
            <li
              key={i}
              className={`flex gap-3 text-lg text-base bg-skin-on-fill shadow-md rounded-md p-3 `}
            >
              <input
                type="radio"
                value={false}
                className="hidden"
                name="options"
                id={`q${i}-option`}
                onChange={() => handleChange}
              />
              <label
                className={`flex items-center gap-3 cursor-pointer before:h-6 before:w-6 before:border-2 before:border-base before:rounded-full before:mr-3 ${
                  result[trace] == q || clicked == q
                    ? "before:bg-green-600 before:border-none"
                    : ""
                } `}
                htmlFor={`q${i}-option`}
              >
                {q}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
