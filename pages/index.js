import Link from "next/link";
import { useState } from "react";
import ListNames from "../components/ListNames";

export default function Home() {
  return (
    <div className="bg-black w-full h-screen">
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex max-w-2xl justify-end">
          <Link href="/AddNamePage">
            <button className="uppercase text-white bg-slate-500 p-2 rounded-xl">
              Add a name
            </button>
          </Link>
        </div>
        <div className="mx-auto w-fit pt-8 text-left text-2xl">
          <div>
            <span className="uppercase text-white">Names:</span>
            <ListNames />
          </div>
        </div>
      </div>
    </div>
  );
}
