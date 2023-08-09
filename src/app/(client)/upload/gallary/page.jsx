import Link from "next/link";
import Input from "./Input";
import fs from "fs/promises"

export default async function page() {

    const dirs = await fs.readdir(`${process.cwd()}/public/uploads`)

    return (
        <div className='max-w-4xl mx-auto p-20 space-y-6'>
            <Input />

            <div className='mt-20 flex flex-col space-y-3'>
                {dirs.map((item, i) => (
                    <Link key={i} href={`/uploads/${item}`} className="text-blue-600 hover:underline">{item}</Link>
                ))}
            </div>
        </div>
    )
}
