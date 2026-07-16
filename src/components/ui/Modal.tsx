"use client";

import { X } from "lucide-react";


interface ModalProps {

  open: boolean;

  onClose: () => void;

  title?: string;

  children: React.ReactNode;

}



const Modal = ({
  open,
  onClose,
  title,
  children,
}: ModalProps) => {


  if (!open) return null;



  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        px-4
      "
      onClick={onClose}
    >


      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
        onClick={(e) => e.stopPropagation()}
      >


        <div
          className="
            flex
            items-center
            justify-between
            mb-5
          "
        >

          {
            title && (

              <h2 className="text-lg font-semibold">
                {title}
              </h2>

            )
          }



          <button

            onClick={onClose}

            className="
              rounded-lg
              p-2
              hover:bg-gray-100
            "

          >

            <X size={18} />

          </button>


        </div>



        {children}


      </div>


    </div>

  );

};


export default Modal;