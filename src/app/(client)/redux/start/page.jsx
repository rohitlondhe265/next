'use client'

import { updateResult } from '@/lib/hooks/setResult';
import { UpdateStatusTest, useFetchQestionTest } from '@/lib/hooks/test';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function page() {

    const [checked, setChecked] = useState(undefined)
    const { trace, status } = useSelector(state => state.questions);
    const { result, userName } = useSelector(state => state.result);
    const [{ isLoading, apiData, serverError }] = useFetchQestionTest()
    // console.log(apiData)
    // console.log(status)
    // console.log(userName)
    console.log(checked)
    console.log(result)

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResult({ trace, checked }))
    }, [checked])
    function onSelect(i) {
        setChecked(i)
        dispatch(updateResult({ trace, checked }))
        dispatch(UpdateStatusTest(trace))
    }
    return (
        <div className='questions'>
            <h1 className='text-3xl text-red-400'>{userName}</h1>
            <h2 className='text-light'>{questions?.question}</h2>

            <ul key={questions?.id}>
                {
                    questions?.incorrect_answers
                        .map((q, i) => (
                            <li key={i}>
                                <input
                                    type="radio"
                                    value={false}
                                    name="options"
                                    id={`q${i}-option`}
                                    onChange={() => onSelect(i)}
                                />

                                <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                                {/* <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div> */}
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}
