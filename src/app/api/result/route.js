import dbConnect from "@/lib/database/db";
import Result from "@/lib/database/models/resultSchema";
import { NextResponse } from "next/server";

/** get all Results of email */
export const GET = async (request) => {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    try {
        await dbConnect();
        const results = await Result.find({ email });
        return NextResponse.json(results);
    } catch (err) {
        return NextResponse.json("Database Error");
    }
};

/** insert all Results */
export async function POST(request) {
    const body = await request.json();
    const newResult = new Result(body);

    try {
        await dbConnect();
        await newResult.save();
        return NextResponse.json({ msg: "Result has been saved !" });
    } catch (error) {
        return NextResponse.json(error)
    }
}

/** Delete all Results */
export async function DELETE(request) {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    try {
        await dbConnect();
        await Result.deleteMany({ email });
        return NextResponse.json("Results Deleted Successfully...!");
    } catch (error) {
        return NextResponse.json(error)
    }
}