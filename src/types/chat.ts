export type MessageRole = "user" | "assistant";


export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: Date;
}


export interface Chat {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
}


export interface ChatState {
  chats: Chat[];
  activeChatId: string | null;
  isLoading: boolean;
}