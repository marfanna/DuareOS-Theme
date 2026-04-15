import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-pitaya-orange text-white hover:bg-opacity-90',
    secondary: 'bg-white text-pitaya-dark border-2 border-pitaya-dark hover:bg-pitaya-light',
    dark: 'bg-pitaya-dark text-white hover:bg-opacity-90',
    outline: 'bg-transparent border-2 border-pitaya-orange text-pitaya-orange hover:bg-pitaya-orange hover:text-white',
  };

  return (
    <button
      className={`px-6 py-2 rounded-full font-secular uppercase text-sm tracking-tighter transition-all duration-200 transform hover:scale-105 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
