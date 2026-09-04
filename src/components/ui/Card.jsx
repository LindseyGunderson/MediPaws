function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-lg
        bg-surface
        p-6
        shadow-card
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
