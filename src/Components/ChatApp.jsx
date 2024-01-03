import React, { useState, useEffect } from "react";

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! lorem how are you ", sender: "user1" },
    { text: "Hi  hyht hstsh i am fine and how there!", sender: "user2" },
    {
      text: "How what about  there are you doing?",
      sender: "user1",
    },
    { text: "I'm good, thanks!", sender: "user2" },
    { text: "What are you up to?", sender: "user1" },
    { text: "Just working on some projects. How about you?", sender: "user2" },
    { text: "Hey! lorem how are you ", sender: "user1" },
    // ... add more messages
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientColors((prevColors) => [prevColors[1], prevColors[0]]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const [gradientColors, setGradientColors] = useState(["#FDEFEF", "#F9B7B7"]);

  const renderMessages = (isOdd) => {
    const filteredMessages = messages.filter(
      (_, index) => (isOdd && index % 2 !== 0) || (!isOdd && index % 2 === 0)
    );

    return (
      <div className="flex flex-col w-full">
        {filteredMessages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0
                ? "justify-start -mx-4 mb-10 font-semibold font-serif"
                : "justify-end mx-4 mb-10 font-semibold font-serif"
            } animate-message`}
            style={{
              animationDelay: `${index * 0.6}s`,
              flexDirection: isOdd ? "row" : "row-reverse",
              zIndex: 2,
            }}
          >
            <div
              className={`h-8 w-8 bg-${
                message.sender === "user1" ? "green" : "blue"
              } rounded-full mr-2 animate-message`}
              style={{ animationDelay: `${index * 0.5}s` }}
            />
            <div
              className={`bg-white p-4 pl-5 pr-5 rounded-3xl ${
                message.sender === "user1" ? "bg-opacity-50" : "bg-opacity-75"
              } animate-message`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen p-10 relative"
      style={{
        background: `linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[1]})`,
      }}
    >
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-5px);
            }
            60% {
              transform: translateY(-3px);
            }
          }

          .animate-message {
            animation: bounce 10s infinite;
            line-height: 1.5; // Adjust the line height as needed
          }
        `}
      </style>

      <div className="w-full ">{renderMessages(true)}</div>

      <div className="absolute top-1/2 transform -translate-y-2/3 left-1/2 -translate-x-1/2 bg-gradient-to-b from-transparent to-transparent p-6 z-1">
        <h1 className="font-serif font-bold text-5xl text-center text-white">
          Trusted by Thinkers & Doers Everywhere
        </h1>
      </div>

      <div className="w-full  mt-24 ">{renderMessages(false)}</div>
    </div>
  );
};

export default ChatApp;
