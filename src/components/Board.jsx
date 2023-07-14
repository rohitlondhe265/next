
export default function Board() {

    // const result = useSelector(state => state.result.result);
    // const { queue } = useSelector(state => state.questions);
    // const status = new Array(queue.length).fill(false);

    return (
        <div>
            <div className='flex flex-wrap gap-3'>
                <div className='w-4 h-4 flex items-center justify-center rounded-lg p-2 transition-colors bg-red-300'>1</div>
            </div>
        </div>
    )
}
