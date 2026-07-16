"use client";

import { useEffect, useState } from "react";


type Theme = "light" | "dark";


export const useTheme = () => {

  const [theme, setTheme] = useState<Theme>("light");


  useEffect(() => {

    const savedTheme =
      localStorage.getItem("openchat-theme") as Theme | null;


    const systemTheme =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";


    const currentTheme =
      savedTheme || systemTheme;


    setTheme(currentTheme);


    document.documentElement.classList.toggle(
      "dark",
      currentTheme === "dark"
    );


  }, []);



  const toggleTheme = () => {

    const newTheme: Theme =
      theme === "light"
        ? "dark"
        : "light";


    setTheme(newTheme);


    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );


    localStorage.setItem(
      "openchat-theme",
      newTheme
    );

  };



  return {
    theme,
    toggleTheme,
  };

};