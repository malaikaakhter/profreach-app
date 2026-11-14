"use client";
import { useState } from "react";
import NewButton from "./NewButton";
import NavBar from "./components/NavBar";
import Link from "next/link";
// import professor from "./professor/[id]/page";

const professors = [
  { id: 0, name: "laiba", semester: 7 },
  { id: 1, name: "malaika", semester: 6 },
  { id: 2, name: "areeba", semester: 7 },
];

export default function () {
  return (
    <main className="min-h-screen bg-gray-400">
      <div className="flex flex-wrap gap-105 bg-gray-500 text-white pt-2.5 mb-2 pr-10 ">
        <h1 className=" text-3xl font-bold text-gray-900">Admin Portal</h1>

        <NavBar />
      </div>
      <p className="text-gray-500">Welcome Admin</p>
      {/* <NewButton label="login"/> */}
      {professors.map((professor) => {
        return (
          <>
            <Link
              className="text-black"
              key={professor.id}
              href={`/professor/${professor.id}/${professor.name}`}
            >
              Go To Professor {professor.name}
            </Link>
            <br />
          </>
        );
      })}
    </main>
  );
}
