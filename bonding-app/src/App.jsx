import React, { useEffect, useState } from "react";
import Card from "./components/Card.jsx";
import "./index.css";
import LevelSelector from "./components/LevelSelector.jsx";
import { getRandomPrompt } from "./data/prompts.js";
import { getPrompt, populateWithRandomPrompts } from "./data/stack.js";

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState("Perception");
  const [touchCard, setTouchCard] = useState(false);
  const [stack, setStack] = useState(() =>
    populateWithRandomPrompts("Perception")
  );
  const [prompt, setPrompt] = useState(() => getPrompt(stack));

  // Update stack when level changes
  useEffect(() => {
    const newStack = populateWithRandomPrompts(selectedLevel);
    setStack(newStack);
    setPrompt(getPrompt(newStack));
  }, [selectedLevel]);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setTouchCard(false);
  };

  const handleCardClick = () => {
    if (!touchCard) {
      setTouchCard(true);
      setPrompt(getPrompt(stack));
    } else {
      setTouchCard(false);
    }
  };

  return (
    <>
      <div className="card-container">
        <Card
          level={selectedLevel}
          prompt={prompt}
          touchCard={touchCard}
          onTap={handleCardClick}
        />
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
