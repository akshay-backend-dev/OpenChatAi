"use client";

import { useState } from "react";
import { ChatMessage } from "@/types/chat";


export const useChat = () => {

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  const addMessage = (
    message: ChatMessage
  ) => {

    setMessages((prev) => [
      ...prev,
      message,
    ]);

  };


  const sendUserMessage = (
    content: string
  ) => {

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content,
      createdAt: new Date(),
    };


    addMessage(userMessage);

  };


  const addAIMessage = (
    content: string
  ) => {

    const aiMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "assistant",
      content,
      createdAt: new Date(),
    };


    addMessage(aiMessage);

  };


  const clearMessages = () => {
    setMessages([]);
  };


  return {
    messages,
    isLoading,
    setIsLoading,
    sendUserMessage,
    addAIMessage,
    clearMessages,
  };

};