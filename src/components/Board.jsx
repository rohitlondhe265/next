import { MoveToQuestion } from "@/lib/hooks/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";

export default function Board() {

    const dispatch = useDispatch();
    // const status = useSelector(state => state.questions.status);
    // console.log(status)
    const { status } = useSelector(state => state.questions);
    // const status = new Array(60).fill(false);

    const navigate = (q) => {
        dispatch(MoveToQuestion(q));
    }
    return (
        <div>
            <div className='flex flex-wrap gap-2 md:gap-4'>
                {status?.map((s, i) => (
                    <button key={i} onClick={() => navigate(i)} className={`w-4 h-4 cursor-pointer text-white flex items-center justify-center rounded-sm p-3 transition-colors ${s ? 'bg-green-600' : 'bg-red-600'} text-xl`}>{i + 1}</button>
                ))}
            </div>
        </div>
    )
}
