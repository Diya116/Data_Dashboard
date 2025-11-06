import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
}) => {
  let style = "";

  if (variant === "primary") {
    style = "bg-primary text-white ";
  } else if (variant === "secondary") {
    style = "bg-white text-black ";
  } else if (variant === "danger") {
    style = "bg-red-100 border border-red-500  rounded-md text-red-500 ";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md font-medium cursor-pointer transition-colors ${style} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;