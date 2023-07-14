import { postServerData } from './helper/helper'
import * as Action from '../redux/result_reducer'
import { apiUrl } from '../database/constants'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
} 
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

/** insert user data */
export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    const body =     {
        "email": "axios@gmail.com",
        "username": "abc",
        "exam": "Talathi Set1",
        "attempts": 100,
        "points": 96,
        "performance": "Good"
    }
    (async () => {
        try {
            if(result !== [] && !username) throw new Error("Couldn't get Result");
            await postServerData(`${apiUrl}/result`, body, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}