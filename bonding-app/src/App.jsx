import React, { useState } from "react";
import Card from "./components/Card.jsx";
import "./index.css";
import LevelSelector from "./components/LevelSelector.jsx";
import { getRandomPrompt } from "./data/prompts.js";

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState("Perception");
  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };
  return (
    <>
      <div className="card-container">
        <Card level={selectedLevel} prompt={getRandomPrompt(selectedLevel)} />
      </div>
      <div className="level-selectors-container">
        <LevelSelector level="Perception" onSelect={handleLevelSelect} />
        <LevelSelector level="Connection" onSelect={handleLevelSelect} />
        <LevelSelector level="Reflection" onSelect={handleLevelSelect} />
      </div>
    </>
  );
};

export default App;
