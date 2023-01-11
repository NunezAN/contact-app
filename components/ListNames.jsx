import React from "react";
import { useSelector } from "react-redux";

export default function ListNames() {
  const names = useSelector((state) => state.names.value);
  return (
    <div className="flex flex-col">
      {names.length === 0 && (
        <span className="text-white uppercase">There are no names added</span>
      )}
      {names?.map((name, index) => (
        <span key={index} className="text-white">
          -{name}
        </span>
      ))}
    </div>
  );
}
