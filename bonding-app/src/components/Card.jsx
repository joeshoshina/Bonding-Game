const Card = ({ level, prompt, touchCard, setTouchCard }) => {
  return (
    <button className="card" onClick={() => setTouchCard(!touchCard)}>
      <h2>{touchCard ? prompt : level}</h2>
    </button>
  );
};

export default Card;
