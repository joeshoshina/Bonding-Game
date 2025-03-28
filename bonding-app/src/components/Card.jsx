const Card = ({ level, prompt, touchCard, onTap }) => {
  return (
    <button className="card" onClick={onTap}>
      <h2>{touchCard ? prompt : level}</h2>
    </button>
  );
};

export default Card;
