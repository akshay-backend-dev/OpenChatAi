"use client";

import { useChatContext } from "@/components/providers/ChatProvider";


export const useChat = () => {

  return useChatContext();

};