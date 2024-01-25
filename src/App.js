import "./App.css";
import React, { useState } from "react";

const RandomWordComponent = () => {
  const words = [
    "Я люблю Аню",
    "Аня лучшая",
    "Аня самая сладкая",
    "Аня самая замечательная",
    "Аня кролик",
  ];
  const [currentWord, setCurrentWord] = useState(words[0]);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    setCurrentWord(randomWord);
  };

  return (
    <div>
      <p className="current">{currentWord}</p>
      <button onClick={getRandomWord}>тыцни на кнопочку зайка</button>
      {currentWord === "Аня кролик" ? (
        <div>
          <p className="you">Это ты!!!</p>
          <img src="/img/image.jpg" alt="кролик" />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <RandomWordComponent />
    </div>
  );
}

export default App;
