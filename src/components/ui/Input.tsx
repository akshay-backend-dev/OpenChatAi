import React from "react";
import { cn } from "@/lib/utils";


interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}



const Input = ({
  className,
  ...props
}: InputProps) => {


  return (

    <input

      className={cn(

        `
        w-full
        rounded-xl
        border
        border-gray-300
        bg-transparent
        px-4
        py-3
        text-sm
        outline-none
        transition

        placeholder:text-gray-400

        focus:border-black
        focus:ring-2
        focus:ring-black/20
        `,

        className

      )}

      {...props}

    />

  );

};


export default Input;