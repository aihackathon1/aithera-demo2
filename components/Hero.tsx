'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Hero() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello, I'm Dr. Sarah, your AI therapist. I'm here to listen and support you in a safe, non-judgmental space. What's on your mind today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = [
    "I'm here to listen. Would you like a breathing exercise or a calming tip?",
    "That sounds challenging. Can you tell me more about what's on your mind?",
    "I understand. It's okay to feel this way. What would help you feel better right now?",
    "Thank you for sharing that with me. How long have you been feeling this way?",
    "I'm here to support you. Would you like to try a mindfulness exercise?",
    "Your feelings are valid. What's one small thing that might help you today?",
    "I appreciate you opening up. What's been the most difficult part of your day?",
    "It takes courage to talk about these things. How can I best support you right now?"
  ];

  const getRandomBotResponse = () => {
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Prepare messages for ChatGPT API
      const chatHistory = messages.map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.text
      }));

      // Add the new user message
      chatHistory.push({
        role: 'user',
        content: newMessage.text
      });

      // Add system message for therapy context
      const messagesWithSystem = [
        {
          role: 'system',
          content: `You are Dr. Sarah, a compassionate and experienced AI therapist specializing in cognitive behavioral therapy and mindfulness-based approaches. Your role is to:

1. Provide empathetic, non-judgmental emotional support
2. Use active listening techniques and reflective responses
3. Ask thoughtful, open-ended questions to help users explore their feelings
4. Suggest evidence-based coping strategies and mindfulness exercises
5. Validate emotions while gently challenging unhelpful thought patterns
6. Maintain professional boundaries while being warm and approachable
7. Focus on the present moment and practical next steps
8. Never provide medical diagnoses or replace professional therapy
9. Encourage self-compassion and personal growth
10. Use "I" statements and avoid giving direct advice

Respond in 2-3 sentences maximum, keeping conversations natural and flowing. Always end with a gentle question or invitation for the user to share more.`
        },
        ...chatHistory
      ];

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: messagesWithSystem })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      const aiResponse = data?.choices?.[0]?.message?.content || 'I apologize, but I had trouble processing that. Could you please try again?';

      const botResponse: Message = {
        id: messages.length + 2,
        text: aiResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      const errorMessage: Message = {
        id: messages.length + 2,
        text: 'I\'m here to listen and support you. While I\'m experiencing some technical limitations right now, I want you to know that your feelings are valid and important. Would you like to try some breathing exercises or mindfulness techniques while we work through this together?',
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your AI Therapist –{' '}
              <span className="gradient-text">Always Here to Listen</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering you with personalized, interactive support for mental health and wellness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-10 py-4">
                Get Started
              </button>
              <button className="btn-secondary text-lg px-10 py-4">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Chatbot Window */}
          <div className="relative">
            <div className="bg-gradient-to-br from-ai-purple/20 to-ai-green/20 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Title Bar */}
                <div className="bg-gradient-to-r from-ai-purple to-ai-green px-6 py-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Dr. Sarah - AI Therapist</h3>
                </div>
                
                {/* Message Area */}
                <div ref={chatContainerRef} className="h-80 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isBot ? 'space-x-3' : 'justify-end space-x-3'}`}>
                      {message.isBot ? (
                        <>
                          <div className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-green rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                            <p className="text-gray-800 text-sm">{message.text}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-gradient-to-r from-ai-purple to-ai-green rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                            <p className="text-white text-sm">{message.text}</p>
                          </div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-green rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                {/* Input Area */}
                <div className="border-t border-gray-200 p-4">
                  <form onSubmit={handleSendMessage} className="flex space-x-3">
                    <input 
                      type="text" 
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Type your message..." 
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ai-purple/20 focus:border-ai-purple text-sm"
                      disabled={isTyping}
                    />
                    <button 
                      type="submit"
                      disabled={!inputText.trim() || isTyping}
                      className="w-12 h-12 bg-gradient-to-r from-ai-purple to-ai-green rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-ai-yellow/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-ai-orange/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
