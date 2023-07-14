import dbConnect from "@/lib/database/db";
import Result from "@/lib/database/models/resultSchema";
import { NextResponse } from "next/server";

export const GET = async (request) => {

    try {
        await dbConnect();
        const results = await Result.find();
        return NextResponse.json(results);
    } catch (err) {
        return NextResponse.json("Database Error");
    }
};