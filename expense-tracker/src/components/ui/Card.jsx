// src/components/ui/Card.jsx
function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
