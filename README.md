# OpenChatAI 🤖

OpenChatAI is a modern AI chat application built with **Next.js, React, TypeScript, and Tailwind CSS**.

The project aims to create a ChatGPT-like experience with a clean user interface, scalable architecture, and AI-powered conversations.

---

## 🚀 Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Markdown
- React Syntax Highlighter
- OpenAI API (Planned Integration)

---

# 📂 Project Structure

```text
src
├── app
│   ├── api
│   │   └── chat
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── chat
│   │   ├── ChatWindow.tsx
│   │   ├── EmptyChat.tsx
│   │   ├── MessageBubble.tsx
│   │   └── PromptInput.tsx
│   │
│   ├── layout
│   │   ├── Header.tsx
│   │   ├── MainLayout.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── providers
│   │   └── ChatProvider.tsx
│   │
│   └── ui
│       ├── Avatar.tsx
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Loader.tsx
│       └── Modal.tsx
│
├── data
│   ├── constants.ts
│   ├── dummyChats.ts
│   └── prompts.ts
│
├── hooks
│   ├── useChat.ts
│   ├── useLocalStorage.ts
│   └── useTheme.ts
│
├── lib
│   ├── api.ts
│   ├── constants.ts
│   └── utils.ts
│
└── types
    └── chat.ts
```

---

# ✨ Features

## Completed

✅ Modern AI chat interface  
✅ Responsive layout  
✅ Sidebar chat history UI  
✅ Chat message system  
✅ Reusable UI components  
✅ Global chat state management  
✅ Theme support structure  
✅ TypeScript based architecture  


## Upcoming

🚧 OpenAI API integration  
🚧 Streaming AI responses  
🚧 Markdown AI responses  
🚧 Code syntax highlighting  
🚧 Authentication system  
🚧 Database chat history  
🚧 Multiple AI models  
🚧 File upload support  
🚧 Voice interaction  

---

# 🛠️ Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

## Move Into Project

```bash
cd OpenChatAI
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

# 🔐 Environment Variables

Create a .env.local file in the root directory.

Example:

```env
OPENAI_API_KEY=your_api_key_here
```

# 📜 Available Scripts

## Development

```bash
npm run dev
```

Runs the development server.


## Production Build

```bash
npm run build
```

Creates an optimized production build.


## Start Production Server

```bash
npm run start
```

Runs the production server.


## Lint

```bash
npm run lint
```

Checks code quality.

# 🏗️ Architecture

OpenChatAI follows a modular architecture:

```text
UI Components
      |
      |
Hooks
      |
      |
Context Providers
      |
      |
API Layer
      |
      |
AI Services
```

The structure is designed to keep components reusable and make future scaling easier.

# 🎯 Project Vision

OpenChatAI is built to become a scalable AI assistant platform with:

- Clean architecture
- Modern UI/UX
- Fast performance
- Reusable components
- AI-powered conversations
- Production-ready development practices

# 👨‍💻 Developer

Akshay

# 📄 License

This project is created for learning, experimentation, and development purposes.