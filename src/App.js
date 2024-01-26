import "./App.css";
import React, { useState } from "react";

const RandomWordComponent = () => {
  const words = [
    "Я люблю Аню",
    "Аня лучшая",
    "Аня самая сладкая",
    "Аня самая замечательная",
    "Аня кролик",
    "Аня бибизяна",
    "Аня кот",
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
      <button onClick={getRandomWord}>нажми на кнопку проказница</button>
      {currentWord === "Аня кролик" ? (
        <div>
          <p className="you">Это ты!!!</p>
          <img src="/anyaaa/img/image.jpg" alt="кролик" />
        </div>
      ) : (
        <p></p>
      )}

      {currentWord === "Аня бибизяна" ? (
        <div>
          <p className="you" style={{ color: "red" }}>
            Это я в шоке от твоей красоты
          </p>
          <img src="/anyaaa/img/two.jpg" alt="кролик" />
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
