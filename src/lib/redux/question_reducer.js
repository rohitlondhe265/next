import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState: {
        queue: [],
        status: undefined,
        answers: [],
        trace: 0,
    },
    reducers: {
        startExamAction: (state, action) => {
            let { question, answers, status } = action.payload
            return {
                ...state,
                queue: question,
                answers,
                status,
            }
        },
        moveNextAction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        movePrevAction: (state) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        updateStatusAction: (state, action) => {
            const trace = action.payload;
            state.status.fill(true, trace, trace + 1)
        },
        resetAllAction: () => {
            return {
                queue: [],
                status: undefined,
                answers: [],
                trace: 0,
            }
        }
    }
})

export const { startExamAction, moveNextAction, movePrevAction, updateStatusAction, resetAllAction } = questionReducer.actions;

export default questionReducer.reducer;