"use client";

import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function Theme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(function () {
    const modeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const result = modeQuery.matches ? "dark" : "light";
    document.body.classList.add(result);
    setTheme(result);
  }, []);

  function handleLight() {
    setTheme("light");
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }

  function handleDark() {
    setTheme("dark");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }

  return (
    <>
      {theme === "dark" && (
        <button
          onClick={handleLight}
          className="text-2xl hover:text-stone-400 duration-200"
        >
          <HiOutlineSun />
        </button>
      )}
      {theme === "light" && (
        <button
          onClick={handleDark}
          className="text-2xl hover:text-stone-400 duration-200"
        >
          <HiOutlineMoon />
        </button>
      )}
    </>
  );
}
