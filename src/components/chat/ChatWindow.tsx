"use client";

import EmptyChat from "./EmptyChat";
import MessageBubble from "./MessageBubble";

import { useChat } from "@/hooks/useChat";


const ChatWindow = () => {

  const {
    messages
  } = useChat();



  return (

    <div className="flex-1 overflow-y-auto px-6 py-5">

      {
        messages.length === 0 ? (

          <EmptyChat />

        ) : (

          <div className="space-y-5">

            {
              messages.map((message) => (

                <MessageBubble

                  key={message.id}

                  role={message.role}

                  content={message.content}

                />

              ))
            }

          </div>

        )
      }

    </div>

  );

};


export default ChatWindow;