import { ChatMessage } from "@/types/chat";


interface SendMessageResponse {
  message: ChatMessage;
}


export async function sendMessageToAI(
  content: string
): Promise<SendMessageResponse> {


  const response = await fetch("/api/chat", {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      message: content,
    }),

  });



  if (!response.ok) {

    const error =
      await response.json();

    console.log(error);

    throw new Error(
      "Failed to send message"
    );

  }



  return response.json();

}