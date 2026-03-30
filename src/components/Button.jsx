import { Link } from 'react-router-dom';

const Button = ({ children, to, type = "button", onClick, className = "" }) => {
  const baseClasses = `
    inline-flex items-center justify-center 
    px-8 py-3
    rounded-full 
    bg-accent text-white font-semibold 
    shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
    transition-all duration-300
    hover:bg-accent-hover hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
  `;

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
