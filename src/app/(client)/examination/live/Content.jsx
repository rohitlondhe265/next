'use client'

import { useState } from 'react'
import { PushAnswer } from '@/lib/hooks/setResult';
import { MoveNextQuestion, MovePrevQuestion } from '@/lib/hooks/FetchQuestion';

import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation';
import Questions from '@/components/Questions';
import Timer from '@/components/Timer';

export default function Content() {

    const router = useRouter();
    const [givenans, setGivenans] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()

    /** next button event handler */
    function onNext() {
        if (trace < queue.length) {
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if (result.length <= trace) {
                dispatch(PushAnswer(givenans))
            }
        }

        /** reset the value of the checked variable */
        setGivenans(undefined)
    }

    /** Prev button event handler */
    function onPrev() {
        if (trace > 0) {
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }

    function onChecked(givenans) {
        setGivenans(givenans)
    }

    /** finished exam after the last question */
    if (result.length && result.length >= queue.length) {
        return router.push("/examination/result");
        // console.log('first')
    }

    return (
        <div className="md:w-4/5 w-full px-1 md:px-6">
            <div className="w-full h-full rounded border-dashed border-2 border-gray-300">

                {queue ? (
                    <main>
                        <div className="w-full flex justify-between uppercase">
                            <Timer seconds={600} />
                        </div>
                        <Questions onChecked={onChecked} />
                    </main>
                ) : (
                    <span className="loading loading-spinner text-primary">loading ...</span>
                )}

                <div className='flex justify-between'>
                    {trace > 0 ? <button className='bg-gray-400 text-slate-50 rounded-lg' onClick={onPrev}>Prev</button> : <button className='bg-gray-400 text-slate-50 rounded-lg' >Prev</button>}

                    <button className='bg-gray-400 text-slate-50 rounded-lg' onClick={onNext}>Next</button>
                </div>
            </div>
        </div>
    )
}
