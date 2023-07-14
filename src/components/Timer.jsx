'use client'

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react'

const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));

    if (minutes <= 10) minutes - '0' + minutes;
    if (seconds <= 10) seconds - '0' + seconds;
    return minutes + ' : ' + seconds;
}

export default function Timer({ seconds }) {
    const [timer, setTimer] = useState(seconds);
    const router = useRouter();

    const timerId = useRef();

    useEffect(() => {
        timerId.current = setInterval(() => {
            setTimer((prev) => prev -= 1);
        }, 1000);

        return () => {
            clearInterval(timerId.current);
        }
    }, []);

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(timerId.current);
            router.push("/examination/result");
        }
    }, [timer])


    return (
        <h3>Time Left: {formatTime(timer)}</h3>
    )
}
