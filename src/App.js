import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css"; // Keep your CSS if you need it

export default function App() {
  const [emojiType, setEmojiType] = useState(""); // Track emoji type (crying or happy)
  const [isRaining, setIsRaining] = useState(false); // Control emoji rain state

  // Function to trigger emoji rain (crying or happy)
  const handleNoClick = () => {
    setEmojiType("crying");
    setIsRaining(true); // Start the emoji rain when NO is clicked
    setTimeout(() => setIsRaining(false), 5000); // Stop the rain after 5 seconds
  };

  const handleYesClick = () => {
    setEmojiType("happy");
    setIsRaining(true); // Start the emoji rain when YES is clicked
    setTimeout(() => setIsRaining(false), 5000); // Stop the rain after 5 seconds
  };

  // Generate 100 emojis
  const generateEmojis = () => {
    const emojiArray = [];
    for (let i = 0; i < 100; i++) {
      emojiArray.push(
        <span
          key={i}
          role="img"
          aria-label={emojiType}
          className="emoji"
          style={{
            left: `${Math.random() * 100}%`, // Random horizontal position
            animationDelay: `${Math.random() * 2}s`, // Random delay for each emoji
            top: `${Math.random() * 100}vh`, // Random vertical position
          }}
        >
          {emojiType === "crying" ? "wrong answer" : "meow"}
        </span>
      );
    }
    return emojiArray;
  };

  return (
    <div className="app">
      {/* Cute Header and Text */}
      <h1>💖 Will you be my valentine, yobo? 💖</h1>
      <p> You better say yes pookie.</p>

      {/* Heart Image in the Center */}
      <div className="image-container">
        <img
          src="/amy_brent.jpg" // Image in public folder
          alt="Cute Heart"
          className="heart"
          style={{
            width: "200px",
            margin: "auto",
            display: "block", // Centering the image
          }}
        />
      </div>

      {/* YES and NO Buttons */}
      <div className="button-container">
        <button className="yes-button" onClick={handleYesClick}>
          YES
        </button>
        <button className="no-button" onClick={handleNoClick}>
          NO
        </button>
      </div>

      {/* Emoji Rain */}
      {isRaining && (
        <div className="emoji-rain">{generateEmojis()}</div>
      )}
    </div>
  );
}
