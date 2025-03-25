import React, { useState } from "react";

const LevelSelector = ({ level, onSelect }) => {
  return (
    <button className="level-selector" onClick={() => onSelect(level)}>
      <h3>{level}</h3>
    </button>
  );
};

export default LevelSelector;
