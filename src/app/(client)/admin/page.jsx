'use client'
import { useState } from "react";

export default function page() {

    const [data, setdata] = useState("");

    const handleSubmit = async () => {
        console.log(data);
        try {
            const res = await fetch("/api/questions", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const response = await res.json();
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    };

    // const handleDelete = async (id) => {
    //     try {
    //         await fetch(`/api/question?id=${id}`, {
    //             method: "DELETE",
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div>
            <h1>Protected Page</h1>
            <h1 className='text-lg font-bold bg-violet-600'>Add New Examination</h1>
            {/* <input type="text" placeholder="Category" className="hover:bg-red-300 active:bg-green-300 focus:bg-purple-300 outline-1 outline-orange-600 p-3" />
                <input type="text" placeholder="Set Number" className="" /> */}
            <textarea
                placeholder="Past Questions Data"
                className=""
                value={data}
                onChange={(e) => setdata(e.target.value)}
                cols="60"
                rows="15"
            />
            <button onClick={handleSubmit} className="">Create Exam</button>
        </div>
    )

    // return (
    //     <div>You are not allowed to view this Page</div>
    // )
}