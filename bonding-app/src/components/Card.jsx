import React, { useState } from "react";

const Card = ({ level, prompt }) => {
  const [touchCard, setTouchCard] = useState(false);
  return (
    <button className="card" onClick={() => setTouchCard(!touchCard)}>
      <h2>{touchCard ? prompt : level}</h2>
    </button>
  );
};

export default Card;
