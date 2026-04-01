import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  type = "button", 
  onClick, 
  variant = 'primary', 
  className = "" 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent text-white px-10 py-5 hover:bg-accent-hover hover:scale-105 shadow-luxury",
    secondary: "border border-accent text-accent bg-transparent px-10 py-5 hover:bg-accent/5 hover:scale-105",
    outline: "border border-text-primary text-text-primary bg-transparent px-8 py-3 hover:bg-text-primary hover:text-white"
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;

