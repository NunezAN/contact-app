import Link from "next/link";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addName } from "../features/names";
import { useRouter } from "next/router";

export default function AddNamePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const name = useRef("");

  function handleSumbit(event) {
    event.preventDefault();
    dispatch(addName([name.current.value]));
    router.push("/");
    console.log(name.current.value);
  }
  return (
    <div className="bg-black w-full h-screen">
      <div className="max-w-2xl mx-auto p-4">
        <Link href="/">
          <button className="uppercase text-white bg-slate-500 p-2 rounded-xl">
            Back
          </button>
        </Link>
        <form
          className="text-white flex flex-col mt-4 gap-4"
          onSubmit={(e) => handleSumbit(e)}
        >
          <div className="flex items-center w-full">
            <label className="p-2 text-2xl">NAME</label>
            <input
              className="flex-1 bg-inherit border-slate-500s border-2 rounded-xl text-white hover:bg-slate-500 p-4 text-2xl"
              type="text"
              ref={name}
            />
          </div>
          <button
            className="bg-slate-500 p-4 text-2xl rounded-xl"
            type="submit"
          >
            ADD NAME
          </button>
        </form>
      </div>
    </div>
  );
}
