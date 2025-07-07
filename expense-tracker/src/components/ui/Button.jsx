// src/components/ui/Button.jsx
function Button({ children, variant = 'primary', ...props }) {
  const base = 'px-4 py-2 rounded font-medium transition';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button {...props} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
