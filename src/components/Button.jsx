import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border font-medium rounded-full transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-accent hover:bg-accent/90 hover:shadow-md focus:ring-accent transform hover:-translate-y-0.5",
    secondary: "border-accent text-accent bg-transparent hover:bg-accent hover:text-white focus:ring-accent",
    outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-500",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
