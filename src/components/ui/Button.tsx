import React from "react";
import { cn } from "@/lib/utils";


interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: 
    | "primary"
    | "secondary"
    | "ghost";

  children: React.ReactNode;

}



const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {



  const variants = {

    primary:
      "bg-black text-white hover:bg-gray-800",

    secondary:
      "bg-gray-200 text-black hover:bg-gray-300",

    ghost:
      "hover:bg-gray-100 text-black",

  };



  return (

    <button

      className={cn(

        `
        px-4
        py-2
        rounded-xl
        font-medium
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
        `,

        variants[variant],

        className

      )}

      {...props}

    >

      {children}

    </button>

  );

};


export default Button;