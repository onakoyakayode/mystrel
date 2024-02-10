import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`flex justify-center items-center h-[47px] hover:opacity-80 text-white font-bold py-2 px-4 rounded-[18px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
