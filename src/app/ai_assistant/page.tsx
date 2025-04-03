"use client";

import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

function ChatbotUI() {
  // npm create sanity@latest -- --project dacw48tw --dataset production --template clean

  const [messages, setMessages] = useState([
    { text: "", sender: "" },
  ]);

  const [input, setInput] = useState("");


  
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm still learning! 🚀", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* <Navbar/> */}
      <div className="h-screen w-screen flex flex-col bg-gray-900 text-white ">
        {/* Chat Header */}
        <div className="bg-indigo-800 text-white p-4 flex items-center gap-2 shadow-lg lg:px-16 md:px-12 sm:px-8 px-5">
          <Bot className="w-6 h-6" />
          <h2 className="text-lg font-semibold">AI Chatbot</h2>
        </div>

        <div className="flex justify-center">
          <h4 className="py-5">
            This is Sir Zain AI assistant. If you need any information about Sir
            Zain, you can ask it here.
          </h4>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 xl:px-44 lg:px-32 md:px-12 sm:px-8 px-5">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-2xl max-w-xs ${
                  msg.sender === "user"
                    ? "bg-indigo-500 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-300 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 flex items-center xl:px-44 lg:px-32 md:px-12 sm:px-8 px-5">
          <input
            type="text"
            className="flex-1 p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-3 bg-indigo-600 p-3 rounded-lg hover:bg-indigo-700"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatbotUI;



























