"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSignup = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/signup", user);
      console.log("Signup successful:", response.data);

      router.push("/login");
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email && user.password && user.username));
  }, [user]);

  return (
    <div className="bg-[#121212] h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="text-white text-2xl">Sign Up</h1>
      <hr className="w-1/3 border-gray-600" />

      <label className="text-white" htmlFor="username">
        Username
      </label>
      <input
        className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) =>
          setUser({ ...user, username: e.target.value })
        }
        placeholder="username"
      />

      <label className="text-white" htmlFor="email">
        Email
      </label>
      <input
        className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
        placeholder="email"
      />

      <label className="text-white" htmlFor="password">
        Password
      </label>
      <input
        className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
        placeholder="password"
      />

      <button
        disabled={buttonDisabled || loading}
        onClick={onSignup}
        className={`px-3 py-2 rounded text-white ${
          buttonDisabled || loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-[#1DB954]"
        }`}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </button>

      <Link className="text-[#1DB954]" href="/login">
        Login
      </Link>
    </div>
  );
}
