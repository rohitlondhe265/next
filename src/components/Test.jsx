'use client'
import { useSelector } from 'react-redux'

export default function Test() {
    const { trace } = useSelector(state => state.questions);
    console.log(trace)
    return (
        <div>Test</div>
    )
}