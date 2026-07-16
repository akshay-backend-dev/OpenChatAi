"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { APP_NAME } from "@/lib/constants";


const Header = () => {

  const {
    theme,
    toggleTheme,
  } = useTheme();



  return (

    <header
      className="
        h-16
        border-b
        flex
        items-center
        justify-between
        px-6
        bg-background
      "
    >


      <h1 className="text-xl font-semibold">
        {APP_NAME}
      </h1>



      <button

        onClick={toggleTheme}

        className="
          p-2
          rounded-lg
          hover:bg-accent
          transition
        "

        aria-label="Toggle theme"

      >

        {
          theme === "light"
            ?
            <Moon size={20} />
            :
            <Sun size={20} />
        }


      </button>


    </header>

  );

};


export default Header;