interface AvatarProps {
  name?: string;
  image?: string;
  className?: string;
}


const Avatar = ({
  name = "User",
  image,
  className = "",
}: AvatarProps) => {


  return (

    <div
      className={`
        h-10
        w-10
        rounded-full
        overflow-hidden
        flex
        items-center
        justify-center
        bg-gray-200
        text-gray-700
        font-semibold
        shrink-0
        ${className}
      `}
    >

      {
        image ? (

          <img
            src={image}
            alt={name}
            className="
              h-full
              w-full
              object-cover
            "
          />

        ) : (

          <span>
            {name.charAt(0).toUpperCase()}
          </span>

        )
      }


    </div>

  );

};


export default Avatar;