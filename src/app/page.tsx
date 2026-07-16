"use client";

import MainLayout from "@/components/layout/MainLayout";

import ChatWindow from "@/components/chat/ChatWindow";

import PromptInput from "@/components/chat/PromptInput";


export default function Home() {


  return (

    <MainLayout>

      <div
        className="
          flex
          h-full
          flex-col
        "
      >

        <ChatWindow />

        <PromptInput />

      </div>


    </MainLayout>

  );

}