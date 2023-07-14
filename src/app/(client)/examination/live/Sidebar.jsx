'use client'

import { useState } from 'react'
import { SignalIcon } from '@heroicons/react/24/solid'
import Board from '@/components/Board'

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            {/* Laptop sidebar */}
            <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
                <div className="px-8">
                    <Board />
                </div>
            </div>

            {/* Mobile sidebar */}
            <div className={`w-64 h-64 z-40 absolute top-96 bg-gray-800 shadow flex-col justify-between transition duration-150 ease-in-out md:hidden ${open ? 'bg-gray-600 translate-x-0' : 'bg-red-500-600 -translate-x-64'}`} >
                <div className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer md:hidden"
                    onClick={() => setOpen(!open)}>
                    <SignalIcon />
                </div>
                <div className="px-8">
                    <Board />
                </div>
            </div>

        </div>
    )
}
