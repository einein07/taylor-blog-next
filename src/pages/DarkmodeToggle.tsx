import React, { useEffect, useState } from "react";

export default function DarkmodeToggle(): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    // if (import.meta.env.SSR) {
    //   return undefined
    // }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "darkmode";
    }
    return "lightmode";
  });
  const toggleTheme = () => {
    const t = theme === "lightmode" ? "darkmode" : "lightmode";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "darkmode") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <>
      <div className="flex justify-start pt-1">
        <button
          key={theme}
          className={
            "hover:text-red-900 dark:hover:text-yellow-100 float-left cursor-pointer pt-2 text-left text-sm font-bold"
          }
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {"Click me to "}
          {theme === "lightmode" && "relax yourself!"}
          {theme === "darkmode" && "brighten your day!"}
        </button>
      </div>
    </>
  ) : (
    <div />
  );
}
