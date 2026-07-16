import { Chat } from "@/types/chat";


export const dummyChats: Chat[] = [

  {
    id: "chat-1",
    title: "Welcome Chat",
    messages: [
      {
        id: "message-1",
        role: "assistant",
        content:
          "Hello 👋 Welcome to OpenChat AI. How can I help you today?",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },


  {
    id: "chat-2",
    title: "React Discussion",
    messages: [
      {
        id: "message-2",
        role: "user",
        content:
          "What are React hooks?",
        createdAt: new Date(),
      },
      {
        id: "message-3",
        role: "assistant",
        content:
          "React hooks are functions that allow functional components to use state and other React features.",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },


  {
    id: "chat-3",
    title: "AI Learning",
    messages: [
      {
        id: "message-4",
        role: "user",
        content:
          "Explain artificial intelligence.",
        createdAt: new Date(),
      },
      {
        id: "message-5",
        role: "assistant",
        content:
          "Artificial intelligence enables machines to perform tasks that normally require human intelligence.",
        createdAt: new Date(),
      },
    ],
    createdAt: new Date(),
  },

];