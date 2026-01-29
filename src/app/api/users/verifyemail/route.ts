import {connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect ();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, emailToken} = reqBody;

        console.log( emailToken);
        if (token !== emailToken) {
            return NextResponse.json({error: "Invalid token"}, {status: 400});
        }

        const user = await User.findOne({email});
        if (!user) {
            return NextResponse.json({error: "User not found"}, {status: 404});
        }   
        
    } catch (error:any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
        
    }
}