'use client'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getServerData } from "./helper/helper";

/** redux actions */
import * as Action from '../redux/question_reducer'
import { apiUrl } from "../database/constants";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    const { category, set } = useSelector(state => state.result);
    const url = `${apiUrl}/questions?set=${set}&category=${category}`;

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));
        /** async function fetch backend data */
        (async () => {
            try {

                // const questions = await (await axios.get(url)).data
                const questions = await getServerData(url, (data) => data)

                let answers = [];
                questions.map((q) => {
                    answers.push(q.correct_answer);
                })

                if (questions.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: questions }));

                    const status = new Array(questions.length).fill(false);

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question: questions, answers, status }))

                } else {
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

export const UpdateStatus = (trace) => async (dispatch) => {
    try {
        dispatch(Action.updateStatusAction(trace));
    } catch (error) {
        console.log(error)
    }
}

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}