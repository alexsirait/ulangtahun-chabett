import { useState } from 'react';

export default function BirthdayMessage() {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    {
      title: "Dear Chabett...",
      content: "Every day with you feels like a celebration. Your smile lights up my world and your love makes every moment special. Today is your day, and I want you to know how much you mean to me.",
      emoji: "💕"
    },
    {
      title: "You're My Everything",
      content: "As a software engineer, I build things with code, but you've built something in my heart that no algorithm could ever create. You're the most beautiful person I've ever known, inside and out.",
      emoji: "💙"
    },
    {
      title: "Happy Birthday, Love",
      content: "May this year bring you all the happiness, success, and love you deserve. I promise to be there for you through every challenge and celebrate every victory. You're not just my girlfriend, you're my best friend, my soulmate, my everything.",
      emoji: "🎂"
    },
    {
      title: "Forever Yours",
      content: "Thank you for being the amazing person you are. Thank you for loving me, supporting me, and making me a better person. I can't wait to spend many more birthdays with you. I love you more than words can express.",
      emoji: "💝"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center px-4">
      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-400/30 shadow-2xl">
        
        {/* Animated Emoji */}
        <div className="text-6xl md:text-8xl lg:text-9xl mb-4 md:mb-6">
          {messages[currentMessage].emoji}
        </div>

        {/* Message Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
          {messages[currentMessage].title}
        </h2>

        {/* Message Content */}
        <div className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed mb-6 md:mb-8 font-light">
          {messages[currentMessage].content}
        </div>

        {/* Special Quote */}
        <div className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-xl md:rounded-2xl p-4 md:p-6 border border-pink-400/30">
          <blockquote className="text-lg md:text-xl lg:text-2xl text-white font-semibold italic">
            "In a world full of code, you're the one algorithm I'll never stop running."
          </blockquote>
          <p className="text-blue-200 mt-2 text-sm md:text-base">- Your Software Engineer Boyfriend</p>
        </div>

        {/* Birthday Wishes */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-blue-600/30 rounded-xl p-3 md:p-4 border border-blue-400/50">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">🌟</div>
            <p className="text-blue-100 font-medium text-sm md:text-base">May all your dreams come true</p>
          </div>
          <div className="bg-purple-600/30 rounded-xl p-3 md:p-4 border border-purple-400/50">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">💫</div>
            <p className="text-purple-100 font-medium text-sm md:text-base">Stay as beautiful as you are</p>
          </div>
          <div className="bg-pink-600/30 rounded-xl p-3 md:p-4 border border-pink-400/50">
            <div className="text-xl md:text-2xl mb-1 md:mb-2">💖</div>
            <p className="text-pink-100 font-medium text-sm md:text-base">I love you more each day</p>
          </div>
        </div>

        {/* Message Navigation */}
        <div className="flex justify-center space-x-2 mt-6 md:mt-8">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMessage(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentMessage === index ? 'bg-white scale-125' : 'bg-blue-300 opacity-50 hover:opacity-75'
              }`}
            />
          ))}
        </div>

        {/* Message Counter */}
        <div className="mt-4 text-center">
          <p className="text-blue-200 text-sm">
            Message {currentMessage + 1} of {messages.length}
          </p>
        </div>
      </div>
    </div>
  );
} 