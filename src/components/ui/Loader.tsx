interface LoaderProps {
  size?: "sm" | "md" | "lg";
}


const Loader = ({
  size = "md",
}: LoaderProps) => {


  const sizes = {

    sm: "h-3 w-3",

    md: "h-4 w-4",

    lg: "h-6 w-6",

  };



  return (

    <div
      className={`
        flex
        items-center
        justify-center
        gap-1
      `}
    >

      <span
        className={`
          ${sizes[size]}
          rounded-full
          bg-current
          animate-bounce
        `}
      />

      <span
        className={`
          ${sizes[size]}
          rounded-full
          bg-current
          animate-bounce
          [animation-delay:150ms]
        `}
      />

      <span
        className={`
          ${sizes[size]}
          rounded-full
          bg-current
          animate-bounce
          [animation-delay:300ms]
        `}
      />


    </div>

  );

};


export default Loader;