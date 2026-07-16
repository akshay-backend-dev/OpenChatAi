export interface Prompt {
  id: string;
  title: string;
  prompt: string;
}


export const suggestedPrompts: Prompt[] = [

  {
    id: "prompt-1",
    title: "Explain Code",
    prompt:
      "Explain this code in simple words",
  },


  {
    id: "prompt-2",
    title: "Generate Ideas",
    prompt:
      "Give me creative project ideas",
  },


  {
    id: "prompt-3",
    title: "Debug Code",
    prompt:
      "Help me find and fix errors in my code",
  },


  {
    id: "prompt-4",
    title: "Learn Something",
    prompt:
      "Teach me a new technology step by step",
  },

];