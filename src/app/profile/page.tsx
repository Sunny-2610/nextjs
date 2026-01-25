"use client";

import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter(); // ✅ FIX 1

  const logout = async () => {
    try {
      await axios.get("/api/users/logout"); // ✅ FIX 2
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-[#121212] h-screen flex flex-col items-center justify-center">
      <h1 className="text-center text-white text-2xl">Profile</h1>

      <br />

      <h1 className="text-center text-white text-2xl">
        Welcome, User!
      </h1>

      <br />

      <button
        onClick={logout}
        className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
      >
        Logout
      </button>
    </div>
  );
}
