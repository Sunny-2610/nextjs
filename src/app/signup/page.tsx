"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    console.log(user);
  };

  return (
    <div className="bg-[#121212] h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="text-white text-2xl">Sign Up</h1>
      <hr className="w-1/3 border-gray-600" />

      <label className="text-white" htmlFor="username">Username</label>
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

      <label className="text-white" htmlFor="email">Email</label>
      <input
        className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
        placeholder="email"
      />

      <label className="text-white" htmlFor="password">Password</label>
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
        className="px-3 py-2 rounded bg-[#1DB954] text-white"
        onClick={onSignup}
      >
        Sign Up
      </button>
        <Link className="text-[#1DB954]" href = "/login" >login</Link>
    </div>
  );
}
