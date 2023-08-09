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
            <div className="w-full h-full rounded border-dashed border-2 border-gray-300 p-2 md:p-6">

                <main>
                    <div className="w-full flex justify-between uppercase">
                        <Timer seconds={600} />
                    </div>
                    <Questions onChecked={onChecked} />
                </main>

                <div className='flex justify-between text-skin-btn-text'>
                    <button className='bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8' onClick={onPrev}>Prev</button>

                    <button className='bg-skin-button-accent hover:bg-opacity-70 shadow-sm flex items-center justify-center px-4 py-3 border border-transparent font-medium rounded-md sm:px-8' onClick={onNext}>Next</button>
                </div>
            </div>
    )
}
