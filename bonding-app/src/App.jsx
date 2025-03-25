import React, { useState } from "react";
import Card from "./components/Card.jsx";
import "./index.css";
const App = () => {
  return (
    <>
      <div className="card-container">
        <Card
          level="Perception"
          prompt="What was your first impression of me?"
        />
      </div>
    </>
  );
};

export default App;
