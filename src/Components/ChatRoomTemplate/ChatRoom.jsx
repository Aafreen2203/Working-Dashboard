import React, { useState } from "react";
import "./ChatRoom.css";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        sender: "Me", // You can replace "Me" with the sender's name or username
        timestamp: new Date().toLocaleTimeString() // Add timestamp to the message
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <div className="chat-container glass">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <div className="message-header">
                <span className="sender">{message.sender}</span>
                <span className="timestamp">{message.timestamp}</span>
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
