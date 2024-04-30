"use client";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type TTheme = "light" | "dark";
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<TTheme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as TTheme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <button
      onClick={toggleTheme}
      className="fixed right-5 bottom-5 hover:scale-[1.05] hover:shadow-xl active:scale-[1.25] transition-all rounded-full bg-white dark:bg-gray-800 dark:text-gray-200 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-md p-3 flex items-center justify-center"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
