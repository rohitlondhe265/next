import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userId: "",
        userName: "",
        category: "",
        set: "",
        result: [],
    },
    reducers: {
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setSet: (state, action) => {
            state.set = action.payload
        },
        pushResultAction: (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction: (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction: () => {
            return {
                userId: "",
                userName: "",
                category: "",
                set: "",
                result: [],
            }
        }
    }
})

export const { setUserId, setUserName, setCategory, setSet, pushResultAction, resetResultAction, updateResultAction } = resultReducer.actions;

export default resultReducer.reducer;
