'use client'

import { useRef } from 'react'
import { setUserName } from "@/lib/redux/result_reducer"
import Link from "next/link"
import { useDispatch } from "react-redux"

export default function page() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const onStart = () => {
        if (inputRef.current?.value) {
            console.log(inputRef.current?.value)
            dispatch(setUserName(inputRef.current?.value))
        }

    }
    return (
        <div>
            <input className="p-3 bg-slate-300 placeholder:text-blue-400" placeholder='Enter Name' type="text" ref={inputRef} />
            <Link href="/redux/start" className="bg-blue-600 text-white p-3" onClick={onStart}>Start Exam</Link>
        </div>
    )
}
