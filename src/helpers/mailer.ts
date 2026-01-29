import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";


export const sendEmail = async (email: string, emailToken: string) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }   

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const salt = await bcryptjs.genSalt(10);
        const hashedToken = await bcryptjs.hash(emailToken, salt);