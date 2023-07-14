import { NextResponse } from "next/server";
import dbConnect from "@/lib/database/db";
import Questions from "@/lib/database/models/questionSchema";


/** get all questions */
export const GET = async (request) => {
    const url = new URL(request.url);
    const setString = url.searchParams.get("set");
    const category = url.searchParams.get("category");
    const set = Number(setString);

    try {
        await dbConnect();
        const questions = await Questions.find({ category, set }).sort({ section: 1 });
        return NextResponse.json(questions);
    } catch (err) {
        return NextResponse.json("database error");
    }
};

/** insert all Questions */
export async function POST(request) {
    const body = await request.json();

    try {
        await dbConnect();
        await Questions.insertMany(body);
        return NextResponse.json({ msg: "inserted successfully" })
    } catch (error) {
        return NextResponse.json({ error, body })
    }
}

// /** Delete all Questions */
export async function DELETE(request) {
    const url = new URL(request.url);
    const set = url.searchParams.get("set");
    const category = url.searchParams.get("category");

    try {
        await dbConnect();
        await Questions.deleteMany({ set, category });
        return NextResponse.json({ msg: "Questions Deleted Successfully...!" });
    } catch (error) {
        return NextResponse.json(error)
    }
}