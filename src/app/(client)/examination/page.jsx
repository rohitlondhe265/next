'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setCategory, setSet, setUserId, setUserName } from '@/lib/redux/result_reducer'
import { useSession } from 'next-auth/react'

export default function Page() {

    const nameRef = useRef(null)
    const catRef = useRef(null)
    const setRef = useRef(null)
    const dispatch = useDispatch()
    const email = useSession().data?.user?.email;

    function startQuiz() {
        if (nameRef.current?.value && catRef.current?.value && setRef.current?.value ) {
            dispatch(setUserId(email));
            dispatch(setUserName(nameRef.current?.value));
            dispatch(setCategory(catRef.current?.value));
            dispatch(setSet(setRef.current?.value));
        }
    }

    return (
        <div className='mt-6 mx-auto w-96 h-auto'>
            <h1 className="text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Quiz Application</h1>

            <ol>
                <li>You will be asked 10 questions one after another.</li>
                <li>10 points is awarded for the correct answer.</li>
                <li>Each question has three options. You can choose only one options.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form id="flex justify-center p-3 m-3">
                <input ref={nameRef} className="userid" type="text" placeholder='Display Name' />
                <input ref={catRef} className="userid" type="text" placeholder='Category Name' />
                <input ref={setRef} className="userid" type="text" placeholder='Set Number' />
            </form>

            <div className='mx-auto'>
                <Link className='btn' href="/examination/live" onClick={startQuiz}>Start Quiz</Link>
            </div>

        </div>
    )
}
