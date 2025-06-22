import React, { useState, useRef, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { FaUser, FaRobot } from 'react-icons/fa';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I assist you today?', sender: 'assistant', timestamp: new Date(Date.now() - 60000) },
    { id: 2, text: 'Hi there! I have a question about my account.', sender: 'user', timestamp: new Date(Date.now() - 30000) },
    { id: 3, text: 'Of course! What would you like to know about your account?', sender: 'assistant', timestamp: new Date() },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, newUserMessage]);
    setInputValue('');

    // Simulate assistant response after a delay
    setTimeout(() => {
      const responses = [
        "I understand your question. Let me check that for you.",
        "That's an interesting point. Here's what I found...",
        "Thanks for asking! The answer is...",
        "I can help with that. The information you need is...",
        "Good question! Here's what you should know..."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const newAssistantMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newAssistantMessage]);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-800">AI Assistant</h1>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-3/4 rounded-lg p-4 ${message.sender === 'user' 
                ? 'bg-indigo-600 text-white rounded-br-none' 
                : 'bg-white border border-gray-200 rounded-bl-none'} 
                shadow-sm animate-fade-in`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="flex items-start space-x-2">
                <div className="mt-1">
                  {message.sender === 'user' ? (
                    <FaUser className="text-white" />
                  ) : (
                    <FaRobot className="text-indigo-600" />
                  )}
                </div>
                <div>
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className={`p-2 rounded-full ${inputValue.trim() 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'} 
              transition-colors duration-200`}
          >
            <FiSend className="h-5 w-5" />
          </button>
        </form>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Chat;