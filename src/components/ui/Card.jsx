function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-border
        bg-surface
        p-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
