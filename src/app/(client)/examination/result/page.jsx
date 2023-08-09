'use client'

import ResultTable from '@/components/ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number, earnPoints_Number, flagResult } from '@/lib/hooks/helper/helper';

/** import actions  */
import { resetAllAction } from '@/lib/redux/question_reducer';
import { resetResultAction } from '@/lib/redux/result_reducer';
import { usePublishResult } from '@/lib/hooks/setResult';
import BtnPrimary from '@/components/BtnPrimary';

export default function Result() {

    const dispatch = useDispatch()
    const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state)

    console.log(result)
    console.log(answers)
    console.log(queue)

    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)

    console.log(totalPoints)
    console.log(attempts)
    console.log(earnPoints)
    console.log(flag)

    /** store user result */
    // usePublishResult({
    //     result,
    //     username: userId,
    //     attempts,
    //     points: earnPoints,
    //     achived: flag ? "Passed" : "Failed"
    // });

    function onRestart() {
        console.log("Restart")
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    return (
        <div className='relative mx-auto max-w-3xl min-h-screen'>

            {/* <h1 className="text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">A Guide to Adding Gradients</h1> */}
            <h1 className="text-4xl md:text-5xl text-center p-4 font-bold">Examination Result</h1>

            <div className='result flex flex-col justify-center border border-red-300 p-6'>
                <div className='flex justify-between'>
                    <span>Username</span>
                    <span className='bold'>{userId || ""}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Total Examination Points : </span>
                    <span className='bold'>{totalPoints || 0}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Total Questions : </span>
                    <span className='bold'>{queue.length || 0}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Total Questions Attempted : </span>
                    <span className='bold'>{attempts || 0}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Marks Obtained : </span>
                    <span className='bold'>{earnPoints || 0}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Performance</span>
                    <span className='bold'>{flag ? "Passed" : "Failed"}</span>
                </div>

                <div className='mt-6 mx-auto'>
                    <BtnPrimary href="/examination" onClick={onRestart}>Restart</BtnPrimary></div>
            </div>


            <div className="my-9">
                <ResultTable></ResultTable>
            </div>
        </div>
    )
}
