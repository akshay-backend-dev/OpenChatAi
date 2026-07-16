import Avatar from "@/components/ui/Avatar";
import { MessageRole } from "@/types/chat";


interface MessageBubbleProps {
  role: MessageRole;
  content: string;
}



const MessageBubble = ({
  role,
  content,
}: MessageBubbleProps) => {


  const isUser = role === "user";



  return (

    <div
      className={`
        flex gap-3 items-start
        ${isUser ? "justify-end" : "justify-start"}
      `}
    >


      {
        !isUser && (
          <Avatar name="AI" />
        )
      }



      <div
        className={`
          max-w-[75%]
          rounded-2xl
          px-4 py-3
          whitespace-pre-wrap
          text-sm
          ${
            isUser
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-900"
          }
        `}
      >

        {content}

      </div>



      {
        isUser && (
          <Avatar name="You" />
        )
      }


    </div>

  );

};


export default MessageBubble;