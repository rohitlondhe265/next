import dbConnect from "@/lib/database/db";
import User from "@/lib/database/models/userSchema";
import { NextResponse } from "next/server";

export const GET = async (request) => {

    try {
        await dbConnect();
        const users = await User.find();
        return NextResponse.json(users);
    } catch (err) {
        return NextResponse.json("Database Error");
    }
};