"use client";

import { setSubmit } from "@/lib/redux/result_reducer";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const Timer4 = ({ seconds }) => {
  const [countDownTime, setCountDownTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const secondTimer = useRef(null);

  const dispatch = useDispatch();

  const getTimeDifference = (countDownSeconds) => {
    const hours = Math.floor(countDownSeconds / 3600);
    const remainingSeconds = countDownSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    if (countDownSeconds <= 0) {
      if (secondTimer.current) {
        secondTimer.current.className = "relative top-5";
      }
      setCountDownTime({
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      if (secondTimer.current) {
        secondTimer.current.className = "";
        secondTimer.current.className = "animate-timer";
      }
      setCountDownTime({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    let countDownSeconds = 60*3; //60 secs
    setInterval(() => {
      if (countDownSeconds == 0) {
        dispatch(setSubmit());
      }
      getTimeDifference(countDownSeconds);
      countDownSeconds--;
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex items-center gap-2 justify-center text-base px-3 md:px-6 h-fit w-fit">
      <div className="md:text-2xl text-lg">{countDownTime?.hours} :</div>
      <div className="md:text-2xl text-lg">{countDownTime?.minutes} :</div>
      <div className="md:text-2xl text-lg">{countDownTime?.seconds}</div>
    </div>
  );
};

export default Timer4;
