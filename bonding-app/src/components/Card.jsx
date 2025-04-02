const Card = ({ level, prompt, showPromptAmount, touchCard, onTap }) => {
  return (
    <button className="card" onClick={onTap}>
      <h4>{touchCard ? showPromptAmount : null}</h4>
      <h2>{touchCard ? prompt : level}</h2>
    </button>
  );
};

export default Card;
