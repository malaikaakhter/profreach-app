"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function () {

  const [email, setEmail] = useState('malaikanaz7860@gmail.com');
  const [password, setPassword] = useState('0142@GFstre');
  const router = useRouter();
  const validPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*\S).{8,}$/.test(password);
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <main className="flex min-h-screen bg-linear-to-br from-purple-500 to-purple-800 items-center justify-center p-4">
      <form action="" className="grid w-full max-w-md gap-4  bg-white p-6 shadow-xl sm:p-8 rounded-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700">Create Account</h1>
          <div className="grid gap-2">
            <label htmlFor="" className="text-black text-left">Email</label>
            <input type="text" className="rounded border border-gray-300 p-3 outline-none placeholder:text-gray-700 text-blue-950" placeholder="Full Name" value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }
              } />
          </div>
          <div className="grid gap-2">
            <label htmlFor="" className="text-black text-left">Password</label>
            <input type="text" className="rounded border border-gray-300 p-3 outline-none placeholder:text-gray-900 text-blue-950" placeholder="Password" value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }
              } />
          </div>
          <button type="button" onClick={() => {

            if ((email === "malaikanaz7860@gmail.com") && (password === "0142@GFstre")) {
              router.push('/dashboard');
            }
            else {
              alert("enter correct email & password")
            }
          }} className="px-5 py-4  text-red-800 bg-gray-800">Register</button>

        </div>

      </form>

    </main>)
}