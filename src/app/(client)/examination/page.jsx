'use client'

import React, { useRef } from 'react'
import BtnPrimary from '@/components/BtnPrimary'

import { useDispatch } from 'react-redux'
import { setCategory, setSet, setUserId, setUserName } from '@/lib/redux/result_reducer'
import { useSession } from 'next-auth/react'

export default function Page() {

    const cat = ["Mpsc", "Upsc", "SSC"];
    const set = [1, 2, 3];
    const nameRef = useRef(null)
    const catRef = useRef(null)
    const setRef = useRef(null)
    const dispatch = useDispatch()
    const email = useSession().data?.user?.email;
    
    function startQuiz() {
        if (nameRef.current?.value && catRef.current?.value && setRef.current?.value) {
            dispatch(setUserId(email));
            dispatch(setUserName(nameRef.current?.value));
            dispatch(setCategory(catRef.current?.value));
            dispatch(setSet(setRef.current?.value));
        }
    }

    return (
        <div className='min-h-[33rem] flex flex-col items-center space-y-6 px-2 mt-9'>

            <h1 className="text-4xl text-center md:text-5xl font-bold">Start the Examination</h1>

            <div className='flex flex-col md:flex-row w-full justify-center gap-9'>
                <ol className='text-skin-muted md:w-1/3'>
                    <li>You will be asked 10 questions one after another.</li>
                    <li>10 points is awarded for the correct answer.</li>
                    <li>Each question has three options. You can choose only one options.</li>
                    <li>You can review and change answers before the quiz finish.</li>
                    <li>The result will be declared at the end of the quiz.</li>
                </ol>
                <div className='flex flex-col md:w-1/3 space-y-3'>
                    <input ref={nameRef} className="shadow border-none rounded-md w-full py-3 px-4 focus:outline-none focus:shadow-outline bg-skin-on-fill placeholder:text-skin-muted" type="text" placeholder='Display Name' />
                    <select ref={catRef} className="w-full bg-skin-on-fill py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-skin-on-fill focus:border-none placeholder:text-skin-muted">
                        <option hidden>Select the Category</option>
                        {cat.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                    </select>
                    <select ref={setRef} className="w-full bg-skin-on-fill py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-skin-on-fill focus:border-none placeholder:text-skin-muted">
                        <option hidden>Select the Set</option>
                        {set.map((s) => (<option key={s} value={s}>Set No: {s}</option>))}
                    </select>
                    <div className='mx-auto'>
                        <BtnPrimary onClick={startQuiz} href="/examination/live">Start Exam</BtnPrimary>
                    </div>
                </div>

            </div>

        </div>
    )
}
