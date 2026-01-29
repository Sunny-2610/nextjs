"use client"

import axios from "axios";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";


export default function VerifyMail() {
    const [emailToken, setEmailToken] = useState("");
    const [verified, setVerified] = useState(false);

    const verifyUserEmail = async () =>{
        try {
            await axios.post("/api/users/verifyemail", {emailToken});
            setVerified(true);
            
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);
            
        }  

        useEffect(() =>{
            if (verified) {
                router.push("/login");
            }
        }, [verified]);
    }
}