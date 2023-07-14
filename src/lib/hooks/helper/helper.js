import { useSelector } from "react-redux";
import axios from 'axios'
import { useRouter } from "next/router";

/** get server data */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data;
}


/** post server data */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point){
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

// const ans = new Map([
//     ["k", "val"],
//     ["k2", "val 2"]
// ])

// const givenAns = new Map();

// map.set("key", "value"); // add or update
// // const val = map.get("key"); // get
// // map.clear(); // delete all

// let marks = 0;
// ans.forEach((value, key) => {
//     if (givenAns.get(key) === value) {
//         marks += 1;
//     }
// })

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    const router = useRouter();
    return auth ? children : router.push("/");
}
