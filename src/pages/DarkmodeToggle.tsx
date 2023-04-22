import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
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
      <div className="flex justify-start">
        <button
          key={theme}
          className={
            "float-left cursor-pointer pt-2 text-left text-sm text-red-700 dark:text-yellow-500"
          }
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {/* {"Click me to "} */}
          {theme === "lightmode" && <FontAwesomeIcon icon={faMoon} size="xl" />}
          {theme === "darkmode" && <FontAwesomeIcon icon={faSun} size="xl" />}
        </button>
      </div>
    </>
  ) : (
    <div />
  );
}
