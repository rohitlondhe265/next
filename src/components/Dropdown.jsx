"use client"

import { useState, useRef } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const menus = ["Profile", "Login", "Logout"]

    const menuRef = useRef()
    const imgRef = useRef()

    window.addEventListener('click', (e) => {
        if(e.target !== menuRef.current && e.target !== imgRef.current) {
            setOpen(false);
        }
    })
    return (
        <div className="relative">
            <div ref={imgRef} onClick={() => setOpen(!open)} className="h-32 w-32 mb-4 lg:mb-0 mr-4">
                <UserCircleIcon className="h-full w-full rounded-full overflow-hidden shadow" />
            </div>
            {open && <div ref={menuRef} className="bg-gray-200 p-4 w-52 shadow-lg absolute -left-14 top-24">
                <ul>
                    {menus.map((menu, i) => (
                        <Link href="/" onClick={() => setOpen(false)} className="p-2 text-lg cursor-pointer rounded-md hover:bg-blue-200" key={i}>{menu}</Link>
                    ))}
                </ul>
            </div>}
        </div>
    )
}
