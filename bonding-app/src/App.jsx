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

  // For preserving each levels stack once its rendered, {dict of stacks}
  // Note to self: since the key will be used dynamically I use [] instead of .
  const [levelStacks, setLevelStacks] = useState({
    Perception: null,
    Connection: null,
    Reflection: null,
  });

  // Update stack when level changes
  useEffect(() => {
    // Retreieve stack for level that has already been loaded
    if (levelStacks[selectedLevel]) {
      setStack(levelStacks[selectedLevel]);
      setPrompt(getPrompt(levelStacks[selectedLevel]));
    } else {
      // Level was never loaded, aka users first time playing
      const newStack = populateWithRandomPrompts(selectedLevel);
      // setLevelStacks(newStack);
      setLevelStacks((prevStacks) => ({
        ...prevStacks,
        [selectedLevel]: newStack,
      }));
      setStack(newStack);
      setPrompt(getPrompt(newStack));
    }
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
