'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/** Custom Hook */
import { updateResult } from '../lib/hooks/setResult'
import { updateStatusAction } from '@/lib/redux/question_reducer'
import { useFetchQuestion } from '@/lib/hooks/FetchQuestion'

export default function Questions({ onChecked }) {

    const [{ isLoading, apiData, serverError }] = useFetchQuestion();

    const [givenans, setGivenans] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);

    // Current Question
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    const [options, setOptions] = useState()
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
    console.log(options)

    useEffect(() => {
        dispatch(updateResult({ trace, givenans }));
    }, [givenans])

    function onSelect(res) {
        onChecked(res)
        setGivenans(res)
        dispatch(updateResult({ trace, givenans }))
        dispatch(updateStatusAction(trace))
    }

    if (serverError) return (<h1>Server Error</h1>)

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className='text-light'>{questions?.question}</h2>

            <ul className='flex flex-col' key={questions?._id}>
                {
                    options?.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(q)}
                            />

                            <label className='mt-px inline-block pl-[0.15rem] hover:cursor-pointer' htmlFor={`q${i}-option`}>{q}</label>
                            <div className={`check ${result[trace] == q ? 'bg-green-600' : 'bg-red-500'}`}></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
