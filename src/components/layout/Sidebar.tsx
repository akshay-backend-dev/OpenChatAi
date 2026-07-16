"use client";

import { MessageSquare, Plus } from "lucide-react";

import { dummyChats } from "@/data/dummyChats";
import Button from "@/components/ui/Button";


const Sidebar = () => {


  return (

    <aside
      className="
        hidden
        md:flex
        w-72
        h-screen
        flex-col
        border-r
        bg-background
        p-4
      "
    >


      {/* New Chat Button */}
      <Button
        className="
          w-full
          flex
          items-center
          justify-center
          gap-2
        "
      >

        <Plus size={18} />

        New Chat

      </Button>



      {/* Chat History */}
      <div
        className="
          mt-6
          flex-1
          overflow-y-auto
          space-y-2
        "
      >


        <p
          className="
            text-sm
            text-muted-foreground
            mb-3
          "
        >
          Recent Chats
        </p>



        {
          dummyChats.map((chat) => (

            <button

              key={chat.id}

              className="
                w-full
                flex
                items-center
                gap-3
                rounded-xl
                p-3
                text-left
                hover:bg-accent
                transition
              "

            >

              <MessageSquare size={18} />

              <span
                className="
                  truncate
                  text-sm
                "
              >

                {chat.title}

              </span>


            </button>

          ))
        }


      </div>


    </aside>

  );

};


export default Sidebar;