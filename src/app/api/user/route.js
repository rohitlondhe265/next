import dbConnect from "@/lib/database/db";
import User from "@/lib/database/models/userSchema";
import { NextResponse } from "next/server";

/** get all User of email */
export const GET = async (request) => {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");
    let exists = false;

    try {
        await dbConnect();
        const user = await User.countDocuments({ email }).limit(1);

        if (user === 1) {
            exists = true;
        }
        return NextResponse.json(exists);
    } catch (err) {
        return NextResponse.json("Database Error");
    }
};

/** insert all User */
export async function POST(request) {
    const body = await request.json();

    try {
        await dbConnect();
        await User.insertMany(body);
        return NextResponse.json({ msg: "inserted successfully" })
    } catch (error) {
        return NextResponse.json(error)
    }
}

/** Delete all User */
export async function DELETE(request) {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    try {
        await dbConnect();
        await User.deleteMany({ email });
        return NextResponse.json({ msg: "User Deleted Successfully...!" });
    } catch (error) {
        return NextResponse.json(error)
    }
}